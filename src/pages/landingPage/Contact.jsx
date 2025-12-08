import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";


const Contact = () => {
  return (
    <div className='bg-linear-to-r  from-[#2563EB] gap-4 to-[#1E40AF] md:p-16 sm:p-8 p-4 flex md:flex-row flex-col font-[Inter]'>
      <div className='text-white md:w-1/2'>
        <h2 className='text-3xl md:text-start text-center'>Get in Touch</h2>

        <p className='sm:text-start text-center mt-4'>Ready to find your dream property? Contact us today and let our experts guide you through your real estate journey.</p>

        <div className='flex sm:flex-row flex-col items-center gap-3 mt-4'>
          <div className='bg-[#0c8ce9] p-2 rounded-full'>
            <FaPhoneAlt size={18} className='' />
          </div>

          <div className='sm:text-start text-center'>
            <p>Phone</p>
            <small>+1 (555) 123-4567</small>
          </div>
        </div>

        <div className='flex sm:flex-row flex-col items-center gap-3 mt-4'>
          <div className='bg-[#0c8ce9] p-2 rounded-full'>
            <MdOutlineEmail size={18} className='' />
          </div>

          <div className='sm:text-start text-center'>
            <p>Email</p>
            <small>info@estatehub.com</small>
          </div>
        </div>
        
        <div className='flex sm:flex-row flex-col items-center gap-3 mt-4'>
          <div className='bg-[#0c8ce9] p-2 rounded-full'>
            <IoLocationOutline size={18} className='' />
          </div>

          <div className='sm:text-start text-center'>
            <p>Address</p>
            <small>123 Real Estate Ave, Suite 100 New York, NY 10001</small>
          </div>
        </div>
      </div>

      <form action="" className='bg-white rounded-xl p-4 md:w-1/2'>
        <input className='block w-full border border-gray-300 mb-4 p-2 focus:border-gray-300 focus:outline-none rounded-md' id='name' name='name' placeholder='Your Name' type="text" />
        <input className='block w-full border border-gray-300 mb-4 p-2 focus:border-gray-300 focus:outline-none rounded-md' id='email' name='email' placeholder='Your Email' type="email" />
        <input className='block w-full border border-gray-300 mb-4 p-2 focus:border-gray-300 focus:outline-none rounded-md' id='contact' name='contact' placeholder='Phone Number' type="text" />

        <select name="interest" id="interest" className='block w-full my-4 p-2'>
          <option value="" disabled selected>I'm interested in...</option>
          <option value="buying">Buying a Property</option>
        </select>

        <textarea name="" id="" className='block w-full p-3 my-6 border border-gray-300 rounded-md focus:border-gray-300 focus:outline-none' rows="10" placeholder='Your Message'></textarea>
        <button className='block bg-[#111827] w-full text-white py-3 rounded-lg mt-2'>Send Message</button>
      </form>
    </div>
  )
}

export default Contact
