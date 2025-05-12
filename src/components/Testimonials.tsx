
import React from 'react';

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
};

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, author, role }) => {
  return (
    <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:border-dizai-neon-green">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-dizai-neon-green" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-foreground/90 italic mb-6">{quote}</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-foreground/70 text-sm">{role}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Com o DizAi, mudei minha relação com a comida. Agora sei exatamente o que estou consumindo sem precisar de aplicativos complicados.",
      author: "Mariana Silva",
      role: "Perdeu 15kg em 6 meses"
    },
    {
      quote: "Como profissional ocupado, ter análises nutricionais precisas direto no WhatsApp fez toda a diferença na minha dieta.",
      author: "Ricardo Oliveira",
      role: "Empresário, 42 anos"
    },
    {
      quote: "O DizAi me ajudou a entender meus hábitos alimentares. As dicas personalizadas são sempre relevantes para o meu objetivo.",
      author: "Camila Santos",
      role: "Professora, 35 anos"
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 md:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          O que Nossos <span className="gradient-text">Usuários Dizem</span>
        </h2>
        <p className="text-foreground/80 max-w-2xl mx-auto">
          Histórias reais de pessoas que transformaram sua alimentação com o DizAi.
        </p>
      </div>
      
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
      
      <div className="mt-16 text-center">
        <div className="inline-flex items-center justify-center space-x-2 bg-dizai-deep-purple/30 rounded-full py-2 px-4 border border-dizai-light-purple/20">
          <span className="text-dizai-neon-green font-medium">4.9</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-dizai-neon-green" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-foreground/70 text-sm">+10.000 usuários satisfeitos</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
