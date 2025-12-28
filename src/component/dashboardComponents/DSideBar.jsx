import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import Logo from '/logo.png'
import { MdDashboard } from "react-icons/md";
import propertyIcon from '/property-iconD.png'
import rentIcon from '/rent-iconD.png'
import { GrTransaction } from "react-icons/gr";
import { CiSettings } from "react-icons/ci";
import { TiMessages } from "react-icons/ti";
import { FaHandsHelping } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import profilePic from '/profile-pic.png'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";



const DSideBar = ({showSideBar, setShowSideBar}) => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
  return (
    <div className={`bg-[#2E374E] h-full text-white p-5 font-[Inter] ${showSideBar? "block" : "md:block hidden"}`}>
        <div className="md:flex hidden items-center gap-2 font-bold md:text-xl text-lg">
            <img src={Logo} alt="Logo" className='w-8 h-8 ' />
            <p className=''>SAFE <span className='text-[#2B5FA9]'>NEST</span></p>
        </div>


        <div className='md:hidden flex justify-end'>
            <p className='cursor-pointer' onClick={() => {setShowSideBar(false)}}>x</p>
        </div>

        <div className='flex flex-col gap-6 my-6'>
            <div>
                <NavLink to="/dashboard" className={({isActive}) => `${isActive ? 'bg-[#2B5FA9]' : ''} px-4 py-2 rounded-2xl hover:bg-[#1B2236] flex items-center gap-1`}>
                    <MdDashboard size={20} className="inline mb-1 mr-2"/>
                    Dashboard
                </NavLink>
            </div>
            <div>
                <NavLink to="{}" className={({isActive}) => `${isActive ? 'bg-[#2B5FA9]' : ''} px-4 py-2 rounded-2xl hover:bg-[#1B2236] flex items-center gap-1`}>
                    <img src={propertyIcon} alt="Property Icon" className="inline mb-1 mr-2 w-5 h-5"/>
                    Properties
                </NavLink>
            </div>
            <div>
                <NavLink to="{}" className={({isActive}) => `${isActive ? 'bg-[#2B5FA9]' : ''} px-4 py-2 rounded-2xl hover:bg-[#1B2236] flex items-center gap-1`}>
                    <img src={rentIcon} alt="Rent Icon" className="inline mb-1 mr-2 w-5 h-5"/>
                    Rent Application
                </NavLink>
            </div>
            <div>
                <NavLink to="{}" className={({isActive}) => `${isActive ? 'bg-[#2B5FA9]' : ''} px-4 py-2 rounded-2xl hover:bg-[#1B2236] flex items-center gap-1`}>
                    <GrTransaction size={20} className="inline mb-1 mr-2" />
                    Transactions
                </NavLink>
            </div>
            <div>
                <NavLink to="{}" className={({isActive}) => `${isActive ? 'bg-[#2B5FA9]' : ''} px-4 py-2 rounded-2xl hover:bg-[#1B2236] flex items-center gap-1`}>
                    <CiSettings size={20} className="inline mb-1 mr-2" />
                    Settings
                </NavLink>
            </div>
            <div>
                <NavLink to="{}" className={({isActive}) => `${isActive ? 'bg-[#2B5FA9]' : ''} px-4 py-2 rounded-2xl hover:bg-[#1B2236] flex items-center gap-1`}>
                    <TiMessages size={20} className="inline mb-1 mr-2" />
                    Messages
                </NavLink>
            </div>
            <div>
                <NavLink to="{}" className={({isActive}) => `${isActive ? 'bg-[#2B5FA9]' : ''} px-4 py-2 rounded-2xl hover:bg-[#1B2236] flex items-center gap-1`}>
                    <FaHandsHelping size={20} className="inline mb-1 mr-2" />
                    Help & Support
                </NavLink>
            </div>
        </div>

        <div className='flex md:hidden flex-wrap items-center text-sm gap-2 mb-6'>
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
            <div className='bg-white text-black fixed bottom-[5%] right-[35%] px-3 shadow-lg rounded-lg w-60 py-4 flex flex-col gap-4 z-10'>
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

        <NavLink to="/" className={`px-4 py-2 rounded-2xl hover:bg-[#1B2236] md:flex hidden items-center gap-1 text-red-700`}>
            <MdLogout size={20} className="inline mr-2" /> Logout
        </NavLink>
    </div>
  )
}

export default DSideBar