import { motion } from 'framer-motion';
import { ExternalLink, Github, Brain, Coffee, Shield, Heart, Calendar, Gamepad2, Music, Lightbulb } from 'lucide-react';
import Navigation from '../components/Navigation';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'NeuroSync AI',
      category: 'AI/Mental Health',
      description: 'Mental health companion with AI chatbot, voice calling agent (Ashna), and encrypted journaling. Provides immediate support for users with depression or suicidal thoughts using sentiment analysis.',
      tech: ['Next.js', 'Groq API', 'VAPI', 'Pinata Cloud', 'AES Encryption'],
      status: 'DEPLOYED',
      icon: Shield,
      gradient: 'from-pink-400 to-purple-400',
      liveUrl: 'https://neuro-sync-updated.vercel.app/',
      githubUrl: 'https://github.com/Ishaan-Rai09/NeuroSync-Updated',
    },
    {
      id: 2,
      title: 'Luxe Health AI',
      category: 'AI/Healthcare',
      description: 'Hackathon-winning healthcare project built with team Slashing Coders. Features MRI image scanning with AI models, PDF report generation with AES encryption, health query LLM, and voice AI calling agent for appointments.',
      tech: ['Next.js', 'AI Models', 'MongoDB', 'Pinata Cloud', 'AES Encryption', 'LLM'],
      status: 'DEPLOYED',
      icon: Heart,
      gradient: 'from-red-400 to-pink-400',
      liveUrl: 'https://code-cubical-4-0.vercel.app/',
      githubUrl: 'https://github.com/Ishaan-Rai09/Code-Cubical-4.0',
      team: 'Team Slashing Coders: Ayushi, Aastha, Darshit',
      hackathon: 'Code-Cubicals 4.0'
    },
    {
      id: 3,
      title: 'Elite Events',
      category: 'Web Platform',
      description: 'College events platform exclusively for Chitkara University students. One-stop solution for discovering and registering for technical, non-technical, and sports events happening on campus.',
      tech: ['Next.js', 'React', 'MongoDB', 'Authentication'],
      status: 'DEPLOYED',
      icon: Calendar,
      gradient: 'from-blue-400 to-purple-400',
      liveUrl: 'https://elite-events-five.vercel.app/',
      githubUrl: 'https://github.com/Ishaan-Rai09/Elite-Events',
    },
    {
      id: 4,
      title: 'Gamethon X',
      category: 'Event Platform',
      description: 'Official website for Gamethon X organized by We Craft company. Platform for gaming event management, registration, and participant coordination.',
      tech: ['Next.js', 'React', 'Event Management'],
      status: 'DEPLOYED',
      icon: Gamepad2,
      gradient: 'from-purple-400 to-indigo-400',
      liveUrl: 'https://gamethon.vercel.app/',
      githubUrl: 'https://github.com/Ishaan-Rai09/gamethon',
    },
    {
      id: 5,
      title: 'GEMP Music Production',
      category: 'Client Project',
      description: 'Professional music production website developed for a client. Features portfolio showcase, service offerings, and client interaction capabilities.',
      tech: ['Next.js', 'React', 'Audio Integration'],
      status: 'DEPLOYED',
      icon: Music,
      gradient: 'from-yellow-400 to-orange-400',
      liveUrl: 'https://gemp-three.vercel.app/',
      githubUrl: 'https://github.com/Ishaan-Rai09/gemp',
    },
    {
      id: 6,
      title: 'BrandStory AI',
      category: 'AI/Productivity',
      description: 'AI-powered tool for hackathon participants. Simply enter your project title and description, and BrandStory AI generates a perfect pitching story to help you present your ideas effectively.',
      tech: ['Next.js', 'AI/LLM', 'Story Generation'],
      status: 'DEPLOYED',
      icon: Lightbulb,
      gradient: 'from-green-400 to-teal-400',
      liveUrl: 'https://brandstory-two.vercel.app/',
      githubUrl: 'https://github.com/Ishaan-Rai09/brandstory',
    },
    {
      id: 7,
      title: 'Brain Tumor Detection',
      category: 'AI/Medical',
      description: 'Medical AI system helping doctors with instant brain tumor detection and classification from MRI images using CNN models and machine learning.',
      tech: ['React', 'Next.js', 'CNN', 'TensorFlow', 'Scikit-learn'],
      status: 'COMPLETED',
      icon: Brain,
      gradient: 'from-cyan-400 to-emerald-400',
      githubUrl: 'https://github.com/Ishaan-Rai09/Brain-Tumor',
    },
    {
      id: 8,
      title: 'Decentralized Coffee Shop',
      category: 'Web3/E-commerce',
      description: 'Coffee e-commerce platform with decentralized payment system using Telos blockchain currency for secure and transparent transactions.',
      tech: ['Next.js', 'MongoDB', 'Telos Blockchain', 'Web3'],
      status: 'DEPLOYED',
      icon: Coffee,
      gradient: 'from-emerald-400 to-yellow-400',
      githubUrl: 'https://github.com/Ishaan-Rai09/coffee-shop',
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
            <h1 className="font-orbitron text-5xl md:text-7xl font-bold text-cyan-400 mb-6" style={{ textShadow: '0 0 20px rgba(34, 211, 238, 0.6)' }}>
              PROJECT ARCHIVES
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto mb-8" />
            <p className="font-rajdhani text-xl text-gray-300 max-w-2xl mx-auto">
              Explore my digital arsenal of AI-powered projects that solve real-world problems
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      project.status === 'COMPLETED' ? 'bg-emerald-400/20 text-emerald-400' :
                      project.status === 'DEPLOYED' ? 'bg-cyan-400/20 text-cyan-400' :
                      'bg-pink-400/20 text-pink-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Project Icon */}
                  <div className="relative z-10 mb-6">
                    <div className="w-16 h-16 cyber-glass rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <project.icon className="w-8 h-8 text-cyan-400 group-hover:text-pink-400 transition-colors" />
                    </div>
                    <span className="font-share-tech text-sm text-cyan-400">{project.category}</span>
                  </div>

                  {/* Project Info */}
                  <div className="relative z-10">
                    <h3 className="font-orbitron text-2xl font-bold text-pink-400 mb-3" style={{ textShadow: '0 0 15px rgba(244, 114, 182, 0.5)' }}>
                      {project.title}
                    </h3>
                    
                    <p className="font-rajdhani text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Team and Hackathon Info */}
                    {(project.team || project.hackathon) && (
                      <div className="mb-4 space-y-1">
                        {project.hackathon && (
                          <p className="font-share-tech text-xs text-yellow-400">
                            HACKATHON: {project.hackathon}
                          </p>
                        )}
                        {project.team && (
                          <p className="font-share-tech text-xs text-emerald-400">
                            TEAM: {project.team}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-cyber-dark/50 border border-cyan-400/30 rounded-full text-xs font-share-tech text-cyan-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 cyber-glass rounded-lg hover:bg-cyan-400/10 transition-colors group/btn"
                        >
                          <ExternalLink className="w-4 h-4 text-cyan-400 group-hover/btn:text-pink-400 transition-colors" />
                          <span className="font-share-tech text-sm text-cyan-400 group-hover/btn:text-pink-400 transition-colors">
                            VIEW LIVE
                          </span>
                        </a>
                      )}
                      
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 cyber-glass rounded-lg hover:bg-emerald-400/10 transition-colors group/btn"
                      >
                        <Github className="w-4 h-4 text-emerald-400 group-hover/btn:text-yellow-400 transition-colors" />
                        <span className="font-share-tech text-sm text-emerald-400 group-hover/btn:text-yellow-400 transition-colors">
                          SOURCE
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* Hover Effects */}
                  <motion.div
                    className="absolute inset-0 border-2 border-cyan-400/0 rounded-lg transition-all duration-300 group-hover:border-cyan-400/50"
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