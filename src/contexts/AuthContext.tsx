import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

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

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log('Auth state changed:', event, session?.user?.email);
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, userData?: any) => {
    try {
      setLoading(true);
      const redirectUrl = `${window.location.origin}/`;
      
      console.log('=== DADOS PARA CADASTRO ===');
      console.log('Email:', email);
      console.log('Nome:', userData?.nome);
      console.log('Telefone:', userData?.telefone);
      console.log('Tipo:', userData?.tipo);
      console.log('RedirectUrl:', redirectUrl);
      
      // Garantir que os dados estão no formato correto
      const metaData = {
        nome: userData?.nome?.trim() || '',
        telefone: userData?.telefone?.trim() || '',
        tipo: userData?.tipo || 'cliente'
      };
      
      console.log('=== METADATA PREPARADO ===');
      console.log('MetaData:', metaData);
      
      const signUpData = {
        email: email.trim(),
        password,
        options: {
          emailRedirectTo: redirectUrl,
          data: metaData
        }
      };
      
      console.log('=== DADOS FINAIS PARA SUPABASE ===');
      console.log('SignUp data completo:', JSON.stringify(signUpData, null, 2));
      
      const { data, error } = await supabase.auth.signUp(signUpData);

      console.log('=== RESPOSTA DO SUPABASE ===');
      console.log('Data:', data);
      console.log('User criado:', data?.user);
      console.log('User ID:', data?.user?.id);
      console.log('User metadata:', data?.user?.user_metadata);
      console.log('Error:', error);

      if (error) {
        console.error('=== ERRO NO SIGNUP ===');
        console.error('Erro completo:', error);
        toast({
          title: "Erro no cadastro",
          description: error.message,
          variant: "destructive",
        });
      } else {
        console.log('=== SIGNUP REALIZADO COM SUCESSO ===');
        console.log('Aguardando trigger criar perfil...');
        
        // Pequeno delay para aguardar o trigger processar
        setTimeout(async () => {
          if (data?.user?.id) {
            console.log('Verificando se perfil foi criado...');
            try {
              const { data: profile, error: profileError } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', data.user.id)
                .single();
              
              if (profile) {
                console.log('✅ Perfil criado com sucesso:', profile);
              } else {
                console.log('❌ Perfil não encontrado:', profileError);
              }
            } catch (err) {
              console.log('Erro ao verificar perfil:', err);
            }
          }
        }, 2000);
        
        toast({
          title: "Cadastro realizado!",
          description: "Verifique seu email para confirmar sua conta.",
        });
      }

      return { error };
    } catch (error: any) {
      console.error('=== ERRO INESPERADO NO SIGNUP ===');
      console.error('Erro completo:', error);
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
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast({
          title: "Erro no login",
          description: error.message,
          variant: "destructive",
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
      const redirectUrl = `${window.location.origin}/reset-password`;
      
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: redirectUrl,
      });

      if (error) {
        toast({
          title: "Erro",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Email enviado",
          description: "Verifique seu email para redefinir sua senha.",
        });
      }

      return { error };
    } catch (error: any) {
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
