import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  href,
  type = 'button',
  className = '',
  onClick,
  disabled = false
}) => {
  const baseStyle = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none";
  
  let variantStyle = "";
  
  switch (variant) {
    case 'primary':
      variantStyle = `
        relative overflow-hidden
        bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600
        dark:from-blue-500 dark:via-indigo-500 dark:to-blue-500
        bg-size-200 bg-pos-0 hover:bg-pos-100
        text-white shadow-lg shadow-blue-600/25 dark:shadow-blue-500/20
        hover:shadow-xl hover:shadow-blue-600/30 dark:hover:shadow-blue-500/30
        hover:-translate-y-1 active:translate-y-0
        border border-blue-500/20 dark:border-blue-400/20
      `;
      break;
    case 'secondary':
      variantStyle = `
        relative overflow-hidden
        bg-white/90 dark:bg-slate-800/90
        backdrop-blur-sm
        border border-slate-200 dark:border-slate-700
        text-slate-800 dark:text-white
        hover:border-blue-300 dark:hover:border-blue-500/50
        hover:text-blue-600 dark:hover:text-blue-400
        hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50
        hover:-translate-y-1 active:translate-y-0
      `;
      break;
    case 'outline':
      variantStyle = `
        relative overflow-hidden
        bg-transparent
        backdrop-blur-sm
        border-2 border-blue-500 dark:border-blue-400
        text-blue-600 dark:text-blue-400
        hover:bg-blue-500/10 dark:hover:bg-blue-400/10
        hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20
        hover:-translate-y-1 active:translate-y-0
      `;
      break;
    case 'glass':
      variantStyle = `
        relative overflow-hidden
        bg-white/20 dark:bg-slate-900/20
        backdrop-blur-lg
        border border-white/30 dark:border-slate-700/30
        text-slate-900 dark:text-white
        shadow-lg shadow-slate-200/20 dark:shadow-slate-900/20
        hover:bg-white/30 dark:hover:bg-slate-800/30
        hover:shadow-xl hover:shadow-slate-200/30 dark:hover:shadow-slate-900/30
        hover:-translate-y-1 active:translate-y-0
      `;
      break;
    default:
      variantStyle = `
        bg-white dark:bg-slate-800
        text-slate-800 dark:text-white
        border border-slate-200 dark:border-slate-700
        hover:-translate-y-1 active:translate-y-0
      `;
  }
  
  // Primary button animated gradient effect
  const primaryGlow = variant === 'primary' ? (
    <>
      <motion.span
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          repeatDelay: 1
        }}
      />
      <motion.span 
        className="absolute inset-0 w-full h-full opacity-0 bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-400 bg-size-200"
        animate={{
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </>
  ) : null;
  
  // Secondary button hover effect
  const secondaryEffect = variant === 'secondary' ? (
    <motion.span
      className="absolute inset-0 w-full h-full bg-gradient-to-tr from-blue-100/0 via-blue-100/30 to-blue-100/0 dark:from-blue-900/0 dark:via-blue-900/20 dark:to-blue-900/0 opacity-0"
      animate={{
        opacity: [0, 0.5, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  ) : null;

  const Component = href ? motion.a : motion.button;
  const props = href ? { href } : { type, onClick };

  return (
    <Component
      {...props}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`${baseStyle} ${variantStyle} ${className}`}
      disabled={disabled}
    >
      {variant === 'primary' && primaryGlow}
      {variant === 'secondary' && secondaryEffect}
      <span className="relative z-10">{children}</span>
    </Component>
  );
};

export default Button;
