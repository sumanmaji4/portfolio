import About from './Componentes/About'
import Intro from './Componentes/Intro'
import Projects from './Componentes/Projects'
import Sectiondevider from './Componentes/Section-devider'

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro />
      <Sectiondevider />
      <About />
      <Projects />
    </main>
  )
}
