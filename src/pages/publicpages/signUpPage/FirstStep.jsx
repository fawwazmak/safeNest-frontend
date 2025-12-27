import React from 'react'

const firstStep = ({step, setStep}) => {
  return (
    <div className='flex flex-col gap-4 md:py-28 py-8 lg:px-24 md:px-16 px-4 '>
      <p>sign up now to start your journey to stress-free renting</p>

      <button className='bg-white text-[#23A9F0] lg:px-4 md:px-2 py-2 rounded-lg font-bold block cursor-pointer' onClick={() => {setStep("second"); }}>Become A Tenant</button>
      <button className='bg-white text-[#23A9F0] lg:px-4 md:px-2 py-2 rounded-lg font-bold block cursor-pointer' onClick={() => {setStep("second"); }}>Become A Landlord</button>

      <small className='text-[10px]'>By registering you agree to <span className='font-bold'>SafeNest</span> Terms & conditions--</small>
    </div>
  )
}

export default firstStep
