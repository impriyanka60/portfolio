import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, center = false }) => {
  return (
    <div className={`mb-16 relative ${center ? 'text-center' : ''}`}>
      {/* Decorative line with softer gradient */}
      {center && (
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-1 bg-gradient-to-r from-blue-400 to-indigo-400 dark:from-blue-400 dark:to-indigo-400 absolute -top-4 left-1/2 transform -translate-x-1/2 rounded-full shadow-sm"
        />
      )}

      {/* Main heading with softer gradient */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold mb-6 relative"
      >
        <span className="bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
          {title}
        </span>
        
        {/* Subtle accent element with softer blur */}
        <span className="absolute -z-10 left-0 top-0 w-12 h-12 rounded-full bg-blue-300/10 dark:bg-blue-400/10 blur-xl"></span>
      </motion.h2>
      
      {/* Subtitle with fade in */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
