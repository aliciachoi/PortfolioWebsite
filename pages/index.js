import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Alicia | Full-stack Developer</title>
        <meta name="description" content="Junior Software Developer with a background in marketing and analytics, combining customer needs understanding with growing expertise in software development." />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
