import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage/LandingPage.jsx'
import About from './pages/aboutPage/About.jsx';
import Properties from './pages/propertiesPage/Properties.jsx';
import './App.css'
import Navbar from './component/Navbar'
import Footer from './component/Footer.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="*" element={<h1 className='text-center mt-20 text-3xl'>404 - Page Not Found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
