import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Certificates from './components/sections/Certificates'
import Resume from './components/sections/Resume'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif' }}>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Resume />
      <Contact />
    </div>
  )
}

export default App
