
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useProfileManager } from '@/hooks/useProfileManager';
import { useToast } from '@/hooks/use-toast';

interface SignUpFormProps {
  onSuccess: () => void;
}

const SignUpForm = ({ onSuccess }: SignUpFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [tipo, setTipo] = useState<'cliente' | 'profissional'>('cliente');
  
  const { signUp, loading } = useAuth();
  const { ensureProfile, isCreatingProfile } = useProfileManager();
  const { toast } = useToast();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password.length < 6) {
      toast({
        title: "Senha muito curta",
        description: "A senha deve ter pelo menos 6 caracteres",
        variant: "destructive",
      });
      return;
    }

    if (!nome.trim()) {
      toast({
        title: "Nome obrigatório",
        description: "Por favor, informe seu nome completo",
        variant: "destructive",
      });
      return;
    }

    console.log('=== INÍCIO DO PROCESSO DE CADASTRO ===');
    console.log('Dados do formulário:', { 
      email: email.trim(), 
      nome: nome.trim(), 
      telefone: telefone.trim(), 
      tipo,
      passwordLength: password.length 
    });
    
    try {
      // Passo 1: Fazer signup no Supabase Auth
      console.log('🔄 Passo 1: Executando signUp...');
      const result = await signUp(email.trim(), password, {
        nome: nome.trim(),
        telefone: telefone.trim(),
        tipo: tipo
      });
      
      if (result.error) {
        console.error('❌ Erro no signUp:', result.error);
        
        let errorMessage = "Erro ao criar conta";
        if (result.error.message.includes('User already registered')) {
          errorMessage = "Este email já está cadastrado";
        } else if (result.error.message.includes('Invalid email')) {
          errorMessage = "Email inválido";
        }
        
        toast({
          title: "Erro no cadastro",
          description: `${errorMessage}: ${result.error.message}`,
          variant: "destructive",
        });
        return;
      }

      console.log('✅ Passo 1 concluído: SignUp realizado com sucesso');
      
      // Passo 2: Aguardar um pouco e verificar se precisa criar perfil manualmente
      console.log('🔄 Passo 2: Aguardando e verificando perfil...');
      
      setTimeout(async () => {
        try {
          // Obter o usuário atual
          const { data: { user } } = await supabase.auth.getUser();
          
          if (user) {
            console.log('🔄 Passo 3: Garantindo que perfil existe...');
            
            const profileCreated = await ensureProfile(user.id, {
              nome: nome.trim(),
              telefone: telefone.trim(),
              tipo: tipo
            });
            
            if (profileCreated) {
              console.log('✅ PROCESSO COMPLETO: Usuário e perfil criados com sucesso');
            } else {
              console.error('❌ Falha ao garantir criação do perfil');
            }
          }
        } catch (error) {
          console.error('Erro no processo de verificação:', error);
        }
      }, 2000);
      
      // Limpar formulário e mostrar sucesso
      setEmail('');
      setPassword('');
      setNome('');
      setTelefone('');
      setTipo('cliente');
      
      toast({
        title: "Conta criada!",
        description: "Verifique seu email para confirmar sua conta.",
      });
      
      onSuccess();
      
    } catch (error: any) {
      console.error('=== ERRO INESPERADO NO PROCESSO ===');
      console.error('Erro completo:', error);
      
      toast({
        title: "Erro inesperado",
        description: `Tente novamente: ${error.message}`,
        variant: "destructive",
      });
    }
  };

  const isSubmitting = loading || isCreatingProfile;

  return (
    <form onSubmit={handleSignUp} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="nome">Nome Completo *</Label>
        <Input
          id="nome"
          type="text"
          placeholder="Seu nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="register-email">Email *</Label>
        <Input
          id="register-email"
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="telefone">Telefone</Label>
        <Input
          id="telefone"
          type="tel"
          placeholder="(11) 99999-9999"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="tipo">Tipo de Conta *</Label>
        <Select 
          value={tipo} 
          onValueChange={(value: 'cliente' | 'profissional') => setTipo(value)}
          disabled={isSubmitting}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cliente">Cliente</SelectItem>
            <SelectItem value="profissional">Profissional</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="register-password">Senha *</Label>
        <div className="relative">
          <Input
            id="register-password"
            type={showPassword ? "text" : "password"}
            placeholder="Sua senha (mínimo 6 caracteres)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
            disabled={isSubmitting}
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
            disabled={isSubmitting}
          >
            {showPassword ? (
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
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Criando conta...' : 'Criar Conta'}
      </Button>
    </form>
  );
};

export default SignUpForm;
