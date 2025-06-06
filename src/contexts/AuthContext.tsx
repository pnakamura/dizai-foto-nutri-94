import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
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
  const [initialized, setInitialized] = useState(false);
  const [redirectTimer, setRedirectTimer] = useState<NodeJS.Timeout | null>(null);
  const { toast } = useToast();
  const { redirectUserByType } = useAuthRedirect();
  const { ensureProfileExists } = useProfileCreation();

  const handleAuthRedirect = useCallback(async (userId: string) => {
    if (!userId || !initialized) return;
    
    const currentPath = window.location.pathname;
    const isAlreadyInMainPage = ['/dashboard', '/professional', '/admin'].includes(currentPath);
    
    if (!isAlreadyInMainPage) {
      console.log('🔄 Redirecionando usuário baseado no tipo...');
      
      // Debounce o redirecionamento para evitar chamadas múltiplas
      if (redirectTimer) {
        clearTimeout(redirectTimer);
      }
      
      const timer = setTimeout(() => {
        redirectUserByType(userId);
      }, 300);
      
      setRedirectTimer(timer);
    } else {
      console.log('✅ Usuário já está na página correta:', currentPath);
    }
  }, [redirectUserByType, initialized, redirectTimer]);

  useEffect(() => {
    if (initialized) return; // Evitar múltiplas inicializações

    console.log('🚀 AuthProvider inicializando uma única vez...');
    
    let isMounted = true;

    const initializeAuth = async () => {
      try {
        // Configurar listener ANTES de verificar sessão
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
          async (event, currentSession) => {
            if (!isMounted) return;
            
            console.log('📡 Auth state changed:', {
              event,
              userEmail: currentSession?.user?.email,
              currentPath: window.location.pathname
            });
            
            setSession(currentSession);
            setUser(currentSession?.user ?? null);
            setLoading(false);

            // Apenas redirecionar em SIGNED_IN se não estivermos em reset-password
            if (event === 'SIGNED_IN' && currentSession?.user) {
              if (window.location.pathname !== '/reset-password') {
                console.log('✅ Login detectado, preparando redirecionamento...');
                setTimeout(() => {
                  handleAuthRedirect(currentSession.user.id);
                }, 500);
              }
            }

            // Reset em logout
            if (event === 'SIGNED_OUT') {
              if (redirectTimer) {
                clearTimeout(redirectTimer);
                setRedirectTimer(null);
              }
              console.log('👋 Logout detectado, redirecionando para home...');
              // Garantir que realmente limpe o estado
              setUser(null);
              setSession(null);
              // Redirecionar apenas se não estivermos já na home ou em páginas públicas
              const currentPath = window.location.pathname;
              const publicPaths = ['/', '/auth', '/login', '/register', '/reset-password'];
              if (!publicPaths.includes(currentPath)) {
                window.location.href = '/';
              }
            }
          }
        );

        // Verificar sessão existente
        const { data: { session: currentSession } } = await supabase.auth.getSession();
        
        if (isMounted) {
          console.log('🔍 Sessão existente encontrada:', {
            hasSession: !!currentSession,
            userEmail: currentSession?.user?.email,
            currentPath: window.location.pathname
          });
          
          setSession(currentSession);
          setUser(currentSession?.user ?? null);
          setLoading(false);
          setInitialized(true);
        }

        return () => {
          isMounted = false;
          subscription.unsubscribe();
        };
      } catch (error) {
        console.error('Erro na inicialização do auth:', error);
        if (isMounted) {
          setLoading(false);
          setInitialized(true);
        }
      }
    };

    initializeAuth();

    return () => {
      isMounted = false;
      if (redirectTimer) {
        clearTimeout(redirectTimer);
      }
    };
  }, [handleAuthRedirect, initialized, redirectTimer]);

  const signUp = useCallback(async (email: string, password: string, userData?: any) => {
    try {
      setLoading(true);
      const redirectUrl = `${window.location.origin}/`;
      
      console.log('=== INICIANDO SIGNUP DETALHADO ===');
      console.log('📧 Email:', email);
      console.log('📋 UserData recebido:', userData);
      
      // Validar dados obrigatórios antes de enviar
      if (!userData?.nome?.trim()) {
        console.error('❌ Nome é obrigatório mas não foi fornecido');
        toast({
          title: "Erro no cadastro",
          description: "Nome é obrigatório",
          variant: "destructive",
        });
        return { error: new Error('Nome é obrigatório') };
      }
      
      if (!userData?.telefone?.trim()) {
        console.error('❌ Telefone é obrigatório mas não foi fornecido');
        toast({
          title: "Erro no cadastro",
          description: "Telefone é obrigatório",
          variant: "destructive",
        });
        return { error: new Error('Telefone é obrigatório') };
      }
      
      const metaData = {
        nome: userData?.nome?.trim() || email.split('@')[0],
        email: email.trim(),
        telefone: userData?.telefone?.trim() || '',
        tipo: userData?.tipo || 'cliente'
      };
      
      console.log('📝 MetaData preparado para envio:', metaData);
      
      // Validação final dos metadados
      console.log('🔍 Validação final dos dados:');
      console.log('  ✅ Nome:', metaData.nome);
      console.log('  ✅ Email:', metaData.email);
      console.log('  ✅ Telefone:', metaData.telefone);
      console.log('  ✅ Tipo:', metaData.tipo);
      
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          emailRedirectTo: redirectUrl,
          data: metaData
        }
      });

      console.log('📡 Resposta do Supabase signUp:', { 
        userData: data?.user ? {
          id: data.user.id,
          email: data.user.email,
          metadata: data.user.user_metadata
        } : null,
        error 
      });

      if (error) {
        console.error('❌ Erro no signUp:', error);
        toast({
          title: "Erro no cadastro",
          description: error.message,
          variant: "destructive",
        });
        return { error };
      }

      if (data?.user) {
        console.log('✅ Usuário criado no Supabase:', data.user.id);
        console.log('📋 Metadados salvos no usuário:', data.user.user_metadata);
        
        // Aguardar um pouco para o trigger processar
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        console.log('🔄 Iniciando criação/verificação do perfil...');
        const profileCreated = await ensureProfileExists(data.user.id, metaData);
        
        if (!profileCreated) {
          console.warn('⚠️ Falha na criação do perfil via fallback');
          toast({
            title: "Conta criada com aviso",
            description: "Conta criada, mas houve problema na criação do perfil. Contate o suporte se necessário.",
            variant: "destructive",
          });
        } else {
          console.log('✅ Perfil criado/verificado com sucesso');
          toast({
            title: "Cadastro realizado!",
            description: "Verifique seu email para confirmar sua conta.",
          });
        }
      }

      return { error };
    } catch (error: any) {
      console.error('❌ Erro inesperado no signup:', error);
      toast({
        title: "Erro no cadastro",
        description: error.message,
        variant: "destructive",
      });
      return { error };
    } finally {
      setLoading(false);
    }
  }, [toast, ensureProfileExists]);

  const signIn = useCallback(async (email: string, password: string) => {
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
  }, [toast]);

  const signOut = useCallback(async () => {
    try {
      setLoading(true);
      console.log('🔄 Iniciando processo de logout...');
      
      // Limpar timers e estado local primeiro
      if (redirectTimer) {
        clearTimeout(redirectTimer);
        setRedirectTimer(null);
      }
      
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        console.error('❌ Erro no logout:', error);
        toast({
          title: "Erro no logout",
          description: error.message,
          variant: "destructive",
        });
      } else {
        console.log('✅ Logout realizado com sucesso');
        toast({
          title: "Logout realizado",
          description: "Você foi desconectado com sucesso.",
        });
      }
    } catch (error: any) {
      console.error('❌ Erro inesperado no logout:', error);
      toast({
        title: "Erro no logout",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [toast, redirectTimer]);

  const resetPassword = useCallback(async (email: string) => {
    try {
      console.log('🔄 Iniciando reset de senha para:', email);
      
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
  }, [toast]);

  const value = useMemo(() => ({
    user,
    session,
    loading,
    signUp,
    signIn,
    signOut,
    resetPassword,
  }), [user, session, loading, signUp, signIn, signOut, resetPassword]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
