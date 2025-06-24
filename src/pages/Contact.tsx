
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Terminal, User, MessageSquare } from 'lucide-react';
import Navigation from '../components/Navigation';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'EMAIL PROTOCOL',
      value: 'ishaan.rai@cybernet.dev',
      color: 'cyber-blue',
    },
    {
      icon: Phone,
      label: 'COMM FREQUENCY',
      value: '+1 (555) CYBER-01',
      color: 'cyber-green',
    },
    {
      icon: MapPin,
      label: 'LOCATION NODE',
      value: 'Neo San Francisco, CA',
      color: 'cyber-pink',
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
              ESTABLISH CONNECTION
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-cyber-blue to-cyber-pink mx-auto mb-8" />
            <p className="font-rajdhani text-xl text-gray-300 max-w-2xl mx-auto">
              Initialize secure communication protocol to discuss your next digital mission
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
                <div className="flex items-center space-x-2 mb-6 pb-4 border-b border-cyber-blue/30">
                  <Terminal className="w-5 h-5 text-cyber-green" />
                  <span className="font-share-tech text-cyber-green">root@contact-terminal:~$</span>
                  <span className="animate-pulse">_</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="flex items-center space-x-2 font-share-tech text-cyber-blue mb-2">
                      <User className="w-4 h-4" />
                      <span>AGENT_NAME</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-cyber-dark/50 border border-cyber-blue/30 rounded-lg focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue/50 font-rajdhani text-white placeholder-gray-500 transition-all"
                      placeholder="Enter your designation..."
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="flex items-center space-x-2 font-share-tech text-cyber-green mb-2">
                      <Mail className="w-4 h-4" />
                      <span>EMAIL_ADDRESS</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-cyber-dark/50 border border-cyber-green/30 rounded-lg focus:border-cyber-green focus:ring-1 focus:ring-cyber-green/50 font-rajdhani text-white placeholder-gray-500 transition-all"
                      placeholder="agent@cybernet.com"
                      required
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="flex items-center space-x-2 font-share-tech text-cyber-pink mb-2">
                      <MessageSquare className="w-4 h-4" />
                      <span>MISSION_SUBJECT</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-cyber-dark/50 border border-cyber-pink/30 rounded-lg focus:border-cyber-pink focus:ring-1 focus:ring-cyber-pink/50 font-rajdhani text-white placeholder-gray-500 transition-all"
                      placeholder="Project briefing title..."
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="flex items-center space-x-2 font-share-tech text-cyber-yellow mb-2">
                      <Terminal className="w-4 h-4" />
                      <span>MESSAGE_PAYLOAD</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-cyber-dark/50 border border-cyber-yellow/30 rounded-lg focus:border-cyber-yellow focus:ring-1 focus:ring-cyber-yellow/50 font-rajdhani text-white placeholder-gray-500 transition-all resize-none"
                      placeholder="Describe your digital mission objectives..."
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-cyber-blue to-cyber-pink rounded-lg font-orbitron font-bold text-white hover:from-cyber-green hover:to-cyber-yellow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
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
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Methods */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="cyber-glass p-6 rounded-lg group hover:bg-gradient-to-r hover:from-transparent hover:to-cyber-blue/5 transition-all"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 cyber-glass rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <info.icon className={`w-6 h-6 text-${info.color}`} />
                      </div>
                      <div>
                        <div className="font-share-tech text-sm text-gray-400 mb-1">
                          {info.label}
                        </div>
                        <div className={`font-rajdhani text-lg font-medium text-${info.color}`}>
                          {info.value}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Status Panel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="cyber-glass p-6 rounded-lg"
              >
                <h3 className="font-orbitron text-xl font-bold neon-text-green mb-4">
                  SYSTEM STATUS
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
                    <span className="font-share-tech text-sm text-gray-300">Response Time: {'<'} 24 Hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyber-blue rounded-full animate-pulse" />
                    <span className="font-share-tech text-sm text-gray-300">Availability: 24/7</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyber-yellow rounded-full animate-pulse" />
                    <span className="font-share-tech text-sm text-gray-300">Security Level: Maximum</span>
                  </div>
                </div>
              </motion.div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="cyber-glass p-6 rounded-lg relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-blue via-cyber-pink to-cyber-green" />
                
                <blockquote className="font-rajdhani text-lg italic text-gray-300 mb-4">
                  "The future belongs to those who understand that technology is not just a tool, 
                  but a canvas for creating digital art that changes the world."
                </blockquote>
                
                <cite className="font-share-tech text-sm text-cyber-blue">
                  - Ishaan Rai, Digital Architect
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
