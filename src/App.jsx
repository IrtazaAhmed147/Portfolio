import Footer from './Components/footer/Footer'
import Navbar from './Components/navbar/Navbar'
import About from './Pages/about/About'
import Contact from './Pages/contact/Contact'
import Home from './Pages/home/Home'
import Projects from './Pages/projects/Projects'
import Skills from './Pages/skills/Skills'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
