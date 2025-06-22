import React, { createContext, useState, useEffect, useCallback } from 'react';

// Create and export the context
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

// Theme Provider Component
export default function ThemeProvider({ children }) {
  // Initialize theme state
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    
    const savedTheme = localStorage.getItem('theme');
    console.log('Initial theme from localStorage:', savedTheme);
    
    if (savedTheme) return savedTheme;
    
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log('System prefers dark:', systemDark);
    return systemDark ? 'dark' : 'light';
  });

  // Update the theme in DOM and localStorage
  const applyTheme = useCallback((newTheme) => {
    console.log('Applying theme:', newTheme);
    
    if (typeof window === 'undefined') return;

    const root = document.documentElement;
    
    // First, remove both classes to ensure clean state
    root.classList.remove('light');
    root.classList.remove('dark');
    
    // Then add the appropriate class
    root.classList.add(newTheme);
    
    // Update localStorage
    localStorage.setItem('theme', newTheme);
    
    console.log('Theme applied. Dark class present:', root.classList.contains('dark'));
    console.log('Current classList:', root.classList.toString());
  }, []);

  // Effect to apply theme changes
  useEffect(() => {
    console.log('Theme effect running with theme:', theme);
    applyTheme(theme);
  }, [theme, applyTheme]);

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Toggle theme function
  const toggleTheme = useCallback(() => {
    console.log('Toggle theme called, current theme:', theme);
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      console.log('Switching to theme:', newTheme);
      return newTheme;
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
