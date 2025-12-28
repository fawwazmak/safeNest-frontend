import { CgSearch } from "react-icons/cg";
import { MdOutlineCircleNotifications } from "react-icons/md";
import profilePic from '/profile-pic.png';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import Logo from '/logo.png';
import { BiMenuAltRight } from "react-icons/bi";




const DNavbar = ({ setShowSideBar }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <div className='bg-white shadow-md p-6 flex justify-between items-center'>
      <div className="flex md:flex-nowrap flex-wrap w-full justify-between md:gap-0 gap-2 items-center md:border-r md:pr-4 md:mr-4 md:w-2/3 font-[Inter]">
        <div className="border md:flex hidden gap-1 items-center p-2  w-2/3">
          <CgSearch size={25} />
          <input type="text" placeholder="Search neighbourhoods or properties." className="outline-none border-none focus:outline-none focus:border-none flex-1"/>
        </div>

        {/* Logo */}
        <div className="flex flex-wrap sm:justify-baseline justify-center md:hidden items-center gap-2 font-bold text-2xl">
          <img src={Logo} alt="Logo" className='w-10 h-10 ' />
          <p className=''>SAFE <span className='text-[#2B5FA9]'>NEST</span></p>
        </div>
        
        <MdOutlineCircleNotifications size={35} className="md:block hidden" />

        {/* Mobile icons */}
        <div className="md:hidden flex flex-wrap items-center gap-2">
          <CgSearch size={35} className="cursor-pointer" onClick={() => {setShowSearchBar(true)}} />
          <MdOutlineCircleNotifications size={35} className="cursor-pointer" />
          <BiMenuAltRight className="cursor-pointer" size={35} onClick={() => {setShowSideBar(true)}} />
        </div>

        {/* Mobile search bar  */}
        <div className="md:hidden bg-white gap-1 items-center w-full absolute top-6 left-0 p-3 z-50 shadow-lg" style={{display: showSearchBar ? 'flex' : 'none'}}>
          <CgSearch size={35} className="cursor-pointer" />          
          <input type="text" placeholder="Search For Properties" className="outline-none border-none focus:outline-none focus:border-none flex-1 bg-gray-300 p-2 rounded-2xl"/>
          <p className="cursor-pointer" onClick={() => {setShowSearchBar(false)}}>X</p>
        </div>
      </div>

      <div className='md:flex hidden flex-wrap items-center text-sm gap-2'>
        <img src={profilePic} alt="profile-pic" className='block h-8' />

        <div className='flex flex-wrap items-center justify-between'>
          <div className='flex flex-col'>
            <p>Mike Dingo</p>
            <p>safenest@gmail.com</p>
          </div>

          <div>
            <IoIosArrowDown size={20} onClick={() => {setIsProfileOpen(!isProfileOpen)}} className={`${isProfileOpen ? 'hidden' : 'inline'} ml-2`} />
            <IoIosArrowUp size={20} onClick={() => {setIsProfileOpen(!isProfileOpen)}} className={`${isProfileOpen ? 'inline' : 'hidden'} ml-2`} />
          </div>
        </div>
      </div>

      {isProfileOpen && (
        <div className='bg-white text-black fixed top-[15%] right-0 px-3 shadow-lg rounded-lg w-60 py-4 flex flex-col gap-4 z-10'>
          <div className='flex'>
            <img src={profilePic} alt="profile-pic" className='block h-8' />
            <div className='flex flex-col'>
              <p>Mike Dingo</p>
              <p>safenest@gmail.com</p>
            </div>
          </div>

          <p className='mb-3'>Be A Landlord</p>

          <div className='border-y py-3 px-4'>
            <p>Profile</p>
            <p>Transaction</p>
            <p>Settings</p>
          </div>

          <NavLink to="/" className={`px-4 py-2 rounded-2xl hover:bg-[#1B2236] flex items-center gap-1 text-red-700`}>
            <MdLogout size={20} className="inline mr-2" /> Logout
          </NavLink>
        </div>
    )}

    </div>
  )
}

export default DNavbar
