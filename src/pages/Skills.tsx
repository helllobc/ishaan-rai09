
import { motion } from 'framer-motion';
import { Code, Palette, Database, Zap, Shield, Cpu } from 'lucide-react';
import Navigation from '../components/Navigation';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'cyber-blue',
      skills: [
        { name: 'C++', level: 90 },
        { name: 'Python', level: 88 },
        { name: 'JavaScript', level: 92 },
        { name: 'TypeScript', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'C', level: 85 },
      ],
    },
    {
      title: 'Frontend Development',
      icon: Palette,
      color: 'cyber-pink',
      skills: [
        { name: 'React.js', level: 92 },
        { name: 'Next.js', level: 88 },
        { name: 'TailwindCSS', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Responsive Design', level: 90 },
      ],
    },
    {
      title: 'Backend & Database',
      icon: Database,
      color: 'cyber-green',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 88 },
        { name: 'FastAPI', level: 80 },
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 82 },
        { name: 'Prisma ORM', level: 78 },
      ],
    },
    {
      title: 'AI/ML & Tools',
      icon: Cpu,
      color: 'cyber-yellow',
      skills: [
        { name: 'LangChain', level: 85 },
        { name: 'TensorFlow', level: 80 },
        { name: 'Streamlit', level: 88 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'Figma', level: 85 },
      ],
    },
  ];

  const achievements = [
    { title: 'Hackathon Champion', description: 'Won 8+ hackathons including Gamethon 1st place', icon: Zap },
    { title: 'Dean\'s List', description: 'Top project team out of 200 students', icon: Shield },
    { title: 'AI Specialist', description: 'Expert in machine learning and automation', icon: Cpu },
    { title: 'Full Stack Developer', description: 'Mastered end-to-end development', icon: Code },
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
              Advanced capabilities acquired through countless hours of competitive programming and hackathon battles
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
