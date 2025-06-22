import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { 
  FaReact, FaNodeJs, FaJava, FaDatabase, 
  FaPython, FaCode, FaBrain, FaMobileAlt
} from 'react-icons/fa';
import { SiMongodb, SiJavascript, SiTypescript } from 'react-icons/si';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const About = () => {
  const { ref, controls } = useScrollAnimation();
  
  const skills = [
    { 
      name: 'React', 
      icon: <FaReact className="text-[#61DAFB] dark:text-[#61DAFB] text-2xl" /> 
    },
    { 
      name: 'Node.js', 
      icon: <FaNodeJs className="text-[#8CC84B] dark:text-[#8CC84B] text-2xl" /> 
    },
    { 
      name: 'MongoDB', 
      icon: <SiMongodb className="text-[#47A248] dark:text-[#47A248] text-2xl" /> 
    },
    { 
      name: 'JavaScript', 
      icon: <SiJavascript className="text-[#F7DF1E] dark:text-[#F7DF1E] text-2xl" /> 
    },
    { 
      name: 'TypeScript', 
      icon: <SiTypescript className="text-[#3178C6] dark:text-[#3178C6] text-2xl" /> 
    },
    { 
      name: 'Java', 
      icon: <FaJava className="text-[#ED8B00] dark:text-[#ED8B00] text-2xl" /> 
    },
    { 
      name: 'Python', 
      icon: <FaPython className="text-[#3776AB] dark:text-[#3776AB] text-2xl" /> 
    },
    { 
      name: 'SQL', 
      icon: <FaDatabase className="text-[#F29111] dark:text-[#F29111] text-2xl" /> 
    },
  ];
  
  const highlights = [
    {
      icon: <FaCode className="text-indigo-500 dark:text-indigo-400 text-3xl" />,
      title: 'Strong in DSA',
      description: 'Passionate about optimizing algorithms and solving complex problems with elegant, efficient solutions.'
    },
    {
      icon: <FaBrain className="text-emerald-500 dark:text-emerald-400 text-3xl" />,
      title: 'AI Integration',
      description: 'Building next-gen applications with AI capabilities, from ML models to conversational interfaces.'
    },
    {
      icon: <FaMobileAlt className="text-blue-500 dark:text-blue-400 text-3xl" />,
      title: 'Responsive Design',
      description: 'Creating seamless, accessible experiences that work beautifully across all devices and screen sizes.'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] // Custom cubic bezier for premium feel
      }
    }
  };
  
  const glowVariants = {
    initial: { opacity: 0.5 },
    animate: { 
      opacity: [0.5, 0.8, 0.5],
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-600/20 to-blue-600/10 dark:from-indigo-500/10 dark:to-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 to-emerald-500/10 dark:from-cyan-500/10 dark:to-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-emerald-500/20 to-green-500/10 dark:from-emerald-500/5 dark:to-green-500/5 rounded-full blur-3xl"></div>
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      
      {/* Subtle noise texture */}
     
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="About Me"
          subtitle="Passionate developer building beautiful & functional applications"
          center
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="order-2 lg:order-1"
          >
            <div className="relative mx-auto max-w-md perspective-1000">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="w-64 h-64 md:w-80 md:h-80 mx-auto relative z-10"
                whileHover={{ 
                  rotateY: 5, 
                  rotateX: -5,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Dynamic gradient ring around image */}
                <motion.div 
                  className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-emerald-500 blur-md opacity-70 dark:opacity-80"
                  animate={{ 
                    rotate: [0, 360],
                    background: [
                      'linear-gradient(to top right, #2563eb, #6366f1, #10b981)',
                      'linear-gradient(to top right, #6366f1, #10b981, #2563eb)',
                      'linear-gradient(to top right, #10b981, #2563eb, #6366f1)'
                    ]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    background: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                
                <div className="absolute inset-1 rounded-full bg-white dark:bg-slate-900 overflow-hidden transform-gpu">
                  {/* Overlay glass effect */}
                  <div className="absolute inset-0 rounded-full backdrop-blur-3xl bg-white/50 dark:bg-slate-800/50 z-10"></div>
                  
                  {/* Profile image with better shadow and border */}
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-[0_0_20px_rgba(0,0,0,0.08)] dark:shadow-[0_0_20px_rgba(0,0,0,0.3)] relative z-20 transform-gpu">
                    <img
                      src="/path-to-your-image.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Subtle glossy reflection */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent opacity-50 dark:opacity-30"
                      animate={{ 
                        y: ['-15%', '5%', '-15%'],
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut" 
                      }}
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* Enhanced floating elements */}
              <motion.div
                initial={{ y: 20, opacity: 0, scale: 0.8 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="absolute -bottom-6 -right-6 backdrop-blur-lg bg-white/70 dark:bg-slate-800/70 p-4 rounded-xl shadow-lg border border-white/50 dark:border-slate-700/50"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
              >
                <span className="text-xs font-semibold px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full inline-flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Full Stack Developer
                </span>
              </motion.div>
              
              {/* Experience badge */}
              <motion.div
                initial={{ y: -20, opacity: 0, scale: 0.8 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="absolute -top-2 -left-6 backdrop-blur-lg bg-white/70 dark:bg-slate-800/70 py-2 px-4 rounded-xl shadow-lg border border-white/50 dark:border-slate-700/50"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
              >
                <span className="text-xs font-semibold text-slate-900 dark:text-white">5+ Years Experience</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="order-1 lg:order-2 space-y-10"
          >
            {/* About Me Text */}
            <motion.div 
              variants={itemVariants} 
              className="backdrop-blur-md bg-white/70 dark:bg-slate-800/60 p-8 rounded-2xl shadow-lg border border-white/50 dark:border-slate-700/50"
              whileHover={{ 
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6 pb-6 border-b border-indigo-100 dark:border-slate-700/60">
                <motion.h3 
                  className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-4"
                  animate={{
                    backgroundPosition: ['0% center', '100% center', '0% center'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Who I Am
                </motion.h3>
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                  I'm a passionate Full Stack Developer with expertise in building 
                  <span className="text-blue-600 dark:text-blue-400 font-medium"> modern web applications</span>. 
                  I love turning complex problems into simple, beautiful, and intuitive solutions 
                  with a focus on <span className="text-indigo-600 dark:text-indigo-400 font-medium">performance</span> and
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium"> user experience</span>.
                </p>
              </div>
              
              <div className="space-y-6">
                {highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants} 
                    className="flex gap-5 group items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-white to-slate-100 dark:from-slate-700 dark:to-slate-800 shadow-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-white/50 dark:border-slate-600/50">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills Grid */}
            <motion.div variants={itemVariants}>
              <motion.h3 
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-6"
                animate={{
                  backgroundPosition: ['0% center', '100% center', '0% center'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Technologies I Work With
              </motion.h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="relative backdrop-blur-md bg-gradient-to-br from-white/80 to-white/40 dark:from-slate-800/80 dark:to-slate-800/40 rounded-xl shadow-lg group border border-white/20 dark:border-slate-700/30 p-4 flex flex-col items-center text-center overflow-hidden transition-all duration-300"
                    whileHover={{ 
                      y: -8, 
                      transition: { type: "spring", stiffness: 300, damping: 20 },
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    {/* Background glow effect on hover */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-purple-500/0 opacity-0 group-hover:opacity-20 dark:group-hover:opacity-40 transition-opacity duration-300 -z-10" 
                      animate={{
                        backgroundPosition: ['0% center', '100% center', '0% center'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    
                    <motion.div 
                      className="h-14 w-14 rounded-xl bg-gradient-to-br from-white/90 to-white/60 dark:from-slate-700 dark:to-slate-800 shadow-md flex items-center justify-center mb-3 transform-gpu group-hover:scale-110 transition-all duration-300 border border-white/50 dark:border-slate-600/50"
                      whileHover={{ 
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          repeatType: "reverse",
                          ease: "easeInOut",
                          delay: index * 0.2 % 1 // Staggered animation
                        }}
                      >
                        {skill.icon}
                      </motion.div>
                    </motion.div>
                    
                    <span className="font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{skill.name}</span>
                    
                    {/* Subtle shine effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 dark:via-white/10 to-transparent -z-10 opacity-0 group-hover:opacity-100"
                      animate={{
                        left: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                        repeatDelay: 0.5,
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
