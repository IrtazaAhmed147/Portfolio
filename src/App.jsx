import { Box } from '@mui/material'
import Particles from './Components/Particles'
import FloatingLines from './Components/Particles'
import Footer from './Components/footer/Footer'
import Navbar from './Components/navbar/Navbar'
import About from './Pages/about/About'
import Contact from './Pages/contact/Contact'
import Home from './Pages/home/Home'
import Projects from './Pages/projects/Projects'
import Skills from './Pages/skills/Skills'
// import FloatingLines from './FloatingLines';

function App() {

  return (
    <>
      <Navbar />
      {/* <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Particles
    particleColors={["#ffffff"]}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover
    alphaParticles={false}
    disableRotation={false}
    pixelRatio={1}
/>
</div> */}
    {/* <Box sx={{position:"absolute", top:0, left:0}}> */}

      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    {/* </Box> */}
    </>
  )
}

export default App
