import {Outlet} from 'react-router-dom'
import Navbar from '../component/Navbar.jsx'
import Footer from '../component/Footer.jsx';

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default PublicLayout
