import React from 'react'
import arrow from '/arrow.png'
import mobileApp from '/mobile-app.png'

const Subscription = () => {
  return (
    <div className='flex md:flex-row flex-col md:gap-0 gap-4 md:text-start text-center md:justify-between justify-baseline items-center p-8 bg-[#EFF6FF] font-[Inter]'>
        <div className='md:w-1/3 flex flex-col gap-y-2'>
            <h3 className='md:text-4xl sm:text-3xl text-xl max-[639px]:font-semibold text-[#155DFC]'>Live stress free handle</h3>

            <p className='sm:text-2xl font-medium'>your rent through easy monthly subscription</p>

            <p>Pay your rent once a year and relax all year long stop paying rent yearly switch to flexible payments</p>
        </div>

        <img src={arrow} alt="Arrow" className='block max-[767px]:rotate-90 max-[445px]:max-w-full' />

        <img src={mobileApp} alt="mobile" className='block max-[767px]:-rotate-18 max-[445px]:max-w-full' />
    </div>
  )
}

export default Subscription
