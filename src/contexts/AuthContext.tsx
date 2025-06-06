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

  // Função aprimorada para detectar sessão de recuperação
  const isRecoverySession = (): boolean => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('access_token');
    const refreshToken = urlParams.get('refresh_token');
    const type = urlParams.get('type');
    
    console.log('🔍 Verificando se é sessão de recuperação:', {
      accessToken: accessToken ? 'presente' : 'ausente',
      refreshToken: refreshToken ? 'presente' : 'ausente',
      type,
      currentPath: window.location.pathname,
      fullUrl: window.location.href
    });
    
    return !!(accessToken && refreshToken && type === 'recovery');
  };

  // Função para redirecionar para reset de senha preservando parâmetros
  const redirectToResetPassword = () => {
    const urlParams = window.location.search;
    const resetUrl = `/reset-password${urlParams}`;
    console.log('🔄 Redirecionando para reset de senha:', resetUrl);
    
    // Usar replace para não criar entrada no histórico
    window.location.replace(resetUrl);
  };

  useEffect(() => {
    console.log('🚀 AuthProvider inicializando...');
    
    // Verificar IMEDIATAMENTE se estamos em uma sessão de recuperação
    if (isRecoverySession() && window.location.pathname !== '/reset-password') {
      console.log('🔄 Sessão de recuperação detectada ANTES do listener, redirecionando...');
      redirectToResetPassword();
      return;
    }

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        console.log('📡 Auth state changed:', {
          event,
          userEmail: currentSession?.user?.email,
          currentPath: window.location.pathname,
          isRecovery: isRecoverySession()
        });
        
        // PRIMEIRA PRIORIDADE: Verificar se é recovery session
        if (isRecoverySession() && window.location.pathname !== '/reset-password') {
          console.log('🔄 Recovery session detectada no listener, redirecionando...');
          redirectToResetPassword();
          return;
        }
        
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        setLoading(false);

        // Redirecionamento normal apenas se NÃO for recovery
        if (event === 'SIGNED_IN' && currentSession?.user && !isRecoverySession()) {
          console.log('✅ Login normal detectado (não recovery), redirecionando...');
          setTimeout(() => {
            redirectUserByType(currentSession.user.id);
          }, 500);
        }
      }
    );

    // Verificar sessão existente
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      console.log('🔍 Verificando sessão existente:', {
        hasSession: !!currentSession,
        userEmail: currentSession?.user?.email,
        isRecovery: isRecoverySession(),
        currentPath: window.location.pathname
      });
      
      // Se há sessão e é recovery, redirecionar
      if (currentSession && isRecoverySession() && window.location.pathname !== '/reset-password') {
        console.log('🔄 Sessão de recovery existente, redirecionando...');
        redirectToResetPassword();
        return;
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
      
      // URL com domínio correto
      const redirectUrl = `https://dizai-foto-nutri-94.lovable.app/reset-password`;
      
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
