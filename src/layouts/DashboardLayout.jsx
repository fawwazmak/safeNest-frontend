import { Outlet } from "react-router-dom"
import { useState } from "react"
import Navbar from "../component/dashboardComponents/DNavbar.jsx"
import Sidebar from "../component/dashboardComponents/DSideBar.jsx"

const DashboardLayout = () => {
  const [showSideBar, setShowSideBar] = useState(false)

  return (
    <div className="h-screen overflow-hidden flex">
      <div className="md:w-1/5 h-full md:static absolute right-0 top-0 z-30">
        <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      </div>

      <div className={`w-full h-full bg-black absolute opacity-50 z-20 ${showSideBar? 'block' : 'hidden'}`} onClick={() => {setShowSideBar(false)}} ></div>

      <div className="h-auto overflow-y-auto md:w-4/5 w-full">
        <Navbar setShowSideBar={setShowSideBar} />
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout
