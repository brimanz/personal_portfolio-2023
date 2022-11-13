import React from 'react'
import styled from '@emotion/styled'

import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'


const App = () =>{
  return(
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}


export default App;