
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "I'M ISHAAN RAI";
  const subtitle = "CODE COMMANDER • DIGITAL ARCHITECT • CYBER WARRIOR";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Circuit Pattern */}
        <div className="absolute inset-0 cyber-grid opacity-20" />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyber-blue rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Flowing Circuit Lines */}
        <motion.div
          className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-pink to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-green to-transparent"
          animate={{ x: ['100%', '-100%'] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="font-orbitron text-4xl md:text-6xl lg:text-8xl font-black tracking-wider mb-4">
            <span className="neon-text block">
              {displayText}
              <motion.span
                className="inline-block w-1 h-16 bg-cyber-blue ml-2"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mb-12"
        >
          <p className="font-rajdhani text-lg md:text-xl lg:text-2xl text-gray-300 tracking-widest">
            {subtitle.split('').map((char, index) => (
              <motion.span
                key={index}
                className="inline-block hover:text-cyber-pink transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 + index * 0.03 }}
              >
                {char}
              </motion.span>
            ))}
          </p>
        </motion.div>

        {/* Stats HUD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto"
        >
          {[
            { label: 'PROJECTS', value: '25+', color: 'cyber-blue' },
            { label: 'SKILLS', value: '15+', color: 'cyber-pink' },
            { label: 'EXPERIENCE', value: '3Y', color: 'cyber-green' },
            { label: 'COMMITS', value: '1K+', color: 'cyber-yellow' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="cyber-glass p-4 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`font-orbitron text-2xl font-bold text-${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="font-share-tech text-xs text-gray-400 tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          <motion.button
            onClick={scrollToNext}
            className="group relative cyber-glass px-8 py-4 rounded-full font-orbitron font-bold tracking-wider text-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center space-x-3">
              <span className="text-cyber-blue group-hover:text-white transition-colors duration-300">
                START MISSION
              </span>
              <motion.span
                className="text-cyber-pink"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ▶
              </motion.span>
            </span>
            
            {/* Hover Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-cyber-pink"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-gray-400"
          >
            <span className="font-share-tech text-xs tracking-wider">SCROLL</span>
            <div className="w-6 h-10 border border-gray-400 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-cyber-blue rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Corner HUD Elements */}
      <div className="absolute top-8 left-8 font-share-tech text-xs text-cyber-blue opacity-60">
        NEURAL_LINK_ACTIVE
      </div>
      <div className="absolute top-8 right-8 font-share-tech text-xs text-cyber-green opacity-60">
        SYSTEM_ONLINE
      </div>
      <div className="absolute bottom-8 left-8 font-share-tech text-xs text-cyber-pink opacity-60">
        CREATIVITY_LEVEL_MAX
      </div>
      <div className="absolute bottom-8 right-8 font-share-tech text-xs text-cyber-yellow opacity-60 hidden md:block">
        READY_FOR_DEPLOYMENT
      </div>
    </section>
  );
};

export default Hero;
