
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

interface UserProfile {
  id: string;
  nome: string;
  email?: string;
  telefone?: string;
  tipo: 'cliente' | 'profissional' | 'admin';
  status_conta: 'ativo' | 'inativo' | 'pausado';
  status_pagamento: 'primeira_vez' | 'teste' | 'normal' | 'assinatura' | 'pendente';
  
  // Dados específicos de clientes
  peso_atual?: number;
  altura?: number;
  meta_peso?: number;
  meta_calorias?: number;
  meta_agua_ml?: number;
  sequencia_dias?: number;
  progresso_semanal?: number;
  
  // Dados específicos de profissionais
  especialidade?: string;
  registro_profissional?: string;
  biografia?: string;
  taxa_sucesso?: number;
  total_clientes?: number;
  
  // Metadados
  dados_nutricionais?: any;
  preferencias?: any;
  configuracoes?: any;
  configuracoes_consulta?: any;
  metadados?: any;
}

export const useUserProfile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);
  const { user } = useAuth();
  const { toast } = useToast();

  const fetchProfile = useCallback(async (retry = 0) => {
    if (!user) {
      setProfile(null);
      setLoading(false);
      return;
    }

    try {
      console.log(`🔍 Tentativa ${retry + 1} de buscar perfil para:`, user.id);
      
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) {
        console.error('Erro ao buscar perfil:', error);
        
        // Implementar retry logic para erros de rede
        if (error.message.includes('Failed to fetch') && retry < 3) {
          console.log(`🔄 Tentando novamente em ${(retry + 1) * 1000}ms...`);
          setTimeout(() => {
            setRetryCount(prev => prev + 1);
            fetchProfile(retry + 1);
          }, (retry + 1) * 1000);
          return;
        }
        
        // Só mostrar toast após esgotar tentativas
        if (retry >= 2) {
          toast({
            title: "Erro ao carregar perfil",
            description: "Verificando conectividade...",
            variant: "destructive",
          });
        }
        return;
      }

      console.log('✅ Perfil carregado com sucesso:', data);
      setProfile(data);
      setRetryCount(0); // Reset contador em caso de sucesso
    } catch (error) {
      console.error('Erro inesperado ao buscar perfil:', error);
      
      // Retry para erros inesperados também
      if (retry < 3) {
        setTimeout(() => {
          fetchProfile(retry + 1);
        }, (retry + 1) * 1000);
        return;
      }
    } finally {
      if (retry >= 2) { // Só definir loading como false após esgotar tentativas
        setLoading(false);
      }
    }
  }, [user, toast]);

  const updateProfile = useCallback(async (updates: Partial<UserProfile>) => {
    if (!user) return false;

    try {
      setLoading(true);
      
      const { error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', user.id);

      if (error) {
        console.error('Erro ao atualizar perfil:', error);
        toast({
          title: "Erro ao atualizar",
          description: "Não foi possível salvar as alterações",
          variant: "destructive",
        });
        return false;
      }

      // Atualizar estado local
      setProfile(prev => prev ? { ...prev, ...updates } : null);
      
      toast({
        title: "Perfil atualizado",
        description: "Suas alterações foram salvas com sucesso",
      });
      
      return true;
    } catch (error) {
      console.error('Erro inesperado ao atualizar perfil:', error);
      return false;
    } finally {
      setLoading(false);
    }
  }, [user, toast]);

  const isAdmin = useCallback(() => {
    return profile?.tipo === 'admin';
  }, [profile]);

  const isProfessional = useCallback(() => {
    return profile?.tipo === 'profissional';
  }, [profile]);

  const isClient = useCallback(() => {
    return profile?.tipo === 'cliente';
  }, [profile]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  // Resetar retry count quando user muda
  useEffect(() => {
    setRetryCount(0);
  }, [user]);

  return {
    profile,
    loading,
    updateProfile,
    refetchProfile: fetchProfile,
    isAdmin,
    isProfessional,
    isClient
  };
};
