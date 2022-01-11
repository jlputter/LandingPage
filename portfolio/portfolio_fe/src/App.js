// import {Container} from './components/styles/Container.styled'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global'
import HomePage from './HomePage'

const theme = {
  colors: {
    header: '#D4BFF9',
    body: '#FFF',
    footer: "#2A0078",
    button: "#7E3FF2"
  },
}


// renderPageInProgress = () => {
//   return(
//       <h1> this page is in progess, please wait 3 seconds</h1>

//   );
// }

function App() {
  return (
    <HomePage/>
  );
}

export default App;
