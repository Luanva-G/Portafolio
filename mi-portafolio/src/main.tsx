import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProjectsSection from './App'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <main>
      <Hero />
      <ProjectsSection />
    </main>
  </StrictMode>,
)
