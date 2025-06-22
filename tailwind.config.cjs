/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        // Electric blue palette
        electric: {
          50: '#edfaff',
          100: '#d6f2ff',
          200: '#b5eaff',
          300: '#83dfff',
          400: '#48ceff',
          500: '#1eb8ff',
          600: '#0697ff',
          700: '#027cf3',
          800: '#0a66d1',
          900: '#0e57a6',
          950: '#0e345e',
        },
        // Rich indigo palette
        rich: {
          50: '#eef2ff',
          100: '#e0e8ff',
          200: '#c7d4ff',
          300: '#a4b7fe',
          400: '#808ffe',
          500: '#6366f1',
          600: '#4840e3',
          700: '#3d30cf',
          800: '#3429a8',
          900: '#302a85',
          950: '#1c1650',
        },
        // Emerald palette
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
      },
      boxShadow: {
        'strong': '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.2)',
        'strong-lg': '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
        'glow-blue': '0 0 15px rgba(56, 189, 248, 0.7), 0 0 30px rgba(56, 189, 248, 0.4)',
        'glow-purple': '0 0 15px rgba(168, 85, 247, 0.7), 0 0 30px rgba(168, 85, 247, 0.4)',
        'glow-emerald': '0 0 15px rgba(16, 185, 129, 0.7), 0 0 30px rgba(16, 185, 129, 0.4)',
      },
      dropShadow: {
        'text': '0 2px 4px rgba(0, 0, 0, 0.3)',
        'text-light': '0 2px 4px rgba(255, 255, 255, 0.2)',
      },
    },
  },
  plugins: [],
}
