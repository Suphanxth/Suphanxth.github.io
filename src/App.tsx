import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Myproject from "./components/Myproject";
import Resume from './components/Resume'
import Home from './components/Home'
import Easible from './components/Project/Easible';
import EoXCheck from './components/Project/EoXCheck';

function App() {

  return (
    <div className="bg-white min-h-screen">
      <BrowserRouter>
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
