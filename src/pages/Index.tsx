
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Trophy, Brain, Users, Target } from 'lucide-react';
import Preloader from '../components/Preloader';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloadComplete = () => {
    setIsLoading(false);
  };

  const achievements = [
    {
      icon: Trophy,
      title: 'Hackathon Champion',
      description: '8+ hackathon victories including 1st place at Gamethon',
      count: '8+',
      color: 'yellow-400'
    },
    {
      icon: Code,
      title: 'Projects Deployed',
      description: 'Full-stack applications solving real-world problems',
      count: '15+',
      color: 'cyan-400'
    },
    {
      icon: Brain,
      title: 'AI Expertise',
      description: 'Specialized in machine learning and automation',
      count: '3+',
      color: 'pink-400'
    },
    {
      icon: Users,
      title: 'Leadership Roles',
      description: 'Class representative and campus ambassador',
      count: '5+',
      color: 'emerald-400'
    }
  ];

  const journey = [
    {
      year: '2023',
      title: 'Journey Begins',
      description: 'Started B.Tech in Computer Science at Chitkara University with a passion for AI and innovation.'
    },
    {
      year: '2024',
      title: 'Hackathon Domination',
      description: 'Won multiple national hackathons including Gamethon 1st place and MCM DAV 3rd position.'
    },
    {
      year: '2025',
      title: 'Current Mission',
      description: 'Maintaining 9.40 CGPA while building AI-powered solutions and leading student initiatives.'
    },
    {
      year: '2027',
      title: 'Future Vision',
      description: 'Target: Securing a Software Engineer position at a MAANG company with expertise in AI/ML.'
    }
  ];

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
        
        {/* About Section */}
        <section id="about" className="min-h-screen py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-pink-400 mb-8" style={{ textShadow: '0 0 20px rgba(244, 114, 182, 0.6)' }}>
                ABOUT PROTOCOL
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 mx-auto mb-8" />
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              {/* Bio Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="cyber-glass p-8 rounded-lg">
                  <h3 className="font-orbitron text-2xl font-bold text-emerald-400 mb-4" style={{ textShadow: '0 0 15px rgba(52, 211, 153, 0.5)' }}>
                    Digital Architect & AI Enthusiast
                  </h3>
                  <div className="space-y-4 font-rajdhani text-lg text-gray-300">
                    <p>
                      Greetings! I'm <span className="text-cyan-400 font-bold">Ishaan Rai</span>, 
                      a 3rd-year Computer Science student at Chitkara University with an unwavering 
                      passion for AI, automation, and the art of competitive programming.
                    </p>
                    <p>
                      Currently maintaining a <span className="text-yellow-400 font-bold">9.40 CGPA</span> 
                      while conquering hackathons across the nation. My ultimate mission: to secure a 
                      coveted position as a Software Engineer at a <span className="text-pink-400 font-bold">MAANG company</span>.
                    </p>
                    <p>
                      As an extroverted coder who thrives in collaborative environments, I've claimed 
                      victory in 8+ hackathons, including 1st place at Gamethon with a ₹6,000 prize. 
                      The thrill of solving complex problems under pressure is what drives my innovation.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Achievement Stats */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="holo-card p-6 text-center group"
                  >
                    <achievement.icon className={`w-12 h-12 mx-auto mb-4 text-${achievement.color} group-hover:scale-110 transition-transform`} />
                    <div className={`font-orbitron text-2xl font-bold text-${achievement.color} mb-2`}>
                      {achievement.count}
                    </div>
                    <div className="font-rajdhani text-sm text-gray-300 mb-2 font-medium">
                      {achievement.title}
                    </div>
                    <div className="font-rajdhani text-xs text-gray-400">
                      {achievement.description}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Journey Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h3 className="font-orbitron text-3xl font-bold text-cyan-400 text-center mb-12" style={{ textShadow: '0 0 15px rgba(34, 211, 238, 0.5)' }}>
                MISSION TIMELINE
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {journey.map((phase, index) => (
                  <motion.div
                    key={phase.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="cyber-glass p-6 rounded-lg relative"
                  >
                    <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full">
                      <span className="font-orbitron text-sm font-bold text-black">{phase.year}</span>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-orbitron text-lg font-bold text-yellow-400 mb-3">
                        {phase.title}
                      </h4>
                      <p className="font-rajdhani text-sm text-gray-300 leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="cyber-glass p-8 rounded-lg max-w-4xl mx-auto">
                <h3 className="font-orbitron text-2xl font-bold text-emerald-400 mb-4" style={{ textShadow: '0 0 15px rgba(52, 211, 153, 0.5)' }}>
                  Ready for the Next Challenge
                </h3>
                <p className="font-rajdhani text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                  Whether it's a hackathon, a collaborative project, or a full-time opportunity at a MAANG company, 
                  I'm always ready to push the boundaries of what's possible with code and creativity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.a
                    href="projects"
                    className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-lg font-orbitron font-bold text-black hover:from-emerald-400 hover:to-yellow-400 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    VIEW PROJECTS
                  </motion.a>
                  <motion.a
                    href="contact"
                    className="px-6 py-3 cyber-glass rounded-lg font-orbitron font-bold text-cyan-400 border border-cyan-400/30 hover:bg-cyan-400/10 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    START COLLABORATION
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.main>
    </div>
  );
};

export default Index;
