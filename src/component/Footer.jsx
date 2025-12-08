import React from 'react'
import logo from "/logo.png";

const Footer = () => {
    return (
        <div className='bg-[#0F172B] md:p-12 sm:p-8 p-4 text- font-[Inter] text-white'>
            <div className='border-b-2 border-b-white pb-6 mb-4 flex md:flex-row flex-col md:justify-between items-center md:gap-0 gap-6 md:text-start text-center'>
                <div className='md:w-1/4'>
                    <div className='flex sm:flex-row flex-col items-center gap-4'>
                        <img src={logo} alt="Logo" className='' />
                        <h3 className='text-3xl'>SAFE NEST</h3>
                    </div>
                    <p className='md:mt-4 mt-6'>Your trusted partner in finding the perfect property. Making dreams come true since 2020.</p>
                </div>

                
                <div>
                    <h4 className='text-xl mb-2'>Quick Links</h4>

                    <ul>
                        <li>About Us</li>
                        <li>Properties</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div>
                    <h4 className='text-xl mb-2'>Services</h4>

                    <ul>
                        <li>Buy Property</li>
                        <li>Sell Property</li>
                        <li>Rent Property</li>
                        <li>Property Management</li>
                    </ul>
                </div>

                <div className='md:w-2/7 w-full'>
                    <h4 className='text-xl mb-2'>Newsletter</h4>

                    <p>Subscribe to get the latest property listings and updates.</p>

                    <form action="" className='mt-4 flex flex-wrap md:justify-baseline justify-between gap-4'>
                        <input type="email" placeholder='Enter your email' className='p-2 focus:outline-none focus:border border-gray-300 rounded-md text-gray-400 max-[767px]:w-full' />
                        <button className='bg-blue-600 p-2 rounded-md max-[767px]:w-full'>Subscribe</button>
                    </form>
                </div>
            </div>

            <p className='text-center mt-4'>© {new Date().getFullYear()} Safe-Nest. All rights reserved.</p>
        </div>
    )
}

export default Footer
