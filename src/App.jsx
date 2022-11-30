import React from 'react'
import styled from '@emotion/styled'

import {
  Navbar, 
  Header, 
  About, 
  Projects, 
  Footer
} from './components'


const App = () =>{
  return(
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  )
}


export default App;