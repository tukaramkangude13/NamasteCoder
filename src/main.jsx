// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Body from './Body.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

import Courses from './COurses.jsx'
import './App.css'
import About from './About .jsx'
import UnnatiForm from './UnnatiForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/courses" element={<Courses />} />
        <Route  path='/about' element={<About/>} />
                <Route path="/contact" element={<UnnatiForm />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
