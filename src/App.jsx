
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cardetails from './pages/Cardetails'
import Singlecardetails from './components/Singlecardetails'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cardetails' element={<Cardetails/>}/>
         <Route path='/singlecardetails' element={<Singlecardetails/>}/>
      </Routes>
    </>
  )
}

export default App
