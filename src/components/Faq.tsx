
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
      question: "Como a Ethra analisa meus alimentos com precisão?",
      answer: "A Ethra utiliza inteligência artificial avançada para reconhecer alimentos e ingredientes a partir de fotos. Nossa tecnologia é treinada com milhões de imagens diferentes de alimentos para garantir análise nutricional precisa."
    },
    {
      question: "Preciso pagar para usar a Ethra?",
      answer: "Oferecemos planos acessíveis com análise avançada. Para acesso a recursos como histórico completo, planos nutricionais personalizados e suporte prioritário, temos planos premium que cabem no seu bolso."
    },
    {
      question: "Quanto tempo leva para receber a análise?",
      answer: "Na maioria dos casos, você recebe resultados em segundos! Durante horários de tráfego intenso, pode levar até 30 segundos, mas trabalhamos continuamente para garantir a resposta mais rápida possível."
    },
    {
      question: "A Ethra funciona com qualquer tipo de comida?",
      answer: "Sim! A Ethra foi treinada com uma ampla variedade de culinárias e pratos de todo o mundo, incluindo pratos tradicionais brasileiros, fast food, refeições caseiras e muito mais."
    },
    {
      question: "Minhas informações e fotos estão seguras?",
      answer: "Absolutamente. Sua privacidade é nossa prioridade. Todas as fotos enviadas são processadas com segurança e não compartilhadas com terceiros. Usamos criptografia avançada e seguimos políticas estritas de privacidade."
    },
    {
      question: "Como profissional de saúde, posso integrar a Ethra ao meu trabalho?",
      answer: "Sim! Muitos profissionais de nutrição e saúde usam a Ethra como uma ferramenta complementar. Oferecemos um programa especial para profissionais com recursos adicionais para acompanhamento de clientes e pacientes."
    },
    {
      question: "Os dados da Ethra substituem uma consulta com nutricionista?",
      answer: "A Ethra é uma ferramenta de apoio, não um substituto para aconselhamento profissional. Recomendamos sempre consultar nutricionistas ou médicos para planos alimentares completos e orientações personalizadas para sua saúde."
    },
  ];

  return (
    <section id="faq" className="py-12 md:py-24 px-4 md:px-8 bg-white">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">
          Perguntas <span className="text-[#00C851]">Frequentes</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Obtenha respostas sobre a Ethra e comece a usá-la hoje.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 bg-white">
              <AccordionTrigger className="text-left py-3 md:py-4 hover:text-[#00C851] transition-colors text-sm md:text-base pr-2 text-gray-900">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-3 md:pb-4 text-xs md:text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
      <div className="mt-10 md:mt-16 text-center">
        <p className="text-gray-500 mb-3 md:mb-4 text-sm md:text-base">
          Ainda tem dúvidas? Entre em contato com nosso suporte
        </p>
        <a 
          href="#" 
          className="inline-flex items-center text-[#00C851] hover:underline text-sm md:text-base font-medium"
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
