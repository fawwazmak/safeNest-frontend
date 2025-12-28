import React from 'react'
import heroImage from "/landing-hero.png"
import Button from '../../../component/Button.jsx'
import searchIcon from "/search.png"

const HeroSection = () => {
  return (
    <div className={`bg-[url(/landing-hero.png)] bg-cover bg-center max-[768px]:min-h-screen w-full font-[Inter] text-white md:px-16 sm:px-8 px-4 lg:py-28 md:py-20 sm:py-14 py-10 `}>
        <h1 className='font-medium md:text-start text-center lg:text-5xl md:text-4xl sm:text-3xl text-2xl md:w-3/4'>Unlocking seamless renting independence for tenants across Nigeria</h1>

        <p className='my-4 md:text-start text-center'>We ‘re creating the freedom to move and the power to choose total freedom</p>

        <form action="" method="post" className='bg-white p-8 rounded-xl flex flex-col gap-6 mt-8'>
            <ul className='flex sm:flex-row flex-col sm:text-start text-center gap-4 text-black pt-4 px-3 border-b-2 border-b-gray-300 mb-4'>
                <li className='border-b-[#2563EB] border-b-3 px-2 pb-4 text-[#2563EB]'>Rent</li>
                <li className='px-2 pb-4'>Co-Living</li>
                <li className='px-2 pb-4'>Short Lets</li>
            </ul>

            <div className='flex md:flex-row flex-col justify-between items-center gap-4 sm:border-none border-b-2 border-b-gray-300'>
                <div className='flex bg-[#F8F8F8] gap-5 items-center sm:p-4 p-2 rounded-md w-full h-full'>
                    <img src={searchIcon} alt="Search Icon" className='sm:inline hidden' />
                    <input type="text" className='text-black flex-1 border-none outline-none max-[640px]:w-full' placeholder='Search for rent' required />
                </div>

                <Button text="Search" />
            </div>

            <div className='flex md:flex-row flex-col text-black gap-4 items-center mt-4 md:w-4/6 mx-auto'>
                <p className=''>Filter By:</p>

                <div className='flex md:flex-row flex-col md:gap-12 gap-4 justify-between flex-1 items-center'>
                    <select className='border-none outline-none w-full' name="location" id="location" required defaultValue="">
                        <option value="" disabled hidden>Location</option>
                        <option value="lagos">Lagos</option>
                    </select>

                    <select className='border-none outline-none w-full' name="type" id="type" required defaultValue="">
                        <option value="" disabled hidden>Type</option>
                        <option value="apartment">Apartment</option>
                    </select>

                    <select className='border-none outline-none w-full' name="minPrice" id="minPrice" required defaultValue="">
                        <option value="" disabled hidden>Min. Price</option>
                        <option value="2000">2000</option>
                    </select>

                    <select className='border-none outline-none w-full' name="maxPrice" id="maxPrice" required defaultValue="">
                        <option value="" disabled hidden>Max. Price</option>
                        <option value="5000">5000</option>
                    </select>
                </div>
            </div>

            <Button text="Get Started" />
        </form>
    </div>
  )
}

export default HeroSection
