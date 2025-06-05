
import { supabase } from '@/integrations/supabase/client';

export const useAuthRedirect = () => {
  const redirectUserByType = async (userId: string) => {
    try {
      const { data: profile } = await supabase
        .from('profiles')
        .select('tipo')
        .eq('id', userId)
        .single();

      if (profile) {
        switch (profile.tipo) {
          case 'admin':
            window.location.href = '/admin';
            break;
          case 'profissional':
            window.location.href = '/professional';
            break;
          case 'cliente':
          default:
            window.location.href = '/dashboard';
            break;
        }
      } else {
        window.location.href = '/dashboard';
      }
    } catch (error) {
      console.error('Erro ao buscar perfil do usuário:', error);
      window.location.href = '/dashboard';
    }
  };

  return { redirectUserByType };
};
