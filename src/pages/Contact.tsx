import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Terminal, User, MessageSquare, Linkedin, Github } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import Navigation from '../components/Navigation';
import { useState } from 'react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xnnvgeen");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e);
    
    // Reset form if submission succeeded
    if (state.succeeded) {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'EMAIL PROTOCOL',
      value: 'ishaanrai18@gmail.com',
      color: 'cyan-400',
      link: 'mailto:ishaanrai18@gmail.com',
    },
    {
      icon: Phone,
      label: 'COMM FREQUENCY',
      value: '+91 9464925517',
      color: 'emerald-400',
      link: 'tel:+919464925517',
    },
    {
      icon: MapPin,
      label: 'LOCATION NODE',
      value: 'Chandigarh, India',
      color: 'pink-400',
    },
    {
      icon: Linkedin,
      label: 'LINKEDIN NETWORK',
      value: 'linkedin.com/in/ishaan-rai',
      color: 'yellow-400',
      link: 'https://www.linkedin.com/in/ishaan-rai',
    },
    {
      icon: Github,
      label: 'CODE REPOSITORY',
      value: 'github.com/Ishaan-Rai09',
      color: 'purple-400',
      link: 'https://github.com/Ishaan-Rai09',
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
            <h1 className="font-orbitron text-5xl md:text-7xl font-bold text-cyan-300 mb-6" style={{ textShadow: '0 0 20px rgba(103, 232, 249, 0.6)' }}>
              ESTABLISH CONNECTION
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto mb-8" />
            <p className="font-rajdhani text-xl text-gray-300 max-w-2xl mx-auto">
              Initialize secure communication protocol for collaboration opportunities
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="cyber-glass p-8 rounded-lg">
                {/* Terminal Header */}
                <div className="flex items-center space-x-2 mb-6 pb-4 border-b border-cyan-400/30">
                  <Terminal className="w-5 h-5 text-emerald-400" />
                  <span className="font-share-tech text-emerald-400">root@contact-terminal:~$</span>
                  <span className="animate-pulse">_</span>
                </div>

                {state.succeeded ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Terminal className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="font-orbitron text-2xl font-bold text-emerald-400 mb-2">
                      TRANSMISSION SUCCESSFUL
                    </h3>
                    <p className="font-rajdhani text-gray-300">
                      Your message has been received. Awaiting response protocol...
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label className="flex items-center space-x-2 font-share-tech text-cyan-400 mb-2">
                        <User className="w-4 h-4" />
                        <span>AGENT_NAME</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-cyber-dark/50 border border-cyan-400/30 rounded-lg focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 font-rajdhani text-white placeholder-gray-500 transition-all"
                        placeholder="Enter your designation..."
                        required
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="flex items-center space-x-2 font-share-tech text-emerald-400 mb-2">
                        <Mail className="w-4 h-4" />
                        <span>EMAIL_ADDRESS</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-cyber-dark/50 border border-emerald-400/30 rounded-lg focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/50 font-rajdhani text-white placeholder-gray-500 transition-all"
                        placeholder="agent@company.com"
                        required
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label className="flex items-center space-x-2 font-share-tech text-pink-400 mb-2">
                        <MessageSquare className="w-4 h-4" />
                        <span>MISSION_SUBJECT</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-cyber-dark/50 border border-pink-400/30 rounded-lg focus:border-pink-400 focus:ring-1 focus:ring-pink-400/50 font-rajdhani text-white placeholder-gray-500 transition-all"
                        placeholder="Collaboration opportunity..."
                        required
                      />
                      <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label className="flex items-center space-x-2 font-share-tech text-yellow-400 mb-2">
                        <Terminal className="w-4 h-4" />
                        <span>MESSAGE_PAYLOAD</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full px-4 py-3 bg-cyber-dark/50 border border-yellow-400/30 rounded-lg focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50 font-rajdhani text-white placeholder-gray-500 transition-all resize-none"
                        placeholder="Describe your project or opportunity..."
                        required
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-lg font-orbitron font-bold text-black hover:from-emerald-400 hover:to-yellow-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {state.submitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          />
                          <span>TRANSMITTING...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>SEND TRANSMISSION</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Contact Methods */}
              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    label: 'EMAIL PROTOCOL',
                    value: 'ishaanrai18@gmail.com',
                    color: 'cyan-400',
                    link: 'mailto:ishaanrai18@gmail.com',
                  },
                  {
                    icon: Phone,
                    label: 'COMM FREQUENCY',
                    value: '+91 9464925517',
                    color: 'emerald-400',
                    link: 'tel:+919464925517',
                  },
                  {
                    icon: MapPin,
                    label: 'LOCATION NODE',
                    value: 'Chandigarh, India',
                    color: 'pink-400',
                  },
                  {
                    icon: Linkedin,
                    label: 'LINKEDIN NETWORK',
                    value: 'linkedin.com/in/ishaan-rai',
                    color: 'yellow-400',
                    link: 'https://www.linkedin.com/in/ishaan-rai',
                  },
                  {
                    icon: Github,
                    label: 'CODE REPOSITORY',
                    value: 'github.com/Ishaan-Rai09',
                    color: 'purple-400',
                    link: 'https://github.com/Ishaan-Rai09',
                  },
                ].map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className={`cyber-glass p-6 rounded-lg group hover:bg-gradient-to-r hover:from-transparent hover:to-${info.color}/5 transition-all ${
                      info.link ? 'cursor-pointer' : ''
                    }`}
                    onClick={() => info.link && window.open(info.link, '_blank')}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 cyber-glass rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <info.icon className={`w-6 h-6 text-${info.color}`} />
                      </div>
                      <div>
                        <div className="font-share-tech text-sm text-gray-400 mb-1">
                          {info.label}
                        </div>
                        <div className={`font-rajdhani text-lg font-medium text-${info.color} ${
                          info.link ? 'hover:underline' : ''
                        }`}>
                          {info.value}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Resume Link */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="cyber-glass p-6 rounded-lg group hover:bg-gradient-to-r hover:from-transparent hover:to-cyan-400/5 transition-all cursor-pointer"
                onClick={() => window.open('https://drive.google.com/file/d/134uyGalt1xA8Lwa31mkKkbvFmCwxmi1_/view', '_blank')}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 cyber-glass rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Terminal className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="font-share-tech text-sm text-gray-400 mb-1">
                      RESUME ACCESS
                    </div>
                    <div className="font-rajdhani text-lg font-medium text-cyan-400 hover:underline">
                      Download CV
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Status Panel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="cyber-glass p-6 rounded-lg"
              >
                <h3 className="font-orbitron text-xl font-bold text-emerald-400 mb-4" style={{ textShadow: '0 0 15px rgba(52, 211, 153, 0.5)' }}>
                  SYSTEM STATUS
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="font-share-tech text-sm text-gray-300">Response Time: {'<'} 24 Hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                    <span className="font-share-tech text-sm text-gray-300">Available for MAANG opportunities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                    <span className="font-share-tech text-sm text-gray-300">Hackathon Ready: Always</span>
                  </div>
                </div>
              </motion.div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="cyber-glass p-6 rounded-lg relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-pink-400 to-emerald-400" />
                
                <blockquote className="font-rajdhani text-lg italic text-gray-300 mb-4">
                  "Code is poetry in motion, and AI is the future canvas where we paint solutions 
                  that transform the world one algorithm at a time."
                </blockquote>
                
                <cite className="font-share-tech text-sm text-cyan-400">
                  - Ishaan Rai, Future MAANG Engineer
                </cite>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
