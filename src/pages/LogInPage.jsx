import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "/logo.png"

const LogInPage = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-[url(/signUpBg.jpg)] bg-cover bg-center font-[Inter]'>
        <div className="bg-black opacity-75 shadow-lg w-full h-full">
            <div className='flex md:flex-row flex-col items-center justify-center h-full md:px-48 relative md:text-start text-center'>
                <div className='md:w-1/2 w-full md:relative top-0 left-[5%] md:h-auto h-full flex'>
                    <div className='text-white bg-[#262E45F2] w-full md:rounded-l-lg flex flex-col gap-6 p-8  md:[clip-path:polygon(0_0,100%_0,85%_100%,0_100%)]'>
                        <div className="flex md:justify-start justify-center items-center gap-3 font-bold md:text-xl text-lg">
                            <img src={logo} alt="Logo" className='h-8' />
                            <p className='max-[265px]:hidden text-white'>SAFE <span className='text-[#2B5FA9]'>NEST</span></p>
                        </div>

                        <h1 className='text-2xl font-semibold'>Sell, Rent, Buy And Lease A Home On Your Own Terms</h1>
                        <p className='text-xs'>We have created the smartest way to sell your home by creating the smartest way to pay</p>
                        <p className='text-[#0CA6C6] text-xl font-medium'>Find A House, Live Like A King</p>


                        <small className='block md:mt-20'>Terms Of Service | Privacy Policy | Contact Us</small>
                    </div>
                </div>


                <div className='bg-[#1C62BA] text-white opacity-100 md:rounded-r-lg  md:w-1/2 w-full md:[clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] md:relative top-0 right-[5%] md:h-auto h-full md:py-16 py-8 lg:px-24 md:px-16 px-4 '>
                    <div className='flex mb-8 md:items-center md:justify-baseline justify-between flex-wrap lg:gap-20 md:gap-8'>
                        <NavLink to="/signUp">
                            <p>Sign up</p> 
                        </NavLink>

                        <h1 className='md:text-3xl text-xl font-semibold'>Sign in</h1>
                    </div>
                    <form action="" method="" className='flex flex-col gap-4'>
                        <input type="email" placeholder='Email Address' className='outline-none border-none bg-white text-[#1C62BA] p-3 block w-full' name='emailAddress' id='emailAddress' required />
                        <input type="password" placeholder='Password' className='outline-none border-none bg-white text-[#1C62BA] p-3 block w-full' name='password' id='password' required />

                        <button className='bg-[#06C3FF] text-white py-4 px-6 block w-full' onClick={(e) => handleSubmit(e)}>Log In</button>
                    </form>

                    <div className='flex justify-between mt-2'>
                        <div className='flex items-center '>
                            <input type="checkbox" id="rememberMe" name='rememberMe' />
                            <label htmlFor="rememberMe" className='text-xs ml-2'>Remember me</label>
                        </div>

                        <p className='mt-4 text-xs underline'>Forgot Password</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LogInPage
