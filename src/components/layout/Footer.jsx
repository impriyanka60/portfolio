import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeInOut' }
    }
  };

  return (
    <motion.footer 
      className="bg-slate-100 dark:bg-slate-800 py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-700 dark:text-slate-300">
              © {currentYear} Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <FiGithub className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:example@example.com" 
              className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors duration-200"
              aria-label="Email Contact"
            >
              <FiMail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Built with React, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
