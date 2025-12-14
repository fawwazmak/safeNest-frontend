import React from 'react'
import { NavLink } from 'react-router-dom';

const SecondStep = ({step, setStep}) => {
    function handleSubmit(e) {
        e.preventDefault();
        setStep("third");
    }
  return (
    <div className='py-5 lg:px-24 md:px-16 px-4 '>
        <div className='flex mb-8 md:items-center md:justify-baseline justify-between flex-wrap lg:gap-20 md:gap-8'>
            <h1 className='md:text-3xl text-xl font-semibold'>Sign up</h1> 
            <NavLink to="/logIn"><p>Sign in</p></NavLink>
        </div>

        <form action="" method="" className='flex flex-col gap-4'>
            <input type="text" placeholder='Full Name' className='outline-none border-none bg-white text-[#1C62BA] p-3 block w-full' name='fullName' id='fullName' required />
            <input type="text" placeholder='Phone Number' className='outline-none border-none bg-white text-[#1C62BA] p-3 block w-full' name='phoneNumber' id='phoneNumber' required />
            <input type="email" placeholder='Email Address' className='outline-none border-none bg-white text-[#1C62BA] p-3 block w-full' name='emailAddress' id='emailAddress' required />

    
            <div className='mt-4 flex justify-end'>
                <button className='bg-[#06C3FF] text-white py-4 px-6 block' onClick={(e) => handleSubmit(e)}>Next</button>
            </div>
        </form>

        <small className='text-xs mt-6 block'>By Registering You Agree to <span className='font-bold'>SafeNest</span> Terms Of Use</small>
    </div>
  )
}

export default SecondStep
