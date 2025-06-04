
import { useState, useEffect } from 'react';
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
  const { user } = useAuth();
  const { toast } = useToast();

  const fetchProfile = async () => {
    if (!user) {
      setProfile(null);
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) {
        console.error('Erro ao buscar perfil:', error);
        toast({
          title: "Erro ao carregar perfil",
          description: "Não foi possível carregar seus dados",
          variant: "destructive",
        });
        return;
      }

      setProfile(data);
    } catch (error) {
      console.error('Erro inesperado ao buscar perfil:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (updates: Partial<UserProfile>) => {
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
  };

  const isAdmin = () => {
    return profile?.tipo === 'admin';
  };

  const isProfessional = () => {
    return profile?.tipo === 'profissional';
  };

  const isClient = () => {
    return profile?.tipo === 'cliente';
  };

  useEffect(() => {
    fetchProfile();
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
