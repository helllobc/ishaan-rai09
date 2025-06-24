
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'HOME', path: '/', icon: '◉' },
    { name: 'ABOUT', path: '/about', icon: '◈' },
    { name: 'PROJECTS', path: '/projects', icon: '◇' },
    { name: 'SKILLS', path: '/skills', icon: '◆' },
    { name: 'CONTACT', path: '/contact', icon: '◎' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        className="fixed top-6 right-6 z-50 lg:hidden cyber-glass p-3 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <motion.span
            className={`block w-6 h-0.5 bg-cyber-blue mb-1 transition-all ${
              isOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <motion.span
            className={`block w-6 h-0.5 bg-cyber-blue mb-1 transition-all ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <motion.span
            className={`block w-6 h-0.5 bg-cyber-blue transition-all ${
              isOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </div>
      </motion.button>

      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 hidden lg:block"
      >
        <div className="cyber-glass px-8 py-4 rounded-full">
          <div className="flex space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  to={item.path}
                  className={`group relative font-orbitron text-sm font-medium tracking-wider transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-cyber-blue'
                      : 'text-gray-300 hover:text-cyber-pink'
                  }`}
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                  </span>
                  
                  {/* Active Indicator */}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-cyber-blue/10 rounded-full border border-cyber-blue/30"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-cyber-pink/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 cyber-glass backdrop-blur-xl"
            >
              <div className="p-8 pt-20">
                <div className="space-y-6">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`group flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 ${
                          isActive(item.path)
                            ? 'bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue'
                            : 'text-gray-300 hover:bg-cyber-pink/10 hover:text-cyber-pink'
                        }`}
                      >
                        <span className="text-2xl">{item.icon}</span>
                        <span className="font-orbitron font-medium tracking-wider">
                          {item.name}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
