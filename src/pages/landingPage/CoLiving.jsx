import React from 'react'
import imageUrl from "/co-living.png"
import Button from "../../component/Button.jsx"

const CoLiving = () => {
  return (
    <div className='flex md:flex-row flex-col lg:max-h-screen font-[Inter]'>
        <img src={imageUrl} alt="co-living" className='block ' />

        <div className='bg-[#2b5fa9] lg:p-12 md:p-8 p-4 md:text-start text-center text-white flex flex-col gap-3'>
            <h3 className='text-3xl font-semibold text-center'>Co-Living</h3>

            <p className='text-md my-2'>Live Smart. &nbsp; Live Together. &nbsp; Live Better.</p>

            <p>Live in thoughtfully designed shared spaces where comfort meets community. Our co-living homes offer fully furnished rooms, shared amenities, flexible leases, and a vibrant environment that supports both privacy and connection.</p>

            <Button text={"Get Started"} />
        </div>
    </div>
  )
}

export default CoLiving
