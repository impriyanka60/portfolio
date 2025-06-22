import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';
import Button from '../ui/Button';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);
  
  const projects = [
    {
      title: 'Bugzeetbee - Expense Tracker',
      description: 'MERN stack app featuring analytics, filters, MongoDB Atlas integration. Future plans include budgeting, dark mode, AI insights, and multi-currency support.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Construction Company Website',
      description: 'Full-stack website with admin JWT authentication, image management via Cloudinary, responsive design, and deployment on Render.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'JWT', 'Cloudinary', 'Responsive Design'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Netflix Data Analyzer',
      description: 'Python application with Streamlit that visualizes content trends and patterns on Netflix, providing interactive data exploration.',
      image: 'https://via.placeholder.com/600x400?text=Netflix+Analyzer',
      technologies: ['Python', 'Streamlit', 'Pandas', 'Data Visualization'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Resume Analyzer (Ongoing)',
      description: 'Upload resume and job description to get match score, keyword suggestions, and improvement tips using AI technology.',
      image: 'https://via.placeholder.com/600x400?text=Resume+Analyzer',
      technologies: ['React', 'AI', 'NLP', 'Material UI'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Real-time Collaborative Whiteboard',
      description: 'A collaborative drawing tool with real-time synchronization, user authentication via Keycloak, and responsive design.',
      image: 'https://via.placeholder.com/600x400?text=Collaborative+Whiteboard',
      technologies: ['React', 'TypeScript', 'WebSockets', 'Fabric.js', 'Keycloak'],
      githubUrl: '#',
      liveUrl: '#',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const showMoreProjects = () => {
    setVisibleProjects(projects.length);
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-indigo-600/20 to-cyan-500/20 dark:from-indigo-500/10 dark:to-cyan-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 dark:from-emerald-400/10 dark:to-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 dark:from-blue-400/10 dark:to-indigo-500/10 rounded-full blur-3xl"></div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Projects"
          subtitle="Check out my recent work and technical projects"
          center
        />
        
        {/* Projects showcase with enhanced layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
        
        {/* Show more button with premium styling */}
        {visibleProjects < projects.length && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 flex justify-center"
          >
            <Button 
              variant="primary" 
              onClick={showMoreProjects}
              className="px-8 py-3 text-lg font-medium"
            >
              <span className="relative z-10">View More Projects</span>
              <motion.span
                className="absolute inset-0 rounded-full bg-white/20 dark:bg-white/10"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
            </Button>
          </motion.div>
        )}
        
        {/* Project statistics with premium styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-24 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {[
            { value: '10+', label: 'Projects Completed' },
            { value: '5+', label: 'Happy Clients' },
            { value: '1000+', label: 'Hours Coded' },
            { value: '50+', label: 'GitHub Commits' },
          ].map((stat, i) => (
            <div 
              key={i}
              className="glassmorphism text-center p-6 rounded-2xl shadow-lg border border-white/20 dark:border-slate-700/30"
            >
              <h4 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </h4>
              <p className="text-slate-700 dark:text-slate-300 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
