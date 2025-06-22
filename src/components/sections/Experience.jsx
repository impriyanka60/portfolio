import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Experience = () => {
  const { ref, controls } = useScrollAnimation();
  
  const experiences = [
    {
      title: 'Frontend Intern',
      company: 'Tech Academy',
      period: 'Jan 2025 - Present',
      skills: ['React', 'Tailwind CSS', 'JavaScript', 'UI/UX'],
      description: [
        'Developed responsive web applications using React and Tailwind CSS',
        'Collaborated with design team to implement UI/UX improvements',
        'Optimized application performance reducing load time by 30%'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Construction Company Project',
      period: 'Oct 2024 - Dec 2024',
      skills: ['Node.js', 'MongoDB', 'React', 'JWT', 'Cloudinary'],
      description: [
        'Built and deployed a full-stack construction company website',
        'Implemented admin login with JWT authentication',
        'Created image upload/delete functionality using Cloudinary',
        'Made the website fully responsive across all devices',
        'Deployed the application using Render'
      ]
    }
  ];
  
  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-indigo-600/20 dark:bg-indigo-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl"></div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey and projects"
          center
        />
        
        {/* Timeline */}
        <div className="relative mt-20 max-w-5xl mx-auto">
          {/* Timeline line with gradient */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 via-indigo-500 to-cyan-500 dark:from-blue-500 dark:via-indigo-400 dark:to-cyan-400" />
          
          {/* Timeline content */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={timelineVariants}
            className="space-y-20"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex items-start md:justify-between md:even:flex-row-reverse group"
              >
                {/* Timeline dot with glow */}
                <div className="absolute top-0 left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-10">
                  {/* Outer glow */}
                  <div className="absolute w-14 h-14 rounded-full bg-blue-500/30 dark:bg-blue-400/20 animate-pulse"></div>
                  {/* Inner dot with gradient */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 border-4 border-white dark:border-slate-900 shadow-lg glow-blue"></div>
                </div>
                
                {/* Content card */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'} w-full md:w-[calc(50%-4rem)]`}>
                  <motion.div
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="glassmorphism p-6 rounded-2xl shadow-xl border border-white/30 dark:border-slate-700/30 hover:border-blue-200/50 dark:hover:border-blue-700/50 transition-all duration-300"
                  >
                    {/* Time period badge */}
                    <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/50 shadow-sm mb-4">
                      {experience.period}
                    </span>
                    
                    {/* Title with gradient */}
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                      {experience.title}
                    </h3>
                    
                    {/* Company badge with glow */}
                    <div className="mt-2 mb-6">
                      <span className="inline-block py-1.5 px-4 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-500 dark:to-blue-500 text-white font-medium shadow-lg shadow-indigo-500/20 dark:shadow-indigo-500/10">
                        {experience.company}
                      </span>
                    </div>
                    
                    {/* Description with improved styling */}
                    <div className="mt-4 space-y-2">
                      {experience.description.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="h-6 w-6 mt-0.5 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 flex items-center justify-center text-white shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p className="text-slate-700 dark:text-slate-300">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    {/* Skills tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {experience.skills && experience.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="text-xs font-medium px-3 py-1.5 rounded-full
                            bg-gradient-to-r from-slate-50 to-slate-100
                            dark:from-slate-800 dark:to-slate-900
                            text-indigo-700 dark:text-indigo-300
                            border border-indigo-100 dark:border-indigo-900/50
                            shadow-sm hover:shadow-md transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
