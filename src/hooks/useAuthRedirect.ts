
import { supabase } from '@/integrations/supabase/client';

export const useAuthRedirect = () => {
  const redirectUserByType = async (userId: string) => {
    if (!userId) {
      console.warn('⚠️ UserId não fornecido para redirecionamento');
      return;
    }

    try {
      console.log('🔍 Buscando perfil do usuário:', userId);
      
      // Implementar retry para a busca de perfil
      let profile = null;
      let error = null;
      let attempts = 0;
      const maxAttempts = 3;

      while (attempts < maxAttempts && !profile) {
        attempts++;
        
        const { data, error: fetchError } = await supabase
          .from('profiles')
          .select('tipo')
          .eq('id', userId)
          .single();

        if (fetchError) {
          error = fetchError;
          console.warn(`❌ Tentativa ${attempts} falhou:`, fetchError);
          
          if (attempts < maxAttempts) {
            console.log(`🔄 Aguardando ${attempts * 500}ms antes da próxima tentativa...`);
            await new Promise(resolve => setTimeout(resolve, attempts * 500));
          }
        } else {
          profile = data;
          error = null;
        }
      }

      if (error && !profile) {
        console.error('❌ Erro ao buscar perfil após todas as tentativas:', error);
        window.location.href = '/dashboard';
        return;
      }

      if (profile) {
        console.log('✅ Perfil encontrado, tipo:', profile.tipo);
        
        const currentPath = window.location.pathname;
        let targetPath = '/dashboard';

        switch (profile.tipo) {
          case 'admin':
            targetPath = '/admin';
            break;
          case 'profissional':
            targetPath = '/professional';
            break;
          case 'cliente':
          default:
            targetPath = '/dashboard';
            break;
        }

        // Só navegar se não estivermos já na página correta
        if (currentPath !== targetPath) {
          console.log(`🚀 Navegando de ${currentPath} para ${targetPath}`);
          
          // Pequeno delay para garantir que a UI está pronta
          setTimeout(() => {
            window.location.href = targetPath;
          }, 100);
        } else {
          console.log(`✅ Já estamos na página correta: ${currentPath}`);
        }
      } else {
        console.log('⚠️ Perfil não encontrado, redirecionando para dashboard');
        window.location.href = '/dashboard';
      }
    } catch (error) {
      console.error('❌ Erro inesperado ao buscar perfil:', error);
      window.location.href = '/dashboard';
    }
  };

  return { redirectUserByType };
};
