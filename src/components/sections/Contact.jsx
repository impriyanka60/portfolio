import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { FiGithub, FiLinkedin, FiDownload, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Contact = () => {
  const { ref, controls } = useScrollAnimation();
  
  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const socialItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-500/30 to-blue-500/30 dark:from-emerald-500/10 dark:to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-500/30 to-purple-500/30 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-full blur-3xl"></div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's discuss your project or just say hello"
          center
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-16">
          {/* Contact Form - Takes 3/5 of the grid */}
          <motion.div 
            ref={ref}
            variants={formVariants}
            initial="hidden"
            animate={controls}
            className="lg:col-span-3 glassmorphism rounded-2xl shadow-xl border border-white/30 dark:border-slate-700/30 p-8 md:p-10"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-6">
              Send Me a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-white/40 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 shadow-sm transition duration-200"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white/40 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 shadow-sm transition duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-white/40 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 shadow-sm transition duration-200"
                  placeholder="What's this about?"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white/40 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 shadow-sm transition duration-200"
                  placeholder="Your message here..."
                />
              </div>
              
              <div className="pt-2">
                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-full sm:w-auto px-8 py-3 text-base font-medium"
                >
                  <FiMail className="mr-2 text-lg" />
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
          
          {/* Contact Info - Takes 2/5 of the grid */}
          <motion.div
            ref={ref}
            variants={socialVariants}
            initial="hidden"
            animate={controls}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Card with premium styling */}
            <div className="glassmorphism rounded-2xl shadow-xl border border-white/30 dark:border-slate-700/30 p-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <motion.div variants={socialItemVariants} className="flex items-start gap-4 group">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white shadow-lg shadow-blue-500/20 dark:shadow-blue-600/10 group-hover:shadow-blue-500/30 transition-all duration-300">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Email</h4>
                    <a 
                      href="mailto:youremail@example.com" 
                      className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                    >
                      youremail@example.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div variants={socialItemVariants} className="flex items-start gap-4 group">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-600 to-blue-600 dark:from-emerald-500 dark:to-blue-500 text-white shadow-lg shadow-emerald-500/20 dark:shadow-emerald-600/10 group-hover:shadow-emerald-500/30 transition-all duration-300">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Location</h4>
                    <p className="text-slate-700 dark:text-slate-300">
                      Ranchi, Jharkhand, India
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={socialItemVariants} className="flex items-start gap-4 group">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white shadow-lg shadow-indigo-500/20 dark:shadow-indigo-600/10 group-hover:shadow-indigo-500/30 transition-all duration-300">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Phone</h4>
                    <p className="text-slate-700 dark:text-slate-300">
                      +91 (123) 456-7890
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Social Links with premium styling */}
            <div className="glassmorphism rounded-2xl shadow-xl border border-white/30 dark:border-slate-700/30 p-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-6">
                Connect With Me
              </h3>
              
              <div className="grid grid-cols-3 gap-4">
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialItemVariants}
                  whileHover="hover"
                  className="aspect-square flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-800 dark:to-slate-900 shadow-lg hover:shadow-xl border border-white/50 dark:border-slate-700/50 hover:border-blue-200 dark:hover:border-blue-900/50 text-slate-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                >
                  <FiGithub className="text-2xl" />
                </motion.a>
                
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialItemVariants}
                  whileHover="hover"
                  className="aspect-square flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-800 dark:to-slate-900 shadow-lg hover:shadow-xl border border-white/50 dark:border-slate-700/50 hover:border-blue-200 dark:hover:border-blue-900/50 text-slate-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                >
                  <FiLinkedin className="text-2xl" />
                </motion.a>
                
                <motion.a
                  href="#"
                  download
                  variants={socialItemVariants}
                  whileHover="hover"
                  className="aspect-square flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-800 dark:to-slate-900 shadow-lg hover:shadow-xl border border-white/50 dark:border-slate-700/50 hover:border-blue-200 dark:hover:border-blue-900/50 text-slate-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                >
                  <FiDownload className="text-2xl" />
                </motion.a>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="mt-6 p-4 rounded-xl bg-gradient-to-r from-blue-600/10 to-indigo-600/10 dark:from-blue-500/5 dark:to-indigo-500/5 border border-blue-300/20 dark:border-blue-700/20"
              >
                <p className="text-center text-slate-700 dark:text-slate-300 text-sm">
                  Download my resume to learn more about my experience and skills
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Map or banner section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 rounded-2xl overflow-hidden shadow-2xl border border-white/30 dark:border-slate-700/30 h-64 md:h-80 relative glassmorphism"
        >
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-indigo-600/20 to-blue-600/20 dark:from-indigo-600/10 dark:to-blue-600/10">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Work Together?</h3>
              <Button variant="secondary" className="backdrop-blur-lg shadow-xl">
                <span className="px-2">Start a Project</span>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
