
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { session } = useAuth();
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isValidToken, setIsValidToken] = useState(false);
  const [isCheckingToken, setIsCheckingToken] = useState(true);

  // Capturar parâmetros da URL
  const accessToken = searchParams.get('access_token') || searchParams.get('token');
  const refreshToken = searchParams.get('refresh_token');
  const type = searchParams.get('type');
  const errorCode = searchParams.get('error');
  const errorDescription = searchParams.get('error_description');

  useEffect(() => {
    const checkTokenAndSetSession = async () => {
      console.log('🔍 Verificando parâmetros da URL:', {
        accessToken: accessToken ? 'presente' : 'ausente',
        refreshToken: refreshToken ? 'presente' : 'ausente',
        type,
        errorCode,
        errorDescription,
        currentSession: session ? 'presente' : 'ausente',
        allParams: Object.fromEntries(searchParams)
      });

      // Se já temos uma sessão ativa e os parâmetros corretos, considerar válido
      if (session && type === 'recovery') {
        console.log('✅ Sessão de recuperação ativa detectada');
        setIsValidToken(true);
        setIsCheckingToken(false);
        toast({
          title: "Sessão de recuperação ativa",
          description: "Agora você pode definir sua nova senha.",
        });
        return;
      }

      // Verificar se há erro nos parâmetros
      if (errorCode) {
        console.error('❌ Erro nos parâmetros:', errorCode, errorDescription);
        toast({
          title: "Erro no link",
          description: errorDescription || "Houve um problema com o link de recuperação.",
          variant: "destructive",
        });
        navigate('/login');
        return;
      }

      // Verificar parâmetros necessários
      if (!accessToken || !refreshToken) {
        console.error('❌ Parâmetros ausentes:', { accessToken: !!accessToken, refreshToken: !!refreshToken });
        toast({
          title: "Link inválido",
          description: "O link de recuperação de senha é inválido. Solicite um novo.",
          variant: "destructive",
        });
        navigate('/login');
        return;
      }

      // Verificar tipo de ação
      if (type !== 'recovery') {
        console.error('❌ Tipo inválido:', type);
        toast({
          title: "Link inválido",
          description: "Este link não é para recuperação de senha.",
          variant: "destructive",
        });
        navigate('/login');
        return;
      }

      try {
        console.log('🔧 Tentando definir sessão...');
        const { data, error } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });

        if (error) {
          console.error('❌ Erro ao definir sessão:', error);
          
          // Tratar diferentes tipos de erro
          if (error.message.includes('expired') || error.message.includes('invalid')) {
            toast({
              title: "Link expirado",
              description: "O link de recuperação expirou. Solicite um novo reset de senha.",
              variant: "destructive",
            });
          } else {
            toast({
              title: "Erro",
              description: error.message || "Não foi possível validar o link de recuperação.",
              variant: "destructive",
            });
          }
          
          navigate('/login');
        } else {
          console.log('✅ Sessão definida com sucesso:', data);
          setIsValidToken(true);
          toast({
            title: "Link válido",
            description: "Agora você pode definir sua nova senha.",
          });
        }
      } catch (error: any) {
        console.error('❌ Erro inesperado:', error);
        toast({
          title: "Erro inesperado",
          description: "Ocorreu um erro ao processar o link. Tente solicitar um novo.",
          variant: "destructive",
        });
        navigate('/login');
      } finally {
        setIsCheckingToken(false);
      }
    };

    checkTokenAndSetSession();
  }, [accessToken, refreshToken, type, errorCode, errorDescription, session, navigate, toast, searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast({
        title: "Senhas não coincidem",
        description: "As senhas digitadas não são iguais.",
        variant: "destructive",
      });
      return;
    }

    if (password.length < 6) {
      toast({
        title: "Senha muito curta",
        description: "A senha deve ter pelo menos 6 caracteres.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      console.log('🔐 Tentando atualizar senha...');
      const { error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) {
        console.error('❌ Erro ao atualizar senha:', error);
        toast({
          title: "Erro",
          description: error.message || "Não foi possível atualizar a senha.",
          variant: "destructive",
        });
      } else {
        console.log('✅ Senha atualizada com sucesso');
        toast({
          title: "Senha atualizada!",
          description: "Sua senha foi alterada com sucesso. Redirecionando para o login...",
        });

        // Fazer logout para forçar novo login com nova senha
        await supabase.auth.signOut();
        
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
    } catch (error: any) {
      console.error('❌ Erro inesperado:', error);
      toast({
        title: "Erro inesperado",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRequestNewReset = () => {
    navigate('/login');
    toast({
      title: "Solicite um novo reset",
      description: "Use a opção 'Esqueceu sua senha?' na página de login.",
    });
  };

  if (isCheckingToken) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="flex items-center justify-center p-8">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-dizai-brand-green border-t-transparent mx-auto mb-4"></div>
              <p className="text-muted-foreground font-medium">Validando link de recuperação...</p>
              <p className="text-xs text-muted-foreground mt-2">Aguarde um momento</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!isValidToken) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-red-600">
              Link Inválido ou Expirado
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              O link de recuperação de senha não é válido ou já expirou.
            </p>
            <Button 
              onClick={handleRequestNewReset}
              className="w-full bg-gradient-button hover:opacity-90"
            >
              Solicitar Novo Reset
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold gradient-text">
              Redefinir Senha
            </CardTitle>
            <p className="text-muted-foreground">
              Digite sua nova senha abaixo
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Nova Senha</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Digite sua nova senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar Nova Senha</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirme sua nova senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    minLength={6}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-button hover:opacity-90"
                disabled={isLoading}
              >
                {isLoading ? 'Atualizando...' : 'Atualizar Senha'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResetPassword;
