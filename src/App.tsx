import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Myproject from "./components/Myproject"
import Resume from './components/Resume'
import Home from './components/Home'
import Easible from './components/Project/Easible'
import EoXCheck from './components/Project/EoXCheck'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return null
}

function App() {
  return (
    <div className="bg-white min-h-screen">
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/myproject" element={<Myproject />} />
          <Route path="/myproject/easible" element={<Easible />} />
          <Route path="/myproject/eoxcheck" element={<EoXCheck />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
