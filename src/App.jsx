
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cardetails from './pages/Cardetails'
import Singlecardetails from './components/Singlecardetails'
import Favorites from './pages/Favorites'
import Pagenotfound from './pages/Pagenotfound'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cardetails' element={<Cardetails />} />
        <Route path='/singlecardetails' element={<Singlecardetails />} />
        <Route path='/favoritecardetails' element={<Favorites />} />
        <Route path='*' element={<Pagenotfound />} />
      </Routes>
    </>
  )
}

export default App
