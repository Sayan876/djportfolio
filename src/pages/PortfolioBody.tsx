import About from '@/components/About'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'


const PortfolioBody = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Experience/>
      <Skills/>
      <Education/>
      <Projects/>
    </div>
  )
}

export default PortfolioBody