// import {Container} from './components/styles/Container.styled'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global'

const theme = {
  colors: {
    header: '#D4BFF9',
    body: '#FFF',
    footer: "#2A0078",
    button: "#7E3FF2"
  },
}

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <>
      <GlobalStyles/>
        <Header /> 
        <AboutMe/>
        <Footer/>
      </>
    </ThemeProvider>
  );
}

export default App;
