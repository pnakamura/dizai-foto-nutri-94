
import React from 'react';

const StepItem: React.FC<{ number: number; title: string; description: string }> = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-neon text-dizai-dark-blue font-bold text-xl mb-4 animate-pulse-glow">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-foreground/80 text-center md:text-left">{description}</p>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 px-4 md:px-8 bg-dizai-deep-purple/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How It <span className="gradient-text">Works</span>
        </h2>
        <p className="text-foreground/80 max-w-2xl mx-auto">
          Just three simple steps to get a complete nutritional analysis.
        </p>
      </div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <StepItem 
            number={1} 
            title="Snap a photo of your meal" 
            description="Use your smartphone to photograph your meal with WhatsApp's camera."
          />
          <StepItem 
            number={2} 
            title="Send it to DizAi on WhatsApp" 
            description="Send the image to our number and let our AI do the analysis."
          />
          <StepItem 
            number={3} 
            title="Receive nutritional details" 
            description="Instantly receive nutritional values and personalized weight loss tips."
          />
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="glass-card rounded-xl p-8 max-w-3xl w-full">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4">
                  Simplified <span className="text-dizai-neon-green text-neon">Tracking</span>
                </h3>
                <p className="text-foreground/80 mb-6">
                  DizAi stores your meal history and provides insights about your eating habits over time, helping you make adjustments to reach your goals.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-dizai-neon-green"></div>
                  <span className="text-sm text-foreground/70">Advanced artificial intelligence</span>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <div className="w-2 h-2 rounded-full bg-dizai-neon-green"></div>
                  <span className="text-sm text-foreground/70">Accurate food analysis</span>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <div className="w-2 h-2 rounded-full bg-dizai-neon-green"></div>
                  <span className="text-sm text-foreground/70">24/7 nutritional support</span>
                </div>
              </div>
              <div className="w-full md:w-auto">
                <div className="border border-dizai-light-purple/20 rounded-lg p-1 shadow-neon">
                  <div className="bg-black rounded-md p-4">
                    <div className="text-xs text-dizai-neon-purple mb-1">DizAi • Now</div>
                    <div className="bg-dizai-deep-purple/50 rounded-lg p-3 max-w-[260px]">
                      <p className="text-sm">Your meal has approximately 520 calories, 30g of protein, 15g of fat, and 50g of carbs. To improve results, consider reducing carbs in your next meal. 💪</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
