
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cardetails from './pages/Cardetails'
import Singlecardetails from './components/Singlecardetails'
import Favorites from './pages/Favorites'
import Pagenotfound from './pages/Pagenotfound'
import Userrole from './pages/Userrole'
import Auth from './pages/Auth'
import { useContext } from 'react'
import { loginResponseContext } from './context/ContextShare'

function App() {
  const { loginResponse } = useContext(loginResponseContext)
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cardetails' element={loginResponse ? <Cardetails /> : <Pagenotfound />} />
        <Route path='/singlecardetails/:id' element={<Singlecardetails/>} />
        <Route path='/favoritecardetails' element={<Favorites />} />
        <Route path='/userrole' element={<Userrole />} />
        <Route path='/adminsignup' element={<Auth signup={true} admin={true} />} />
        <Route path='/usersignup' element={<Auth signup={true} />} />
        <Route path='/adminlogin' element={<Auth admin={true} />} />
        <Route path='/userlogin' element={<Auth />} />
        <Route path='*' element={<Pagenotfound />} />
      </Routes>
    </>
  )
}

export default App
