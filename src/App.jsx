
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cardetails from './components/Cardetails'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cardetails' element={<Cardetails/>}/>
      </Routes>
    </>
  )
}

export default App
