import React, { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  useEffect(() => {
    if (!particlesRef.current) return;
    
    // Create particles with optimized count for different devices
    const container = particlesRef.current;
    const particleCount = window.innerWidth < 768 ? 8 : window.innerWidth < 1024 ? 12 : 20;
    
    // Clear existing particles
    container.innerHTML = '';
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Optimized size for different devices
      const size = window.innerWidth < 768 ? 
        Math.random() * 8 + 3 : // Mobile
        Math.random() * 15 + 5;  // Desktop
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Optimized positioning
      particle.style.left = `${Math.random() * 90 + 5}%`;
      particle.style.top = `${Math.random() * 90 + 5}%`;
      
      // Staggered animation delay
      particle.style.animationDelay = `${Math.random() * 8}s`;
      
      // Optimized colors and effects
      const color = Math.random() > 0.5 ? '#00F0FF' : '#8A2BE2';
      particle.style.backgroundColor = color;
      const shadowBlur = window.innerWidth < 768 ? 5 : 10;
      particle.style.boxShadow = `0 0 ${shadowBlur}px ${color}`;
      
      // Reduced opacity for better performance
      particle.style.opacity = `${Math.random() * 0.3 + 0.1}`;
      
      container.appendChild(particle);
    }
  }, []);

  // Animation variants with reduced motion support
  const contentVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Optimized background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-accent/30 via-background to-background opacity-90 md:opacity-70"></div>
      <div className="absolute inset-0 bg-black/50 md:bg-black/40" style={{ zIndex: 2 }}></div>
      
      {/* Optimized particles */}
      <div ref={particlesRef} className="particles-container" style={{ zIndex: 3, opacity: 0.3 }}></div>
      
      {/* Content */}
      <div className="container-custom relative" style={{ zIndex: 5 }}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            className="framer-motion"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Automate Your Business Growth with{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-purple-accent">
                AI-Powered Solutions
              </span>
            </h1>
          </motion.div>
          
          <motion.div
            className="framer-motion"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8">
              Custom AI Agents | Lead Generation | Seamless CRM Integration
            </p>
          </motion.div>
          
          <motion.div
            className="framer-motion"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <a 
              href="#contact" 
              className="btn-primary inline-flex items-center gap-2 text-base sm:text-lg"
            >
              Book Your Strategy Call
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Optimized scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        style={{ zIndex: 5 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <a href="#features" aria-label="Scroll to features">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-white/60"
          >
            <path 
              d="M12 5V19M12 19L5 12M12 19L19 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;