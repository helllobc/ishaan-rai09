
import { useState } from 'react';
import { motion } from 'framer-motion';
import Preloader from '../components/Preloader';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloadComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Preloader onComplete={handlePreloadComplete} />;
  }

  return (
    <div className="min-h-screen bg-cyber-darker overflow-x-hidden">
      <Navigation />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        
        {/* About Section Placeholder */}
        <section id="about" className="min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-orbitron text-4xl font-bold neon-text-pink mb-8">
              ABOUT PROTOCOL
            </h2>
            <p className="font-rajdhani text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Digital architect specializing in creating immersive web experiences. 
              Combining cutting-edge technology with cyberpunk aesthetics to build 
              the future of digital interaction.
            </p>
          </motion.div>
        </section>
      </motion.main>
    </div>
  );
};

export default Index;
