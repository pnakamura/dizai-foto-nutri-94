import React, { useState, useEffect } from 'react';

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
};

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, author, role }) => {
  return (
    <div className="glass-card rounded-xl p-5 md:p-6 transition-all duration-300 hover:border-dizai-brand-green hover:scale-105 h-full">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-dizai-brand-green" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-foreground/80 italic mb-6 text-sm md:text-base">{quote}</p>
      <div>
        <p className="font-semibold text-foreground">{author}</p>
        <p className="text-foreground/60 text-xs md:text-sm">{role}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);
  
  const testimonials = [
    {
      quote: "O DizAi mudou minha relação com a comida. Agora sei exatamente o que estou consumindo sem aplicativos complicados.",
      author: "Mariana Silva",
      role: "Perdeu 15kg em 6 meses"
    },
    {
      quote: "Como profissional ocupado, ter análise nutricional precisa diretamente no WhatsApp fez toda a diferença na minha dieta.",
      author: "Ricardo Oliveira",
      role: "Empresário, 42 anos"
    },
    {
      quote: "O DizAi me ajudou a entender meus hábitos alimentares. As dicas personalizadas são sempre relevantes para o meu objetivo.",
      author: "Camila Santos",
      role: "Professora, 35 anos"
    },
  ];

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  const renderTestimonials = () => {
    if (!isMobile) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
            />
          ))}
        </div>
      );
    }

    return (
      <div className="relative px-2">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out" 
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-1">
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-6 flex justify-center items-center gap-4">
          {testimonials.map((_, index) => (
            <button 
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex ? 'bg-dizai-brand-green' : 'bg-gray-300'
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Ver depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-12 md:py-24 px-4 md:px-8">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-foreground">
          O Que Nossos <span className="gradient-text">Usuários Dizem</span>
        </h2>
        <p className="text-foreground/70 max-w-2xl mx-auto text-sm md:text-base">
          Histórias reais de pessoas que transformaram seus hábitos alimentares com o DizAi.
        </p>
      </div>
      
      {renderTestimonials()}
      
      <div className="mt-10 md:mt-16 text-center">
        <div className="inline-flex items-center justify-center space-x-2 bg-white/80 rounded-full py-2 px-4 border border-dizai-brand-green/20 animate-pulse-subtle shadow-sm">
          <span className="text-dizai-brand-green font-medium">4.9</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3 h-3 md:w-4 md:h-4 text-dizai-brand-green" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-foreground/60 text-xs md:text-sm">+10.000 usuários satisfeitos</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
