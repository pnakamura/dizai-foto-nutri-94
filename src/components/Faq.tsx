
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
      question: "How does DizAi accurately analyze my food?",
      answer: "DizAi uses advanced artificial intelligence to recognize foods and ingredients from photos. Our technology is trained on millions of different food images to ensure accurate nutritional analysis."
    },
    {
      question: "Do I need to pay to use DizAi?",
      answer: "We offer a free plan with basic analysis. For access to advanced features like complete history, personalized nutrition plans, and priority support, we have affordable premium plans."
    },
    {
      question: "How long does it take to receive the analysis?",
      answer: "In most cases, you receive results in seconds! During high traffic times, it may take up to 30 seconds, but we continuously work to ensure the fastest possible response."
    },
    {
      question: "Does DizAi work with any type of food?",
      answer: "Yes! DizAi has been trained with a wide variety of cuisines and dishes from around the world, including traditional Brazilian dishes, fast food, home-cooked meals, and much more."
    },
    {
      question: "Are my information and photos secure?",
      answer: "Absolutely. Your privacy is our priority. All submitted photos are securely processed and not shared with third parties. We use advanced encryption and follow strict privacy policies."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 px-4 md:px-8 bg-dizai-deep-purple/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>
        <p className="text-foreground/80 max-w-2xl mx-auto">
          Get answers about DizAi and start using it today.
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
          Still have questions? Contact our support
        </p>
        <a 
          href="#" 
          className="inline-flex items-center text-dizai-neon-green hover:underline"
        >
          Contact Us
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
