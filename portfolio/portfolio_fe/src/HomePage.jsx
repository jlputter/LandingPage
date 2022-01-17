import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global' 
import { render } from 'react-dom'
import React, { Component, useState } from 'react'


const theme = {
    colors: {
      header: '#D4BFF9',
      body: '#FFF',
      footer: "#2A0078",
      button: "#7E3FF2"
    },
  }

function HomePage(){
  const [firstLoad, setFirstLoad] = useState(false);

   

  

 
  return(
    <>
    {!firstLoad && 
    <div>
    <h1> this page is in progess, please wait 3 seconds</h1>
    <button onClick={() => setFirstLoad(true)}>HomePage </button>
    </div>}
    {firstLoad && <ThemeProvider theme = {theme}>
    <>
    <GlobalStyles/>
      <Header /> 
      <AboutMe/>
      <Footer/>
    </>
  </ThemeProvider>}
    </>

);
}

export default HomePage;
    
