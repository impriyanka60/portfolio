import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  const { title, description, image, technologies, githubUrl, liveUrl } = project;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.article 
      variants={cardVariants}
      className="group relative overflow-hidden rounded-2xl transform transition-all duration-300 hover:-translate-y-2"
    >
      {/* Softer card background */}
      <div className="absolute inset-0 bg-white/90 dark:from-slate-800/80 dark:to-slate-800/70 backdrop-blur-sm rounded-2xl border border-slate-100 dark:border-slate-700/40 shadow-md"></div>

      {/* Content container */}
      <div className="relative">
        {/* Image Container with softer gradient overlay */}
        <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-800/70 to-slate-800/0 z-10"></div>
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
          {/* Links Overlay */}
          <div className="absolute inset-0 bg-slate-800/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300 z-20">
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="View source code on GitHub"
                className="p-3 rounded-xl bg-white/20 backdrop-blur-md text-white hover:bg-blue-500/70 transition-colors duration-300 shadow-md"
              >
                <FiGithub className="text-xl" />
              </motion.a>
            )}
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="View live project"
                className="p-3 rounded-xl bg-white/20 backdrop-blur-md text-white hover:bg-blue-500/70 transition-colors duration-300 shadow-md"
              >
                <FiExternalLink className="text-xl" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 relative z-10">
          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 line-clamp-1">
            {title}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-xs font-medium rounded-full 
                  bg-blue-50 dark:bg-blue-900/20
                  text-blue-600 dark:text-blue-300
                  border border-blue-100 dark:border-blue-800/40
                  shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
