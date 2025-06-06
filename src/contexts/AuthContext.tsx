import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useAuthRedirect } from '@/hooks/useAuthRedirect';
import { useProfileCreation } from '@/hooks/useProfileCreation';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, userData?: any) => Promise<{ error: any }>;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: any }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const { redirectUserByType } = useAuthRedirect();
  const { ensureProfileExists } = useProfileCreation();

  // Função para verificar se é uma sessão de recuperação
  const isRecoverySession = (currentSession: Session | null): boolean => {
    if (!currentSession) return false;
    
    // Verificar parâmetros da URL atual
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('access_token') || urlParams.get('token');
    const type = urlParams.get('type');
    const refreshToken = urlParams.get('refresh_token');
    
    // Se há tokens na URL e tipo é recovery, é uma sessão de recuperação
    return !!(accessToken && refreshToken && type === 'recovery');
  };

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        console.log('Auth state changed:', event, currentSession?.user?.email);
        
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        setLoading(false);

        // Verificar se é uma sessão de recuperação de senha
        if (event === 'TOKEN_REFRESHED' || event === 'SIGNED_IN') {
          if (isRecoverySession(currentSession)) {
            console.log('🔄 Sessão de recuperação detectada, redirecionando...');
            
            // Usar setTimeout para garantir que o estado seja atualizado primeiro
            setTimeout(() => {
              window.location.href = '/reset-password' + window.location.search;
            }, 100);
            return;
          }
        }

        // Redirecionamento normal para login bem-sucedido (não recovery)
        if (event === 'SIGNED_IN' && currentSession?.user && !isRecoverySession(currentSession)) {
          console.log('✅ Login normal detectado, redirecionando baseado no tipo...');
          setTimeout(() => {
            redirectUserByType(currentSession.user.id);
          }, 500);
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      console.log('Sessão existente verificada:', currentSession?.user?.email);
      
      // Se já há uma sessão e estamos na página inicial, verificar se é recovery
      if (currentSession && window.location.pathname === '/') {
        if (isRecoverySession(currentSession)) {
          console.log('🔄 Sessão de recuperação existente detectada');
          window.location.href = '/reset-password' + window.location.search;
          return;
        }
      }
      
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, userData?: any) => {
    try {
      setLoading(true);
      const redirectUrl = `${window.location.origin}/`;
      
      console.log('=== INICIANDO SIGNUP ===');
      console.log('Email:', email);
      console.log('UserData:', userData);
      
      // Preparar metadata limpa
      const metaData = {
        nome: userData?.nome?.trim() || email.split('@')[0],
        email: email.trim(),
        telefone: userData?.telefone?.trim() || '',
        tipo: userData?.tipo || 'cliente'
      };
      
      console.log('MetaData para envio:', metaData);
      
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          emailRedirectTo: redirectUrl,
          data: metaData
        }
      });

      console.log('Resposta do signUp:', { data, error });

      if (error) {
        console.error('Erro no signUp:', error);
        toast({
          title: "Erro no cadastro",
          description: error.message,
          variant: "destructive",
        });
        return { error };
      }

      if (data?.user) {
        console.log('✅ Usuário criado:', data.user.id);
        
        // Aguardar um pouco para o trigger processar
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Verificar e garantir que o perfil foi criado
        const profileCreated = await ensureProfileExists(data.user.id, metaData);
        
        if (!profileCreated) {
          console.warn('⚠️ Falha no fallback de perfil, mas signup foi realizado');
          toast({
            title: "Conta criada com aviso",
            description: "Conta criada, mas houve problema na criação do perfil. Contate o suporte se necessário.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Cadastro realizado!",
            description: "Verifique seu email para confirmar sua conta.",
          });
        }
      }

      return { error };
    } catch (error: any) {
      console.error('Erro inesperado no signup:', error);
      toast({
        title: "Erro no cadastro",
        description: error.message,
        variant: "destructive",
      });
      return { error };
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast({
          title: "Erro no login",
          description: error.message,
          variant: "destructive",
        });
        return { error };
      }

      if (data?.user) {
        toast({
          title: "Login realizado!",
          description: "Redirecionando...",
        });
        
        // Redirecionar baseado no tipo de usuário
        await redirectUserByType(data.user.id);
      }

      return { error };
    } catch (error: any) {
      toast({
        title: "Erro no login",
        description: error.message,
        variant: "destructive",
      });
      return { error };
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      await supabase.auth.signOut();
      toast({
        title: "Logout realizado",
        description: "Você foi desconectado com sucesso.",
      });
    } catch (error: any) {
      toast({
        title: "Erro no logout",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email: string) => {
    try {
      console.log('🔄 Iniciando reset de senha para:', email);
      
      // URL específica para reset de senha
      const redirectUrl = `${window.location.origin}/reset-password`;
      
      console.log('🔗 URL de redirecionamento:', redirectUrl);

      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: redirectUrl,
      });

      if (error) {
        console.error('❌ Erro no reset:', error);
        toast({
          title: "Erro",
          description: error.message,
          variant: "destructive",
        });
      } else {
        console.log('✅ Email de reset enviado com sucesso');
        toast({
          title: "Email enviado",
          description: "Verifique seu email para redefinir sua senha. O link expira em 1 hora.",
        });
      }

      return { error };
    } catch (error: any) {
      console.error('❌ Erro inesperado no reset:', error);
      toast({
        title: "Erro",
        description: error.message,
        variant: "destructive",
      });
      return { error };
    }
  };

  const value = {
    user,
    session,
    loading,
    signUp,
    signIn,
    signOut,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
