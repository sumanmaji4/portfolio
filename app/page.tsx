import About from './Componentes/About'
import Experience from './Componentes/Experience'
import Intro from './Componentes/Intro'
import Projects from './Componentes/Projects'
import Sectiondevider from './Componentes/Section-devider'
import Skills from './Componentes/Skills'

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro />
      <Sectiondevider />
      <About />
      <Projects />
      <Skills />
      <Experience />
    </main>
  )
}
