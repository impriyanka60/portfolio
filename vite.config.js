/** @type {import('vite').UserConfig} */
module.exports = {
  plugins: [require('@vitejs/plugin-react')()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
        },
      },
    },
  }
}
