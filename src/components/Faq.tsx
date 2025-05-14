
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
      question: "Como o DizAi analisa meus alimentos com precisão?",
      answer: "O DizAi utiliza inteligência artificial avançada para reconhecer alimentos e ingredientes a partir de fotos. Nossa tecnologia é treinada com milhões de imagens diferentes de alimentos para garantir análise nutricional precisa."
    },
    {
      question: "Preciso pagar para usar o DizAi?",
      answer: "Oferecemos um plano gratuito com análise básica. Para acesso a recursos avançados como histórico completo, planos nutricionais personalizados e suporte prioritário, temos planos premium acessíveis."
    },
    {
      question: "Quanto tempo leva para receber a análise?",
      answer: "Na maioria dos casos, você recebe resultados em segundos! Durante horários de tráfego intenso, pode levar até 30 segundos, mas trabalhamos continuamente para garantir a resposta mais rápida possível."
    },
    {
      question: "O DizAi funciona com qualquer tipo de comida?",
      answer: "Sim! O DizAi foi treinado com uma ampla variedade de culinárias e pratos de todo o mundo, incluindo pratos tradicionais brasileiros, fast food, refeições caseiras e muito mais."
    },
    {
      question: "Minhas informações e fotos estão seguras?",
      answer: "Absolutamente. Sua privacidade é nossa prioridade. Todas as fotos enviadas são processadas com segurança e não compartilhadas com terceiros. Usamos criptografia avançada e seguimos políticas estritas de privacidade."
    },
    {
      question: "Como profissional de saúde, posso integrar o DizAi ao meu trabalho?",
      answer: "Sim! Muitos profissionais de nutrição e saúde usam o DizAi como uma ferramenta complementar. Oferecemos um programa especial para profissionais com recursos adicionais para acompanhamento de clientes e pacientes."
    },
    {
      question: "Os dados do DizAi substituem uma consulta com nutricionista?",
      answer: "O DizAi é uma ferramenta de apoio, não um substituto para aconselhamento profissional. Recomendamos sempre consultar nutricionistas ou médicos para planos alimentares completos e orientações personalizadas para sua saúde."
    },
  ];

  return (
    <section id="faq" className="py-12 md:py-24 px-4 md:px-8 bg-dizai-deep-purple/30">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
          Perguntas <span className="gradient-text">Frequentes</span>
        </h2>
        <p className="text-foreground/80 max-w-2xl mx-auto text-sm md:text-base">
          Obtenha respostas sobre o DizAi e comece a usá-lo hoje.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-dizai-light-purple/20">
              <AccordionTrigger className="text-left py-3 md:py-4 hover:text-dizai-neon-green transition-colors text-sm md:text-base pr-2">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 pb-3 md:pb-4 text-xs md:text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
      <div className="mt-10 md:mt-16 text-center">
        <p className="text-foreground/70 mb-3 md:mb-4 text-sm md:text-base">
          Ainda tem dúvidas? Entre em contato com nosso suporte
        </p>
        <a 
          href="#" 
          className="inline-flex items-center text-dizai-neon-green hover:underline text-sm md:text-base"
        >
          Fale Conosco
          <svg 
            className="ml-1 md:ml-2 w-4 h-4" 
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
