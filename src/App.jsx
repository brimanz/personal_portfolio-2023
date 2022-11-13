import React from 'react'
import styled from '@emotion/styled'

import {
  Navbar, 
  Header, 
  About, 
  Projects, 
  Contact
} from './components'


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