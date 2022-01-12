import Header from '../components/header'
import Footer from '../components/footer'
import './app.css'

//Manage Routes
import Router from '../config/router'

//Add Global Theme
import { ThemeProvider } from 'styled-components'
import { theme } from '../config/theme'

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Header></Header>
        <Router></Router>
        <Footer></Footer>
      </ThemeProvider>
    </div>
  )
}

export default App
