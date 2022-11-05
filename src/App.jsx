import React from 'react'

import Header from './components/header/Header'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'


const App = () =>{
  return(
    <div className="app">
      <Header/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}


export default App;