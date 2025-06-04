
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface ProfileData {
  nome: string;
  telefone?: string;
  tipo: 'cliente' | 'profissional';
}

export const useProfileManager = () => {
  const [isCreatingProfile, setIsCreatingProfile] = useState(false);
  const { toast } = useToast();

  const createProfile = async (userId: string, profileData: ProfileData): Promise<boolean> => {
    try {
      setIsCreatingProfile(true);
      
      console.log('=== CRIANDO PERFIL DIRETAMENTE ===');
      console.log('UserId:', userId);
      console.log('Dados:', profileData);
      
      const { data, error } = await supabase
        .from('profiles')
        .insert({
          id: userId,
          nome: profileData.nome,
          tipo: profileData.tipo,
          telefone: profileData.telefone || null
        })
        .select()
        .single();

      if (error) {
        console.error('Erro ao criar perfil:', error);
        return false;
      }

      console.log('✅ Perfil criado com sucesso:', data);
      return true;
    } catch (error: any) {
      console.error('Erro inesperado ao criar perfil:', error);
      return false;
    } finally {
      setIsCreatingProfile(false);
    }
  };

  const verifyProfile = async (userId: string): Promise<boolean> => {
    try {
      console.log('=== VERIFICANDO SE PERFIL EXISTE ===');
      
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Erro ao verificar perfil:', error);
        return false;
      }

      const exists = !!data;
      console.log(exists ? '✅ Perfil encontrado:' : '❌ Perfil não encontrado', data);
      return exists;
    } catch (error: any) {
      console.error('Erro inesperado ao verificar perfil:', error);
      return false;
    }
  };

  const ensureProfile = async (userId: string, profileData: ProfileData): Promise<boolean> => {
    console.log('=== GARANTINDO QUE PERFIL EXISTE ===');
    
    // Primeiro, verificar se já existe
    const profileExists = await verifyProfile(userId);
    
    if (profileExists) {
      console.log('✅ Perfil já existe, não é necessário criar');
      return true;
    }

    // Se não existe, tentar criar
    console.log('🔄 Perfil não encontrado, tentando criar...');
    const created = await createProfile(userId, profileData);
    
    if (!created) {
      toast({
        title: "Erro no cadastro",
        description: "Não foi possível criar o perfil do usuário",
        variant: "destructive",
      });
      return false;
    }

    toast({
      title: "Perfil criado!",
      description: "Dados do usuário foram salvos com sucesso",
    });
    
    return true;
  };

  return {
    createProfile,
    verifyProfile,
    ensureProfile,
    isCreatingProfile
  };
};
