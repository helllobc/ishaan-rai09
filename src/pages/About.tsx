
import { motion } from 'framer-motion';
import { Code, Zap, Target, Trophy } from 'lucide-react';
import Navigation from '../components/Navigation';

const About = () => {
  const stats = [
    { label: 'Hackathons Won', value: '8+', icon: Trophy },
    { label: 'Years Experience', value: '2+', icon: Zap },
    { label: 'Projects Built', value: '15+', icon: Code },
    { label: 'CGPA', value: '7.40', icon: Target },
  ];

  return (
    <div className="min-h-screen bg-cyber-darker overflow-x-hidden">
      <Navigation />
      
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-orbitron text-5xl md:text-7xl font-bold neon-text mb-6">
              ABOUT PROTOCOL
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-cyber-blue to-cyber-pink mx-auto mb-8" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Avatar Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="cyber-glass p-8 rounded-lg relative overflow-hidden">
                {/* Animated Avatar Placeholder */}
                <div className="relative w-64 h-64 mx-auto mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue to-cyber-pink rounded-full opacity-20 animate-pulse" />
                  <div className="absolute inset-4 bg-gradient-to-br from-cyber-green to-cyber-yellow rounded-full opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute inset-8 bg-gradient-to-br from-cyber-pink to-cyber-blue rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
                  
                  {/* Center Avatar */}
                  <div className="absolute inset-12 bg-cyber-dark rounded-full border-2 border-cyber-blue flex items-center justify-center">
                    <span className="font-orbitron text-4xl font-bold neon-text">IR</span>
                  </div>
                </div>

                {/* Scanning Effect */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-blue to-transparent"
                  animate={{ y: [0, 300, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
              </div>
            </motion.div>

            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="cyber-glass p-8 rounded-lg">
                <h2 className="font-orbitron text-3xl font-bold neon-text-pink mb-6">
                  DIGITAL ARCHITECT
                </h2>
                
                <div className="space-y-4 font-rajdhani text-lg text-gray-300">
                  <p>
                    Greetings, I'm <span className="text-cyber-blue font-bold">Ishaan Rai</span>, 
                    a 3rd-year Computer Science student at Chitkara University with a passion for 
                    AI, automation, and competitive programming. Currently maintaining a 7.40 CGPA 
                    while dominating hackathons across the nation.
                  </p>
                  
                  <p>
                    My mission is to join a MAANG company as a Software Engineer, building 
                    innovative solutions that bridge AI technology with real-world problems. 
                    As an extroverted coder, I thrive in collaborative environments and love 
                    the thrill of hackathon competitions.
                  </p>
                  
                  <p>
                    With 8+ hackathon victories including 1st place at Gamethon (₹6,000 prize) 
                    and multiple top-10 finishes in national competitions, I'm always ready 
                    for the next coding challenge that pushes technological boundaries.
                  </p>
                </div>

                {/* Status Indicators */}
                <div className="flex space-x-4 mt-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
                    <span className="font-share-tech text-sm text-cyber-green">HACKATHON READY</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyber-blue rounded-full animate-pulse" />
                    <span className="font-share-tech text-sm text-cyber-blue">DEAN'S LIST</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20"
          >
            <h3 className="font-orbitron text-3xl font-bold neon-text-green text-center mb-12">
              COMBAT STATISTICS
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="holo-card p-6 text-center group"
                >
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-cyber-blue group-hover:text-cyber-pink transition-colors" />
                  <div className="font-orbitron text-3xl font-bold neon-text mb-2">
                    {stat.value}
                  </div>
                  <div className="font-rajdhani text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default About;
