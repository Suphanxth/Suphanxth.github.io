import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/Navbar'
import Myproject from "./components/Myproject";
import Resume from './components/Resume'
import Home from './components/Home'

function App() {

  return (
    <div className="bg-white min-h-screen">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/myproject" element={<Myproject />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
