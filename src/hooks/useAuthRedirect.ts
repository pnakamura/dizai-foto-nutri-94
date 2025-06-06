
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

export const useAuthRedirect = () => {
  const navigate = useNavigate();

  const redirectUserByType = async (userId: string) => {
    try {
      console.log('🔍 Buscando perfil do usuário:', userId);
      
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('tipo')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('❌ Erro ao buscar perfil:', error);
        navigate('/dashboard');
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
          navigate(targetPath, { replace: true });
        } else {
          console.log(`✅ Já estamos na página correta: ${currentPath}`);
        }
      } else {
        console.log('⚠️ Perfil não encontrado, redirecionando para dashboard');
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('❌ Erro inesperado ao buscar perfil:', error);
      navigate('/dashboard');
    }
  };

  return { redirectUserByType };
};
