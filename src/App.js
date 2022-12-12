import React from 'react'
import './App.css'
import Home from './components/home/Home'
import About from './components/about/About'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import TopButton from './components/topButton/TopButton'
import Resume from './components/resume/Resume'

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Education />
      <Experience />
      <Resume />
      <Footer />
      <TopButton />
    </div>
  )
}

export default App
