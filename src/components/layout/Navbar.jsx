import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX, FiGithub, FiLinkedin, FiTwitter, FiAtSign } from 'react-icons/fi';
import useTheme from '../../hooks/useTheme';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('hero');
  const navRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollY } = useScroll();
  
  // Create transform values based on scroll position
  const navOpacity = useTransform(
    scrollY,
    [0, 100],
    [1, isDark ? 0.85 : 0.9]
  );
  
  const navScale = useTransform(
    scrollY,
    [0, 100],
    [1, 0.98]
  );
  
  const navBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(8px)", "blur(16px)"]
  );

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
      
      // Highlight active section based on scroll position
      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      const position = offset + 100; // Offset to trigger slightly earlier
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= position) {
          setActiveItem(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mouse position for 3D effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate normalized position (-1 to 1)
        const normalizedX = (e.clientX - centerX) / (rect.width / 2);
        const normalizedY = (e.clientY - centerY) / (rect.height / 2);
        
        mouseX.set(normalizedX * 4); // Subtle effect, not too strong
        mouseY.set(normalizedY * 2);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for premium feel
        staggerChildren: 0.06
      }
    }
  };
  
  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      } 
    }),
    hover: { 
      scale: 1.1,
      y: -2,
      transition: { 
        type: "spring", 
        stiffness: 300,
        damping: 10
      }
    }
  };
  
  const logoTextVariants = {
    rest: {
      backgroundPosition: "0% 50%",
      transition: { duration: 0.5 }
    },
    hover: {
      backgroundPosition: "100% 50%",
      transition: { duration: 1.2 }
    }
  };

  const menuItems = [
    { name: 'Home', href: '#hero', icon: '🏠' },
    { name: 'About', href: '#about', icon: '👨‍💻' },
    { name: 'Experience', href: '#experience', icon: '📈' },
    { name: 'Projects', href: '#projects', icon: '🚀' },
    { name: 'Contact', href: '#contact', icon: '✉️' },
  ];

  return (
    <>
      <motion.nav 
        ref={navRef}
        className={`fixed top-0 w-full z-50 transition-all duration-500`}
        initial="hidden"
        animate="visible"
        variants={navVariants}
        style={{ 
          rotateX: mouseY,
          rotateY: mouseX,
          transformPerspective: 1000,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Dynamic backdrop */}
        <motion.div
          className={`absolute inset-0 transition-all duration-500 ${
            scrolled 
            ? 'border-b border-white/30 dark:border-electric-900/30' 
            : ''
          }`}
          style={{
            opacity: navOpacity,
            scale: navScale,
            backdropFilter: navBlur,
          }}
        >
          {/* Layered background with 3D depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-blue-50/85 to-white/80 dark:from-slate-900/95 dark:via-slate-800/95 dark:to-slate-900/95"></div>
          
          {/* Animated glow effect */}
          <motion.div 
            className="absolute inset-0 opacity-70"
            initial={{ backgroundPosition: "0% 0%" }}
            animate={{ 
              backgroundPosition: ["0% 0%", "100% 100%"], 
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity, 
              repeatType: "reverse"
            }}
            style={{
              background: isDark 
                ? "radial-gradient(circle at center, rgba(56, 189, 248, 0.15) 0%, transparent 70%)" 
                : "radial-gradient(circle at center, rgba(56, 189, 248, 0.1) 0%, transparent 70%)"
            }}
          />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
          
          {/* Noise texture */}
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay"></div>
          
          {/* Dynamic highlight based on scroll */}
          {scrolled && (
            <motion.div 
              className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 dark:via-blue-500/60 to-transparent"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          )}
        </motion.div>
        
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${scrolled ? 'py-3' : 'py-5'} transition-all duration-500`}>
          <div className="flex justify-between items-center">
            {/* 3D Interactive Logo */}
            <div className="flex-shrink-0">
              <motion.a 
                href="#hero" 
                className="group flex items-center space-x-3 perspective-1000"
                whileHover="hover"
                initial="rest"
              >
                <div className="relative h-12 w-12 transform-gpu">
                  <motion.div 
                    className="absolute inset-0 rounded-xl bg-gradient-to-br from-electric-500 to-rich-500 dark:from-electric-400 dark:to-rich-400 shadow-lg shadow-electric-500/30 dark:shadow-electric-400/20"
                    whileHover={{ 
                      rotate: [0, 15, -15, 0],
                      scale: 1.05,
                    }}
                    transition={{ 
                      duration: 1,
                      ease: "easeInOut"
                    }}
                  >
                    <motion.div 
                      className="absolute inset-0 opacity-70 rounded-xl overflow-hidden"
                      animate={{ 
                        backgroundPosition: ["0% 0%", "100% 100%"] 
                      }}
                      transition={{ 
                        duration: 5, 
                        repeat: Infinity, 
                        repeatType: "reverse" 
                      }}
                      style={{
                        backgroundSize: "200% 200%",
                        backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 70%)`
                      }}
                    />
                  </motion.div>
                  
                  {/* Logo inner - 3D effect */}
                  <motion.div 
                    className="absolute inset-[2.5px] rounded-lg bg-white dark:bg-slate-900 flex items-center justify-center"
                    whileHover={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  >
                    <motion.span 
                      className="font-display font-bold text-2xl bg-gradient-to-br from-electric-600 to-rich-600 dark:from-electric-400 dark:to-rich-400 bg-clip-text text-transparent"
                      animate={{ 
                        backgroundPosition: ["0% 0%", "100% 100%"] 
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        repeatType: "reverse" 
                      }}
                      style={{ backgroundSize: "200% 200%" }}
                    >
                      JP
                    </motion.span>
                  </motion.div>
                </div>
                
                <motion.div className="flex flex-col" variants={logoTextVariants}>
                  <motion.span 
                    className="font-display font-bold text-xl bg-gradient-to-r from-electric-600 via-rich-600 to-electric-600 dark:from-electric-400 dark:via-rich-400 dark:to-electric-400 bg-clip-text text-transparent bg-size-200"
                    variants={logoTextVariants}
                    style={{ backgroundSize: "200% auto" }}
                  >
                    John Doe
                  </motion.span>
                  <motion.span 
                    className="text-sm font-medium text-slate-600 dark:text-slate-400"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    Full Stack Developer
                  </motion.span>
                </motion.div>
              </motion.a>
            </div>
            
            {/* Desktop menu - premium design */}
            <div className="hidden md:flex md:items-center">
              {/* Main menu items with 3D transform on container */}
              <motion.div 
                className="py-1.5 pl-3 pr-1.5 mr-3 rounded-2xl bg-white/70 dark:bg-slate-800/60 backdrop-blur-xl border border-white/50 dark:border-slate-700/50 shadow-lg flex items-center transform-gpu"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                style={{ 
                  transformStyle: "preserve-3d",
                  boxShadow: isDark 
                    ? "0 8px 30px rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.1)" 
                    : "0 8px 30px rgba(0, 0, 0, 0.06), inset 0 0 0 1px rgba(255, 255, 255, 0.5)"
                }}
              >
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    custom={index}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    className={`relative font-medium px-5 py-2 rounded-xl flex items-center space-x-1.5 group transition-all duration-300
                      ${activeItem === item.href.substring(1) 
                        ? "bg-gradient-to-br from-electric-50 to-rich-50/50 dark:from-electric-900/40 dark:to-rich-900/30 text-electric-600 dark:text-electric-400 shadow-sm" 
                        : "text-slate-700 dark:text-slate-300 hover:text-electric-600 dark:hover:text-electric-400"}
                    `}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveItem(item.href.substring(1));
                      document.querySelector(item.href).scrollIntoView({ behavior: 'smooth' });
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Icon with 3D pop effect on hover */}
                    <motion.span 
                      className="opacity-80 text-xs"
                      whileHover={{ 
                        scale: 1.35,
                        y: -2,
                        z: 15, // 3D effect
                        opacity: 1,
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.3 }
                      }}
                    >
                      {item.icon}
                    </motion.span>
                    
                    {/* Text with subtle lift on hover */}
                    <motion.span 
                      className="relative"
                      whileHover={{ z: 10 }}
                    >
                      {item.name}
                    </motion.span>
                    
                    {/* Animated underline indicator */}
                    {activeItem === item.href.substring(1) && (
                      <motion.span 
                        className="absolute bottom-1 left-0 right-0 h-0.5 mx-5 bg-gradient-to-r from-electric-400/0 via-electric-400 to-electric-400/0 dark:from-electric-400/0 dark:via-electric-400 dark:to-electric-400/0"
                        layoutId="activeSection"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.a>
                ))}
              </motion.div>
              
              {/* Social icons with premium design */}
              <div className="flex items-center space-x-1">
                {/* Social links */}
                <motion.div 
                  className="flex items-center space-x-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  {[
                    { icon: <FiGithub />, href: "https://github.com/", label: "GitHub" },
                    { icon: <FiTwitter />, href: "https://twitter.com/", label: "Twitter" },
                    { icon: <FiLinkedin />, href: "https://linkedin.com/", label: "LinkedIn" },
                    { icon: <FiAtSign />, href: "mailto:contact@example.com", label: "Email" }
                  ].map((social, i) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-600 dark:text-slate-400 hover:text-electric-600 dark:hover:text-electric-400 relative group"
                      whileHover={{ 
                        scale: 1.15, 
                        transition: { type: "spring", stiffness: 400, damping: 10 }
                      }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                    >
                      <span className="relative z-10 text-lg">{social.icon}</span>
                      
                      {/* Circular background that appears on hover */}
                      <motion.span 
                        className="absolute inset-0 rounded-full bg-electric-100 dark:bg-electric-900/30 opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 15 }}
                      />
                      
                      {/* Tooltip on hover */}
                      <motion.span
                        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs font-medium text-white bg-slate-800 dark:bg-slate-700 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
                        initial={{ y: -5, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {social.label}
                      </motion.span>
                    </motion.a>
                  ))}
                </motion.div>
                
                {/* Theme toggle with enhanced design */}
                <motion.div 
                  className="ml-1"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, type: "spring", stiffness: 400 }}
                >
                  <motion.button
                    onClick={toggleTheme}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9, rotate: 180 }}
                    className="relative p-3 rounded-xl bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-slate-700/80 text-slate-700 dark:text-slate-300 shadow-lg overflow-hidden border border-white/50 dark:border-slate-700/50 backdrop-blur-sm"
                    aria-label="Toggle theme"
                    style={{ boxShadow: isDark ? "0 5px 15px rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.1)" : "0 5px 15px rgba(0, 0, 0, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.8)" }}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={isDark ? 'dark' : 'light'}
                        initial={{ scale: 0, rotate: -180, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        exit={{ scale: 0, rotate: 180, opacity: 0 }}
                        transition={{ duration: 0.4, type: "spring" }}
                        className="relative z-10"
                      >
                        {isDark ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
                      </motion.div>
                    </AnimatePresence>
                    
                    {/* Animated background effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 dark:from-blue-400/20 dark:to-indigo-400/20 opacity-0"
                      animate={{ 
                        opacity: [0, 0.5, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 3,
                      }}
                    />
                  </motion.button>
                </motion.div>
              </div>
            </div>            {/* Mobile menu button with extraordinary design */}
            <div className="md:hidden flex items-center space-x-3">
              {/* Theme toggle - mobile */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, rotate: 180 }}
                className="relative p-2.5 rounded-lg bg-gradient-to-br from-white to-slate-100 dark:from-slate-800 dark:to-slate-700 text-slate-700 dark:text-slate-300 shadow-lg overflow-hidden border border-white/60 dark:border-slate-700/60"
                aria-label="Toggle theme"
                style={{ boxShadow: isDark ? "0 5px 15px rgba(0, 0, 0, 0.25)" : "0 5px 15px rgba(0, 0, 0, 0.05)" }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isDark ? 'dark' : 'light'}
                    initial={{ scale: 0, rotate: -180, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0, rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.4, type: "spring" }}
                  >
                    {isDark ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
                  </motion.div>
                </AnimatePresence>
                
                {/* Animated glow effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent dark:via-blue-400/30 opacity-0"
                  animate={{
                    opacity: [0, 0.5, 0],
                    left: ["-100%", "100%"]
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 2,
                    ease: "easeInOut"
                  }}
                />
              </motion.button>
              
              {/* Mobile menu toggle - extraordinary design */}
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                whileTap={{ scale: 0.9 }}
                className="relative overflow-hidden p-2.5 rounded-lg bg-gradient-to-br from-electric-500 to-rich-500 dark:from-electric-400 dark:to-rich-400 shadow-lg shadow-electric-500/20 dark:shadow-electric-400/20 text-white border border-electric-400/30 dark:border-rich-400/30"
                aria-label="Toggle mobile menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={mobileMenuOpen ? 'close' : 'open'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3, type: "spring" }}
                    className="relative z-10"
                  >
                    {mobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
                  </motion.div>
                </AnimatePresence>
                
                {/* Animated radial effect */}
                <motion.div 
                  className="absolute inset-0 opacity-70"
                  animate={{ 
                    scale: mobileMenuOpen ? [1, 1.2, 1] : [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 1.5, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  style={{
                    background: "radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, transparent 70%)"
                  }}
                />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>
      
      {/* Mobile menu overlay with extraordinary design */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 md:hidden overflow-hidden perspective-1000"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Backdrop with glassmorphism */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-white/95 via-blue-50/95 to-white/95 dark:from-slate-900/95 dark:via-slate-800/95 dark:to-slate-900/95 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated orbs for visual interest */}
              <motion.div 
                className="absolute top-[20%] -left-20 w-60 h-60 rounded-full bg-gradient-to-br from-electric-400/20 to-rich-400/10 dark:from-electric-400/10 dark:to-rich-400/5 blur-3xl"
                animate={{ 
                  x: [0, 30, 0],
                  y: [0, -30, 0],
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.7, 0.5]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              <motion.div 
                className="absolute bottom-[20%] -right-20 w-60 h-60 rounded-full bg-gradient-to-br from-emerald-400/20 to-rich-400/10 dark:from-emerald-400/10 dark:to-rich-400/5 blur-3xl"
                animate={{ 
                  x: [0, -20, 0],
                  y: [0, 20, 0],
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              {/* Grid pattern */}
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
            </motion.div>
            
            {/* Menu content with 3D animation */}
            <motion.div 
              className="relative h-full w-full flex flex-col pt-28 pb-10 px-8 overflow-y-auto"
              initial={{ opacity: 0, y: 20, rotateX: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: 20, rotateX: -10 }}
              transition={{ 
                duration: 0.5,
                type: "spring",
                damping: 20
              }}
            >
              {/* Menu items with staggered animation */}
              <div className="space-y-3 mb-12">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    custom={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { 
                        delay: i * 0.08 + 0.2,
                        type: "spring",
                        damping: 20
                      } 
                    }}
                    exit={{ opacity: 0, x: -30, transition: { delay: i * 0.05 } }}
                  >
                    <motion.a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`group flex items-center py-4 px-5 rounded-xl ${
                        activeItem === item.href.substring(1)
                        ? "bg-gradient-to-r from-electric-50 to-white dark:from-electric-900/40 dark:to-slate-800"
                        : "hover:bg-white/60 dark:hover:bg-slate-800/60"
                      } transition-all duration-300 shadow-sm transform-gpu`}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Icon container */}
                      <motion.div 
                        className={`mr-4 p-3 rounded-full ${
                          activeItem === item.href.substring(1)
                          ? "bg-electric-100 dark:bg-electric-900/40 text-electric-600 dark:text-electric-400"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                        } group-hover:bg-gradient-to-br group-hover:from-electric-100 group-hover:to-rich-100 dark:group-hover:from-electric-900/30 dark:group-hover:to-rich-900/30`}
                        whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-xl">
                          {item.icon}
                        </span>
                      </motion.div>
                      
                      <div className="flex flex-col">
                        <span className={`text-xl font-display font-bold ${
                          activeItem === item.href.substring(1)
                          ? "text-electric-600 dark:text-electric-400"
                          : "text-slate-800 dark:text-white"
                        } group-hover:text-electric-600 dark:group-hover:text-electric-400`}>
                          {item.name}
                        </span>
                        
                        {/* Descriptive text for better UX */}
                        <span className="text-sm text-slate-600 dark:text-slate-400 transition-colors">
                          {item.name === 'Home' && "Back to top"}
                          {item.name === 'About' && "Learn about me"}
                          {item.name === 'Experience' && "My work history"}
                          {item.name === 'Projects' && "See my work"}
                          {item.name === 'Contact' && "Get in touch"}
                        </span>
                      </div>
                      
                      {/* Animated arrow indicator */}
                      <motion.div 
                        className="ml-auto text-slate-400 dark:text-slate-500 group-hover:text-electric-500 dark:group-hover:text-electric-400 opacity-0 group-hover:opacity-100"
                        initial={{ x: -10, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 17L15 12L10 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </motion.div>
                    </motion.a>
                  </motion.div>
                ))}
              </div>
              
              {/* Social icons - mobile with extraordinary design */}
              <motion.div 
                className="mt-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.6 } }}
                exit={{ opacity: 0 }}
              >
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3 text-center uppercase tracking-wider">Connect with me</p>
                <div className="flex justify-around">
                  {[
                    { icon: <FiGithub className="w-5 h-5" />, href: "https://github.com/", label: "GitHub", color: "from-slate-600 to-slate-700 dark:from-slate-400 dark:to-slate-500" },
                    { icon: <FiTwitter className="w-5 h-5" />, href: "https://twitter.com/", label: "Twitter", color: "from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500" },
                    { icon: <FiLinkedin className="w-5 h-5" />, href: "https://linkedin.com/", label: "LinkedIn", color: "from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700" },
                    { icon: <FiAtSign className="w-5 h-5" />, href: "mailto:contact@example.com", label: "Email", color: "from-emerald-500 to-emerald-700 dark:from-emerald-400 dark:to-emerald-600" }
                  ].map((social, i) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex flex-col items-center"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ 
                        y: 0, 
                        opacity: 1,
                        transition: { delay: 0.8 + i * 0.1 }
                      }}
                      whileHover={{ y: -5 }}
                      whileTap={{ y: 0 }}
                    >
                      <motion.div 
                        className={`p-4 rounded-xl bg-gradient-to-br ${social.color} text-white shadow-lg mb-2`}
                        whileHover={{ 
                          scale: 1.15,
                          boxShadow: "0 10px 25px -10px rgba(0, 0, 0, 0.4)"
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {social.icon}
                        
                        {/* Shine effect on hover */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 rounded-xl"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
