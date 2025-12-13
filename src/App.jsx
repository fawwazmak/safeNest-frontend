import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import LandingPage from './pages/landingPage/LandingPage.jsx'
import About from './pages/aboutPage/About.jsx';
import Properties from './pages/propertiesPage/Properties.jsx';
import './App.css'
import Navbar from './component/Navbar'
import Footer from './component/Footer.jsx';
import LogInPage from './pages/LogInPage.jsx';
import SignUpPage from './pages/signUpPage/SignUpPage.jsx';

function App() {
  // Layout component renders Navbar and Footer conditionally based on the current route
  function Layout() {
    const { pathname } = useLocation();
    const hideNav = pathname === '/logIn' || pathname === '/signUp';

    return (
      <>
        {!hideNav && <Navbar />}
        <Routes>
          <Route path="/logIn" element={<LogInPage />} />
          <Route path="/signUp" element={<SignUpPage />} /> 
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="*" element={<h1 className='text-center mt-20 text-3xl'>404 - Page Not Found</h1>} />
        </Routes>
        {!hideNav && <Footer />}
      </>
    );
  }

  
  

  return (
    <>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </>
  )
}

export default App
