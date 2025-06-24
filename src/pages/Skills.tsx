
import { motion } from 'framer-motion';
import { Code, Palette, Database, Zap, Shield, Cpu } from 'lucide-react';
import Navigation from '../components/Navigation';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Arsenal',
      icon: Code,
      color: 'cyber-blue',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Three.js/WebGL', level: 85 },
        { name: 'Framer Motion', level: 88 },
      ],
    },
    {
      title: 'Backend Systems',
      icon: Database,
      color: 'cyber-green',
      skills: [
        { name: 'Node.js/Express', level: 88 },
        { name: 'Python/Django', level: 82 },
        { name: 'PostgreSQL/MongoDB', level: 85 },
        { name: 'GraphQL/REST APIs', level: 90 },
        { name: 'Docker/Kubernetes', level: 78 },
      ],
    },
    {
      title: 'Design Interface',
      icon: Palette,
      color: 'cyber-pink',
      skills: [
        { name: 'UI/UX Design', level: 90 },
        { name: 'Adobe Creative Suite', level: 85 },
        { name: 'Figma/Sketch', level: 92 },
        { name: 'Motion Graphics', level: 80 },
        { name: 'Brand Identity', level: 88 },
      ],
    },
    {
      title: 'DevOps Protocol',
      icon: Shield,
      color: 'cyber-yellow',
      skills: [
        { name: 'AWS/GCP/Azure', level: 82 },
        { name: 'CI/CD Pipelines', level: 85 },
        { name: 'Monitoring/Logging', level: 80 },
        { name: 'Security Best Practices', level: 88 },
        { name: 'Performance Optimization', level: 90 },
      ],
    },
  ];

  const achievements = [
    { title: 'Full Stack Developer', description: 'Mastered end-to-end development', icon: Cpu },
    { title: 'UI/UX Specialist', description: 'Expert in user experience design', icon: Palette },
    { title: 'Performance Optimizer', description: 'Achieved 99% page speed scores', icon: Zap },
    { title: 'Security Expert', description: 'Implemented zero-breach protocols', icon: Shield },
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
              SKILL MATRICES
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-cyber-blue to-cyber-pink mx-auto mb-8" />
            <p className="font-rajdhani text-xl text-gray-300 max-w-2xl mx-auto">
              Advanced capabilities acquired through countless hours of digital combat
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="holo-card p-8"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 cyber-glass rounded-lg flex items-center justify-center`}>
                    <category.icon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <h3 className="font-orbitron text-2xl font-bold neon-text-pink">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-rajdhani font-medium text-gray-300">
                          {skill.name}
                        </span>
                        <span className={`font-share-tech text-sm text-${category.color}`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Skill Bar */}
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r from-${category.color} to-${category.color}/60`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h2 className="font-orbitron text-3xl font-bold neon-text-green text-center mb-12">
              UNLOCKED ACHIEVEMENTS
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="cyber-glass p-6 text-center group hover:bg-cyber-blue/5 transition-colors"
                >
                  <div className="w-16 h-16 mx-auto mb-4 cyber-glass rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <achievement.icon className="w-8 h-8 text-cyber-blue group-hover:text-cyber-pink transition-colors" />
                  </div>
                  
                  <h4 className="font-orbitron font-bold neon-text mb-2">
                    {achievement.title}
                  </h4>
                  
                  <p className="font-rajdhani text-sm text-gray-400">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Skills;
