import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import Logo from '/logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='font-[Inter] flex min-[265px]:flex-row flex-col min-[265px]:gap-0 gap-4 items-center justify-between lg:px-20 md:px-12 sm:px-8 px-4 py-3 bg-white sticky top-0 z-20 shadow-md'>
        <NavLink to="/">
            <div className="flex items-center gap-3 font-bold md:text-4xl text-2xl">
                <img src={Logo} alt="Logo" />
                <p className='max-[265px]:hidden'>SAFE <span className='text-[#2B5FA9]'>NEST</span></p>
            </div>
        </NavLink>

        <ul className={` flex-wrap md:flex-row flex-col md:static absolute md:h-full h-screen md:w-fit w-full top-0 left-0 items-center lg:justify-baseline md:justify-end justify-center lg:gap-8 gap-4 text-lg font-light bg-white ${isOpen ? 'flex' : 'hidden'} md:flex`}>
            <li><NavLink to="/properties">Properties</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/faqs">FAQ's</NavLink></li>
            <li><NavLink to="/co-living">Co-living</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li className='bg-[#155DFC] text-white p-4 rounded-xl'>Get Started</li>
        </ul>

        <div className="md:hidden text-3xl">
            <CiMenuFries onClick={() => setIsOpen(true)} />
            <IoIosClose onClick={() => setIsOpen(false)} className={`${isOpen ? 'block' : 'hidden'} absolute right-2 z-30 top-6`} />
        </div>
    </nav>
  )
}

export default Navbar
