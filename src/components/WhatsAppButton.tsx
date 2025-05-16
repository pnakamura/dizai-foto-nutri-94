
import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface WhatsAppButtonProps extends ButtonProps {
  showBadge?: boolean;
  buttonText?: string;
  fullWidth?: boolean;
  className?: string;
  iconOnly?: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  showBadge = false,
  buttonText = "Comece Agora",
  fullWidth = false,
  className,
  iconOnly = false,
  ...props
}) => {
  // URL codificado da mensagem "Olá! Quero saber mais sobre o Diz aí?"
  const whatsappMessage = encodeURIComponent("Olá! Quero saber mais sobre o Diz aí?");
  const whatsappLink = `https://wa.me/555189457133?text=${whatsappMessage}`;
  
  return (
    <Button
      asChild
      className={cn(
        "bg-dizai-whatsapp hover:bg-dizai-whatsapp-dark text-white whatsapp-button",
        fullWidth ? "w-full" : "",
        iconOnly ? "p-3" : "px-6 py-5",
        className
      )}
      {...props}
    >
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <MessageSquare className={iconOnly ? "h-5 w-5" : "mr-2 h-5 w-5"} />
        {!iconOnly && (
          <>
            {buttonText}
            {showBadge && (
              <Badge variant="outline" className="bg-dizai-neon-green text-dizai-dark-blue border-none ml-1 px-2">
                Grátis
              </Badge>
            )}
          </>
        )}
      </a>
    </Button>
  );
};

export default WhatsAppButton;
