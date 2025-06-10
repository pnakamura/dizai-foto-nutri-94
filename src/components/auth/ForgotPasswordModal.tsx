
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ForgotPasswordModal = ({ isOpen, onClose }: ForgotPasswordModalProps) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { resetPassword } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email obrigatório",
        description: "Por favor, insira seu email para recuperar a senha.",
        variant: "destructive",
      });
      return;
    }

    // Validação básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    console.log('🔄 Iniciando reset de senha para:', email.trim());
    
    try {
      const { error } = await resetPassword(email.trim());
      
      if (error) {
        console.error('❌ Erro no reset de senha:', error);
        
        // Tratamento de erros específicos
        let errorMessage = "Ocorreu um erro ao enviar o email de recuperação.";
        
        if (error.message?.includes('Email not confirmed')) {
          errorMessage = "Este email ainda não foi confirmado. Verifique sua caixa de entrada primeiro.";
        } else if (error.message?.includes('User not found')) {
          errorMessage = "Não encontramos uma conta com este email.";
        } else if (error.message?.includes('Too many requests')) {
          errorMessage = "Muitas tentativas. Aguarde alguns minutos antes de tentar novamente.";
        } else if (error.message?.includes('Invalid email')) {
          errorMessage = "Email inválido. Verifique se o formato está correto.";
        }
        
        toast({
          title: "Erro no envio",
          description: errorMessage,
          variant: "destructive",
        });
      } else {
        console.log('✅ Email de reset enviado com sucesso');
        toast({
          title: "Email enviado!",
          description: "Verifique sua caixa de entrada e spam para instruções de recuperação de senha.",
        });
        setEmail('');
        onClose();
      }
    } catch (error: any) {
      console.error('❌ Erro inesperado no reset:', error);
      
      let errorMessage = "Erro de conexão. Verifique sua internet e tente novamente.";
      
      if (error.message?.includes('fetch')) {
        errorMessage = "Problema de conexão com o servidor. Tente novamente em alguns instantes.";
      }
      
      toast({
        title: "Erro de conexão",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    if (!isLoading) {
      setEmail('');
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Recuperar Senha</DialogTitle>
          <DialogDescription>
            Digite seu email e enviaremos instruções para recuperar sua senha.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="reset-email">Email</Label>
            <Input
              id="reset-email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>
          
          <div className="flex gap-3 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isLoading}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={isLoading || !email.trim()}
              className="bg-gradient-button hover:opacity-90"
            >
              {isLoading ? 'Enviando...' : 'Enviar'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ForgotPasswordModal;
