import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './Views/Home/Home'
import NavBar from './Components/NavBar/NavBar'

function App() {
  const location = useLocation();

  return (
    <div>
      {
        location.pathname !== '/' && <NavBar></NavBar>
      }
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
