
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import HowItWorksSimple from '@/components/HowItWorksSimple';
import TestimonialSection from '@/components/TestimonialSection';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar se há tokens de recovery na URL (formato hash)
    const checkForRecoveryTokens = () => {
      const hashParams = new URLSearchParams(window.location.hash.substring(1));
      const accessToken = hashParams.get('access_token');
      const refreshToken = hashParams.get('refresh_token');
      const type = hashParams.get('type');

      console.log('🔍 Index: Verificando tokens na URL:', {
        hasAccessToken: !!accessToken,
        hasRefreshToken: !!refreshToken,
        type,
        currentUrl: window.location.href,
        hash: window.location.hash
      });

      // Se há tokens de recovery, redirecionar para a página de reset
      if (accessToken && refreshToken && type === 'recovery') {
        console.log('🔄 Index: Tokens de recovery detectados, redirecionando para /reset-password');
        
        // Preservar o hash completo na navegação
        const fullHash = window.location.hash;
        navigate(`/reset-password${fullHash}`, { replace: true });
        return true;
      }

      return false;
    };

    // Verificar imediatamente
    const redirected = checkForRecoveryTokens();
    
    // Se não redirecionou, verificar novamente após um pequeno delay
    // (caso o hash ainda esteja sendo processado pelo navegador)
    if (!redirected) {
      const timeoutId = setTimeout(() => {
        checkForRecoveryTokens();
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <HowItWorksSimple />
      <TestimonialSection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;
