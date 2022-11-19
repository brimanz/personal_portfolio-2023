import React from 'react'
import styled from '@emotion/styled'

import {
  Navbar, 
  Header, 
  About, 
  Projects, 
  Contact,
  Footer
} from './components'


const App = () =>{
  return(
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}


export default App;