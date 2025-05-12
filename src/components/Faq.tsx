
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq: React.FC = () => {
  const faqs = [
    {
      question: "Como o DizAi consegue analisar precisamente minha comida?",
      answer: "O DizAi usa inteligência artificial avançada para reconhecer alimentos e ingredientes a partir de fotos. Nossa tecnologia foi treinada com milhões de imagens de alimentos diferentes para garantir análises nutricionais precisas."
    },
    {
      question: "Preciso pagar para usar o DizAi?",
      answer: "Oferecemos um plano gratuito com análises básicas. Para acesso a recursos avançados como histórico completo, planos nutricionais personalizados e suporte prioritário, temos planos premium acessíveis."
    },
    {
      question: "Quanto tempo leva para receber a análise?",
      answer: "Na maioria dos casos, você recebe os resultados em segundos! Em momentos de alto tráfego, pode levar até 30 segundos, mas trabalhamos continuamente para garantir a resposta mais rápida possível."
    },
    {
      question: "O DizAi funciona com qualquer tipo de comida?",
      answer: "Sim! O DizAi foi treinado com uma ampla variedade de culinárias e pratos de todo o mundo, incluindo pratos brasileiros tradicionais, fast food, refeições caseiras e muito mais."
    },
    {
      question: "Minhas informações e fotos são seguras?",
      answer: "Absolutamente. Sua privacidade é nossa prioridade. Todas as fotos enviadas são processadas com segurança e não são compartilhadas com terceiros. Usamos criptografia avançada e seguimos rigorosas políticas de privacidade."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 px-4 md:px-8 bg-dizai-deep-purple/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Perguntas <span className="gradient-text">Frequentes</span>
        </h2>
        <p className="text-foreground/80 max-w-2xl mx-auto">
          Tire suas dúvidas sobre o DizAi e comece a usar hoje mesmo.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-dizai-light-purple/20">
              <AccordionTrigger className="text-left py-4 hover:text-dizai-neon-green transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-foreground/70 mb-4">
          Ainda tem dúvidas? Entre em contato com nosso suporte
        </p>
        <a 
          href="#" 
          className="inline-flex items-center text-dizai-neon-green hover:underline"
        >
          Fale Conosco
          <svg 
            className="ml-2 w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Faq;
