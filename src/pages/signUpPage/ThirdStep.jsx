import React from 'react'
import { NavLink } from 'react-router-dom';

const ThirdStep = ({step, setStep}) => {
    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form Submitted");
    }
  return (
    <div className='py-7 lg:px-24 md:px-16 px-4 '>
        <div className='flex mb-8 md:items-center md:justify-baseline justify-between flex-wrap lg:gap-20 md:gap-8'>
            <h1 className='md:text-3xl text-xl font-semibold'>Sign up</h1> 
            <NavLink to="/logIn"><p>Sign in</p></NavLink>
        </div>

        <form action="" method="" className='flex flex-col gap-4 w-full'>
            <input type="text" placeholder='Marital Status' className='outline-none border-none bg-white text-[#1C62BA] p-3 block w-full' name='maritalStatus' id='maritalStatus' required />
            <input type="password" placeholder='Password' className='outline-none border-none bg-white text-[#1C62BA] p-3 block w-full' name='password' id='password' required />
            <input type="password" placeholder='Confirm Password' className='outline-none border-none bg-white text-[#1C62BA] p-3 block w-full' name='confirmPassword' id='confirmPassword' required />


            <div className='flex items-center gap-2'>
                <input type="checkbox" id="terms" name='terms' required />
                <label htmlFor="terms" className='text-xs'>I agree to <span className='font-bold'>SafeNest</span> Terms & Condition and Privacy Policy</label>
            </div>


            <button className='bg-[#06C3FF] text-white py-4 px-6 block w-full cursor-pointer' onClick={(e) => handleSubmit(e)}>Next</button>
        </form>

    </div>
  )
}

export default ThirdStep
