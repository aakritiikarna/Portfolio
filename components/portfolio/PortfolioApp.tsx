import AnimatedBackdrop from './AnimatedBackdrop'
import ParticleNetwork from './ParticleNetwork'
import Spotlight from './Spotlight'
import ProgressBar from './ProgressBar'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'
import EducationAndCerts from './EducationAndCerts'
import Contact from './Contact'
import Footer from './Footer'

export default function PortfolioApp() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackdrop />
      <ParticleNetwork />
      <Spotlight />
      <ProgressBar />
      <div className="relative z-20">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <EducationAndCerts />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
