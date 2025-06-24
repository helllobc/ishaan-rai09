
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Shield, Cpu, Database } from 'lucide-react';
import Navigation from '../components/Navigation';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Neural Network Dashboard',
      category: 'AI/ML',
      description: 'Real-time neural network visualization with cyberpunk aesthetics',
      tech: ['React', 'Three.js', 'TensorFlow', 'WebGL'],
      status: 'COMPLETED',
      icon: Cpu,
      gradient: 'from-cyber-blue to-cyber-green',
    },
    {
      id: 2,
      title: 'Quantum Data Vault',
      category: 'Security',
      description: 'Encrypted data storage with biometric authentication',
      tech: ['Node.js', 'MongoDB', 'Encryption', 'Biometrics'],
      status: 'IN PROGRESS',
      icon: Shield,
      gradient: 'from-cyber-pink to-cyber-purple',
    },
    {
      id: 3,
      title: 'Holographic Portfolio',
      category: 'Frontend',
      description: 'Interactive 3D portfolio with WebXR integration',
      tech: ['React', 'Three.js', 'WebXR', 'Framer Motion'],
      status: 'DEPLOYED',
      icon: Zap,
      gradient: 'from-cyber-green to-cyber-yellow',
    },
    {
      id: 4,
      title: 'Blockchain Explorer',
      category: 'Web3',
      description: 'Cryptocurrency transaction explorer with real-time updates',
      tech: ['Next.js', 'Web3.js', 'GraphQL', 'Socket.io'],
      status: 'BETA',
      icon: Database,
      gradient: 'from-cyber-yellow to-cyber-pink',
    },
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
              PROJECT ARCHIVES
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-cyber-blue to-cyber-pink mx-auto mb-8" />
            <p className="font-rajdhani text-xl text-gray-300 max-w-2xl mx-auto">
              Explore my digital arsenal of cutting-edge projects that push the boundaries of technology
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="holo-card p-8 h-full relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-share-tech ${
                      project.status === 'COMPLETED' ? 'bg-cyber-green/20 text-cyber-green' :
                      project.status === 'DEPLOYED' ? 'bg-cyber-blue/20 text-cyber-blue' :
                      project.status === 'IN PROGRESS' ? 'bg-cyber-yellow/20 text-cyber-yellow' :
                      'bg-cyber-pink/20 text-cyber-pink'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Project Icon */}
                  <div className="relative z-10 mb-6">
                    <div className="w-16 h-16 cyber-glass rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <project.icon className="w-8 h-8 text-cyber-blue group-hover:text-cyber-pink transition-colors" />
                    </div>
                    <span className="font-share-tech text-sm text-cyber-blue">{project.category}</span>
                  </div>

                  {/* Project Info */}
                  <div className="relative z-10">
                    <h3 className="font-orbitron text-2xl font-bold neon-text-pink mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="font-rajdhani text-gray-300 mb-6">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-cyber-dark/50 border border-cyber-blue/30 rounded-full text-xs font-share-tech text-cyber-blue"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <button className="flex items-center space-x-2 px-4 py-2 cyber-glass rounded-lg hover:bg-cyber-blue/10 transition-colors group/btn">
                        <ExternalLink className="w-4 h-4 text-cyber-blue group-hover/btn:text-cyber-pink transition-colors" />
                        <span className="font-share-tech text-sm text-cyber-blue group-hover/btn:text-cyber-pink transition-colors">
                          VIEW LIVE
                        </span>
                      </button>
                      
                      <button className="flex items-center space-x-2 px-4 py-2 cyber-glass rounded-lg hover:bg-cyber-green/10 transition-colors group/btn">
                        <Github className="w-4 h-4 text-cyber-green group-hover/btn:text-cyber-yellow transition-colors" />
                        <span className="font-share-tech text-sm text-cyber-green group-hover/btn:text-cyber-yellow transition-colors">
                          SOURCE
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Hover Effects */}
                  <motion.div
                    className="absolute inset-0 border-2 border-cyber-blue/0 rounded-lg transition-all duration-300 group-hover:border-cyber-blue/50"
                    whileHover={{ scale: 1.02 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
