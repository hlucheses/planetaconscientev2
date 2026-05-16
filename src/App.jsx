import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import ProfessionalProfile from './components/ProfessionalProfile.jsx'
import AreasOfWork from './components/AreasOfWork.jsx'
import FeaturedWork from './components/FeaturedWork.jsx'
import Projects from './components/Projects.jsx'
import Timeline from './components/Timeline.jsx'
import Highlights from './components/Highlights.jsx'
import Vision from './components/Vision.jsx'
import Press from './components/Press.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  // IntersectionObserver-driven reveal on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    const els = document.querySelectorAll('.reveal-on-scroll')
    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-cream-light text-ink overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <ProfessionalProfile />
        <AreasOfWork />
        <FeaturedWork />
        <Projects />
        <Timeline />
        <Highlights />
        <Vision />
        <Press />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
