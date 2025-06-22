import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useMotionValue, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown, FiCode, FiLayout, FiDatabase, FiServer, FiCloud } from 'react-icons/fi';

// Function to generate random particles for the background effect
const generateParticles = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100, // % position
    y: Math.random() * 100, // % position
    size: Math.random() * 4 + 1, // pixel size
    duration: Math.random() * 20 + 10, // animation duration
    delay: Math.random() * 5,
    opacity: Math.random() * 0.5 + 0.2,
    color: [
      'rgba(96, 165, 250, 0.7)', // blue-400
      'rgba(129, 140, 248, 0.7)', // indigo-400
      'rgba(168, 85, 247, 0.7)', // purple-500
      'rgba(45, 212, 191, 0.7)', // teal-400
      'rgba(79, 70, 229, 0.7)', // indigo-600
    ][Math.floor(Math.random() * 5)]
  }));
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [activeTech, setActiveTech] = useState(null);
  const [particles] = useState(() => generateParticles(30)); // Generate 30 particles
  const containerRef = useRef(null);
  const targetRef = useRef(null);
  const controls = useAnimation();
  const rotateY = useMotionValue(0);
  const rotateX = useMotionValue(0);
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  // Mouse movement for 3D parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        
        setMousePosition({
          x: (x / width - 0.5),
          y: (y / height - 0.5)
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  useEffect(() => {
    rotateY.set(mousePosition.x * 7); // Increased rotation for more dramatic effect
    rotateX.set(mousePosition.y * -7);
  }, [mousePosition, rotateY, rotateX]);

  // Animation for the intro sequence
  useEffect(() => {
    const sequence = async () => {
      await controls.start("visible");
    };
    sequence();
  }, [controls]);

  const getTransform = (factor = 1) => {
    return {
      x: mousePosition.x * factor * 40, // Increased movement for more dramatic effect
      y: mousePosition.y * factor * 40
    };
  };

  // Enhanced tech stack with visual info and icons
  const techStack = [
    { 
      name: 'React', 
      icon: <FiCode className="text-xl" />, 
      color: '#61DAFB',
      bgColor: 'bg-[#61DAFB]/10 dark:bg-[#61DAFB]/20',
      textColor: 'text-[#61DAFB] dark:text-[#61DAFB]',
      description: 'Building modern UIs with React and hooks',
      delay: 0
    },
    { 
      name: 'Node.js', 
      icon: <FiServer className="text-xl" />, 
      color: '#8CC84B',
      bgColor: 'bg-[#8CC84B]/10 dark:bg-[#8CC84B]/20',
      textColor: 'text-[#8CC84B] dark:text-[#8CC84B]',
      description: 'Creating fast, scalable backend services',
      delay: 0.1
    },
    { 
      name: 'TypeScript', 
      icon: <FiLayout className="text-xl" />, 
      color: '#3178C6',
      bgColor: 'bg-[#3178C6]/10 dark:bg-[#3178C6]/20',
      textColor: 'text-[#3178C6] dark:text-[#3178C6]',
      description: 'Type-safe code for better developer experience',
      delay: 0.2
    },
    { 
      name: 'MongoDB', 
      icon: <FiDatabase className="text-xl" />, 
      color: '#47A248',
      bgColor: 'bg-[#47A248]/10 dark:bg-[#47A248]/20',
      textColor: 'text-[#47A248] dark:text-[#47A248]',
      description: 'Flexible document database solutions',
      delay: 0.3
    },
    { 
      name: 'AWS', 
      icon: <FiCloud className="text-xl" />, 
      color: '#FF9900',
      bgColor: 'bg-[#FF9900]/10 dark:bg-[#FF9900]/20',
      textColor: 'text-[#FF9900] dark:text-[#FF9900]',
      description: 'Cloud infrastructure and serverless architecture',
      delay: 0.4
    },
  ];

  // Staggered container variants for entrance animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Slightly slower for more premium feel
        delayChildren: 0.3,
      }
    }
  };

  // Enhanced text animation variants with more dynamic movement
  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1] // Custom cubic bezier for premium feel
      }
    }
  };
  
  // Fancy entrance for highlight badge
  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.7, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.1,
        duration: 0.7
      }
    }
  };

  // For the "Full Stack Developer" heading with wave animation
  const createWaveVariants = (index, total) => ({
    hidden: { opacity: 0, y: 40, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: 0.7 + (index * 0.03), // Delayed entrance for dramatic effect
        duration: 0.7,
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    wave: {
      y: [0, -15, 0], // More dramatic wave
      rotateZ: [0, -5, 5, 0], // Add rotation for more interesting effect
      color: [
        'hsl(215, 100%, 50%)', // Blue
        'hsl(258, 100%, 65%)', // Light purple
        'hsl(215, 100%, 50%)', // Back to blue
      ],
      transition: {
        delay: 0.05 * index,
        duration: 0.8,
        times: [0, 0.4, 0.8, 1],
        ease: [0.22, 1, 0.36, 1],
      }
    }
  });

  // Enhanced social icons animation
  const socialVariants = {
    hidden: { opacity: 0, scale: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 1.5 + (i * 0.12), // More delay for dramatic reveal
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }),
    hover: {
      scale: 1.2,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  // Split text for wave animation
  const developerHeading = "Full Stack Developer";
  const developerLetters = developerHeading.split("");
  
  // For particle effect in the background
  const particleVariants = {
    animate: (custom) => ({
      x: [
        `${custom.x}%`, 
        `${custom.x + (Math.random() * 15 - 7.5)}%`, // More movement range
        `${custom.x}%`
      ],
      y: [
        `${custom.y}%`, 
        `${custom.y + (Math.random() * 15 - 7.5)}%`, // More movement range
        `${custom.y}%`
      ],
      opacity: [
        custom.opacity,
        custom.opacity * 0.8,
        custom.opacity
      ],
      scale: [1, 1.3, 1], // More dramatic scale change
      filter: [
        'blur(0px)',
        'blur(1px)',
        'blur(0px)'
      ],
      transition: {
        duration: custom.duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: custom.delay,
        times: [0, 0.5, 1]
      }
    })
  };

  // Function to convert hex color to RGB
  const hexToRgb = (hex) => {
    // Remove the hash
    hex = hex.replace('#', '');
    
    // Parse the hex values
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    // Return RGB values
    return `${r}, ${g}, ${b}`;
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Interactive background with moving gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.07]"></div>
        
        {/* Noise texture */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay"></div>
        
        {/* Animated floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              custom={particle}
              variants={particleVariants}
              animate="animate"
              className="absolute rounded-full"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: particle.color,
                boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
              }}
            />
          ))}
        </div>
        
        {/* Animated gradient orbs */}
        <div className="absolute inset-0">
          {/* Primary gradient sphere */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: mousePosition.x * -50,
              y: mousePosition.y * -50
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/20 via-indigo-400/30 to-blue-400/20 blur-3xl"
          />
          
          {/* Secondary gradient sphere */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3],
              x: mousePosition.x * -25,
              y: mousePosition.y * -25
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-gradient-to-r from-purple-400/20 via-indigo-400/30 to-purple-400/20 blur-3xl"
          />
          
          {/* Accent sphere */}
          <motion.div 
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.3, 0.2],
              x: mousePosition.x * -10,
              y: mousePosition.y * -10
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute top-2/3 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-cyan-400/20 via-teal-400/30 to-cyan-400/20 blur-3xl"
          />
        </div>
      </div>
      
      {/* 3D floating elements */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        {/* Floating code snippet */}
        <motion.div
          style={{ 
            rotateY: rotateY, 
            rotateX: rotateX, 
            transformPerspective: 1000,
            x: mousePosition.x * -30,
            y: mousePosition.y * -30
          }}
          className="absolute top-1/4 right-[15%] w-48 h-32 rounded-lg bg-white/90 dark:bg-slate-800/90 shadow-xl border border-white/50 dark:border-slate-700/50 overflow-hidden backdrop-blur-sm"
          whileHover={{
            scale: 1.05,
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}
        >
          <div className="h-6 bg-gradient-to-r from-slate-100 to-blue-50 dark:from-slate-700 dark:to-slate-600 flex items-center px-2">
            <div className="flex space-x-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            </div>
          </div>
          <div className="p-2 text-xs font-mono">
            <div className="flex">
              <span className="text-purple-600 dark:text-purple-400 opacity-75 mr-2">1</span>
              <span className="text-blue-600 dark:text-blue-400">const</span>{" "}
              <span className="text-yellow-600 dark:text-yellow-400 ml-1">developer</span>{" "}
              <span className="text-slate-600 dark:text-slate-300 ml-1">=</span>{" "}
              <span className="text-green-600 dark:text-green-400 ml-1">'passionate'</span>;
            </div>
            <div className="flex">
              <span className="text-purple-600 dark:text-purple-400 opacity-75 mr-2">2</span>
              <span className="text-blue-600 dark:text-blue-400">function</span>{" "}
              <span className="text-yellow-600 dark:text-yellow-400 ml-1">createWebApp</span>(){" "}
              <span className="text-slate-600 dark:text-slate-300">{}</span>
            </div>
            <div className="flex">
              <span className="text-purple-600 dark:text-purple-400 opacity-75 mr-2">3</span>
              <span className="text-blue-600 dark:text-blue-400 ml-3">return</span>{" "}
              <span className="text-green-600 dark:text-green-400 ml-1">'amazing'</span>;
            </div>
          </div>
        </motion.div>
        
        {/* Floating UI component */}
        <motion.div
          style={{ 
            rotateY: rotateY, 
            rotateX: rotateX, 
            transformPerspective: 1000,
            x: mousePosition.x * -20,
            y: mousePosition.y * -20
          }}
          className="absolute bottom-1/4 left-[15%] w-40 h-40 rounded-lg bg-white/90 dark:bg-slate-800/90 shadow-xl border border-white/50 dark:border-slate-700/50 p-3 backdrop-blur-sm"
          whileHover={{
            scale: 1.05,
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}
        >
          <div className="h-full rounded bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-slate-700/50 dark:to-indigo-900/30 flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-900/30 dark:to-indigo-700/40 mb-2 flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-500 dark:text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="h-2 w-20 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700 rounded-full mb-2"></div>
            <div className="h-2 w-16 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700 rounded-full"></div>
          </div>
        </motion.div>
      </div>

      {/* Content container */}
      <div className="container max-w-7xl mx-auto px-6 py-10 md:py-0 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col items-center text-center space-y-12"
        >
          {/* Animated greeting badge */}
          <motion.div
            variants={wordVariants}
            style={{ transform: `translate(${getTransform(0.2).x}px, ${getTransform(0.2).y}px)` }}
            className="relative"
          >
            <motion.div 
              className="py-2 px-6 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20 backdrop-blur-md border border-blue-200/50 dark:border-blue-500/30 shadow-lg flex items-center gap-2"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.2)'
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="inline-block w-3 h-3 bg-gradient-to-tr from-green-400 to-emerald-500 rounded-full animate-pulse"></span>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent font-medium tracking-wide">
                Hello, I'm John Doe
              </span>
            </motion.div>
            
            {/* Decorative highlight */}
            <motion.div 
              className="absolute -z-10 -inset-1 rounded-full bg-gradient-to-r from-blue-500/30 to-indigo-500/30 dark:from-blue-400/20 dark:to-indigo-400/20 blur-xl opacity-0"
              animate={{ 
                opacity: [0, 0.5, 0],
                scale: [0.95, 1.05, 0.95]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </motion.div>
          
          {/* Dynamic 3D card with perspective */}
          <motion.div 
            className="w-full md:w-auto perspective-1000"
            variants={wordVariants}
            style={{ transform: `translate(${getTransform(0.1).x}px, ${getTransform(0.1).y}px)` }}
          >
            <motion.div 
              className="relative w-full py-10 px-8 md:px-16 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-slate-800/50 dark:to-slate-800/30 backdrop-blur-md border border-white/30 dark:border-slate-700/30 shadow-2xl overflow-hidden transform-gpu"
              style={{ 
                rotateY: hovered ? rotateY : 0, 
                rotateX: hovered ? rotateX : 0,
                transformPerspective: 2000,
                boxShadow: hovered 
                  ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 25px rgba(79, 70, 229, 0.2)'
                  : '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              {/* Animated glossy reflection */}
              <motion.div 
                className="absolute -inset-full h-full w-full bg-gradient-to-r from-transparent via-white/20 dark:via-blue-500/10 to-transparent transform-gpu"
                animate={{ 
                  left: ['-100%', '100%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
              />
              
              {/* Subtle grain texture */}
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
              
              {/* Main heading with wave effect */}
              <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold tracking-tight flex flex-wrap justify-center gap-x-3 mb-5">
                {developerLetters.map((letter, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={createWaveVariants(index, developerLetters.length)}
                    initial="hidden"
                    animate="visible"
                    className={`inline-block ${letter === " " ? "ml-3" : ""} text-slate-800 dark:text-white`}
                    whileHover="wave"
                    style={{ 
                      display: 'inline-block',
                      transformStyle: 'preserve-3d',
                      transformOrigin: 'bottom center',
                      textShadow: hovered ? '0 2px 5px rgba(0,0,0,0.2)' : 'none'
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>
              
              {/* Animated gradient subtitle */}
              <motion.div
                variants={wordVariants}
                className="overflow-hidden relative flex justify-center"
              >
                <motion.h2
                  className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-400 bg-clip-text text-transparent inline-block relative pb-1"
                  animate={{
                    backgroundPosition: ['0% center', '100% center', '0% center'],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  building extraordinary web experiences
                </motion.h2>
                
                {/* Animated underline */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-400"
                  animate={{
                    backgroundPosition: ['0% center', '100% center', '0% center'],
                    opacity: [0.7, 1, 0.7],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Description with better typography */}
          <motion.p
            variants={wordVariants}
            className="max-w-2xl mx-auto text-slate-700 dark:text-slate-300 text-lg md:text-xl leading-relaxed font-light"
            style={{ transform: `translate(${getTransform(0.05).x}px, ${getTransform(0.05).y}px)` }}
          >
            I craft <span className="font-medium text-blue-600 dark:text-blue-400 relative inline-block">
              elegant solutions
              <motion.span 
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600/30 dark:bg-blue-400/30 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 2, duration: 0.8 }}
              />
            </span> to complex problems through clean code and thoughtful design.
            Specializing in <span className="font-medium text-indigo-600 dark:text-indigo-400 relative inline-block">
              full-stack development
              <motion.span 
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-600/30 dark:bg-indigo-400/30 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 2.2, duration: 0.8 }}
              />
            </span> with modern frameworks and technologies.
          </motion.p>

          {/* Interactive tech stack */}
          <motion.div
            variants={wordVariants}
            className="flex flex-wrap justify-center gap-4 mt-6 max-w-3xl mx-auto"
          >
            {techStack.map((tech, index) => (
              <div key={tech.name} className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  onHoverStart={() => setActiveTech(tech.name)}
                  onHoverEnd={() => setActiveTech(null)}
                  className={`px-4 py-1.5 rounded-lg backdrop-blur-md border shadow-md flex items-center gap-2 cursor-pointer
                    ${activeTech === tech.name 
                      ? `${tech.bgColor} border-${tech.color}/50` 
                      : 'bg-white/80 dark:bg-slate-800/80 border-white/50 dark:border-slate-700/50'
                    }`}
                  style={{
                    boxShadow: activeTech === tech.name ? `0 0 15px 5px ${tech.color}30` : '',
                  }}
                >
                  <span className={`${tech.textColor}`}>
                    {tech.icon}
                  </span>
                  <span className={`font-medium ${activeTech === tech.name ? tech.textColor : 'text-slate-700 dark:text-slate-200'}`}>
                    {tech.name}
                  </span>
                </motion.div>
                
                {/* Tooltip on hover */}
                <AnimatePresence>
                  {activeTech === tech.name && (
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 rounded bg-white/90 dark:bg-slate-800/90 shadow-xl border border-slate-200 dark:border-slate-700 z-10 w-40 text-center backdrop-blur-md"
                    >
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 border-8 border-transparent border-b-white dark:border-b-slate-800"></div>
                      <p className="text-xs text-slate-700 dark:text-slate-300">{tech.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>

          {/* CTA buttons with enhanced styling */}
          <motion.div
            variants={wordVariants}
            className="flex flex-wrap gap-6 justify-center"
            style={{ transform: `translate(${getTransform(0.1).x}px, ${getTransform(0.1).y}px)` }}
          >
            <Button 
              variant="primary" 
              href="#contact"
              className="px-8 py-3 text-lg group relative overflow-hidden"
            >
              <span className="relative z-10">Get in Touch</span>
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                animate={{ 
                  backgroundPosition: ['0% center', '100% center'],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "linear"
                }}
              />
            </Button>
            <Button 
              variant="secondary" 
              href="#projects"
              className="px-8 py-3 text-lg group relative overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <motion.span 
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400"
                initial={{ width: '0%', left: '50%', right: '50%' }}
                whileHover={{ width: '100%', left: '0%', right: '0%' }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>
            {/* Social links */}
          <motion.div 
            variants={wordVariants}
            className="flex items-center gap-5 mt-8"
          >
            <motion.a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              custom={0}
              variants={socialVariants}
              whileHover="hover"
              className="p-3 rounded-full bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-700/70 backdrop-blur-md border border-white/50 dark:border-slate-700/50 shadow-lg text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              aria-label="GitHub"
              style={{
                boxShadow: `0 5px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)`
              }}
            >
              <FiGithub />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              custom={1}
              variants={socialVariants}
              whileHover="hover"
              className="p-3 rounded-full bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-700/70 backdrop-blur-md border border-white/50 dark:border-slate-700/50 shadow-lg text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              aria-label="LinkedIn" 
              style={{
                boxShadow: `0 5px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)`
              }}
            >
              <FiLinkedin />
            </motion.a>
            
            <motion.a
              href="mailto:email@example.com"
              custom={2}
              variants={socialVariants}
              whileHover="hover"
              className="p-3 rounded-full bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-700/70 backdrop-blur-md border border-white/50 dark:border-slate-700/50 shadow-lg text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              aria-label="Email"
              style={{
                boxShadow: `0 5px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)`
              }}
            >
              <FiMail />
            </motion.a>
            
            <motion.a
              href="/resume.pdf"
              download
              custom={3}
              variants={socialVariants}
              whileHover="hover"
              className="p-3 rounded-full bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-700/70 backdrop-blur-md border border-white/50 dark:border-slate-700/50 shadow-lg text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              aria-label="Resume"
              style={{
                boxShadow: `0 5px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)`
              }}
            >
              <FiDownload />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          className="flex flex-col items-center space-y-3"
          whileHover={{ scale: 1.05, y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <motion.span 
            className="text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-400 bg-clip-text text-transparent font-medium tracking-wide"
            animate={{
              backgroundPosition: ['0% center', '100% center', '0% center'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Scroll to explore
          </motion.span>
          
          <div className="relative flex justify-center items-center">
            {/* Animated glow behind mouse */}
            <motion.div
              animate={{ 
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute w-8 h-8 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur-md"
            />
            
            {/* Mouse outline */}
            <div className="h-10 w-6 rounded-full border-2 border-blue-500/70 dark:border-blue-400/70 flex justify-center relative overflow-hidden backdrop-blur-sm">
              {/* Scroll dot */}
              <motion.div 
                animate={{ 
                  y: [0, 20, 0],
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 0.8, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
                className="w-1.5 h-3 bg-gradient-to-b from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 rounded-full absolute top-1 shadow-lg shadow-blue-500/30 dark:shadow-blue-400/30"
              />
            </div>
            
            {/* Arrow indicators */}
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{
                duration: 1.5,
                delay: 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-4"
            >
              <FiArrowDown className="text-blue-500 dark:text-blue-400" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
