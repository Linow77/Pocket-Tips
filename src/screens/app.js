import Header from '../components/header'
import './app.css'
import { Routes, Route } from 'react-router-dom'
import Home from '../screens/home'
import Installation from '../screens/installation'

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/installation' element={<Installation />} />
      </Routes>
    </div>
  )
}

export default App
