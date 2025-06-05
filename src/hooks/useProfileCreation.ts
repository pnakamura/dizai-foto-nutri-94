
import { supabase } from '@/integrations/supabase/client';

export const useProfileCreation = () => {
  const ensureProfileExists = async (userId: string, userData: any) => {
    try {
      console.log('🔍 Verificando se perfil existe para user:', userId);
      
      // Verificar se o perfil já existe
      const { data: existingProfile, error: checkError } = await supabase
        .from('profiles')
        .select('id')
        .eq('id', userId)
        .maybeSingle();

      if (checkError) {
        console.error('Erro ao verificar perfil existente:', checkError);
        return false;
      }

      if (existingProfile) {
        console.log('✅ Perfil já existe, não precisa criar');
        return true;
      }

      console.log('🔄 Perfil não encontrado, criando via fallback...');
      
      // Se não existe, criar via fallback
      const profileData = {
        id: userId,
        nome: userData?.nome?.trim() || 'Usuário',
        email: userData?.email?.trim() || null,
        telefone: userData?.telefone?.trim() || null,
        tipo: userData?.tipo || 'cliente'
      };

      const { error: insertError } = await supabase
        .from('profiles')
        .insert(profileData);

      if (insertError) {
        console.error('❌ Erro no fallback de criação de perfil:', insertError);
        return false;
      }

      console.log('✅ Perfil criado com sucesso via fallback');
      return true;
      
    } catch (error: any) {
      console.error('❌ Erro inesperado no fallback:', error);
      return false;
    }
  };

  return { ensureProfileExists };
};
