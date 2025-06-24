
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 500);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-cyber-darker flex items-center justify-center"
        >
          {/* Animated Background Grid */}
          <div className="absolute inset-0 cyber-grid opacity-30" />
          
          {/* Scanning Line Effect */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-blue to-transparent"
              animate={{ y: ['0vh', '100vh'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          <div className="relative z-10 text-center">
            {/* Main Loading HUD */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="cyber-glass p-8 rounded-lg max-w-md mx-4"
            >
              {/* Title */}
              <motion.h1
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-orbitron text-2xl font-bold neon-text mb-6 tracking-wider"
              >
                INITIALIZING SYSTEM
              </motion.h1>

              {/* Progress Bar Container */}
              <div className="relative mb-6">
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden cyber-border">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyber-blue to-cyber-pink"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
                
                {/* Progress Percentage */}
                <motion.div
                  className="absolute -top-8 right-0 font-share-tech text-cyber-blue"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  {Math.floor(progress)}%
                </motion.div>
              </div>

              {/* Loading Status */}
              <motion.div
                className="font-share-tech text-sm text-gray-400 mb-4"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Loading neural networks...
              </motion.div>

              {/* Rotating HUD Element */}
              <motion.div
                className="relative w-16 h-16 mx-auto"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute inset-0 border-2 border-cyber-blue rounded-full opacity-60" />
                <div className="absolute inset-2 border-2 border-cyber-pink rounded-full opacity-40" />
                <div className="absolute inset-4 border-2 border-cyber-green rounded-full opacity-20" />
                
                {/* Center Dot */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyber-yellow rounded-full animate-pulse" />
              </motion.div>

              {/* System Messages */}
              <motion.div
                className="mt-6 font-share-tech text-xs text-gray-500 space-y-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div>> Connecting to mainframe...</div>
                <div>> Loading portfolio data...</div>
                <div>> Initializing cybersecurity protocols...</div>
                <div>> Ready to deploy...</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Corner HUD Elements */}
          <div className="absolute top-4 left-4 font-share-tech text-xs text-cyber-blue opacity-60">
            SYSTEM v2.1.0
          </div>
          <div className="absolute top-4 right-4 font-share-tech text-xs text-cyber-green opacity-60">
            STATUS: ONLINE
          </div>
          <div className="absolute bottom-4 left-4 font-share-tech text-xs text-cyber-pink opacity-60">
            SECURE CONNECTION
          </div>
          <div className="absolute bottom-4 right-4 font-share-tech text-xs text-cyber-yellow opacity-60">
            LEVEL 5 ACCESS
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
