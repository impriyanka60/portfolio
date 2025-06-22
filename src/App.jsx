import { useEffect } from 'react'
import Layout from './components/layout/Layout'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import ThemeProvider from './context/ThemeProvider'

function App() {
  // Update the document metadata
  useEffect(() => {
    document.title = 'Portfolio | Full Stack Developer'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Portfolio website showcasing my projects and skills as a Full Stack Developer')
    }
  }, [])

  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
    </ThemeProvider>
  )
}

export default App
