import React from 'react'
import property from "/property-1.png"
import { CiLocationOn } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { PiShowerLight } from "react-icons/pi";
import { TbSquare } from "react-icons/tb";




const AvailableProperties = () => {

  const properties = [
    {
      id: 1,
      imageUrl: property,
      altText: 'Villa with Pool',
      description: 'Modernn villa with Pool',
      location: 'beverly hills,cA',
      bedrooms: '3 bed',
      bathrooms: '3 baths',
      area: '4,200 sqft',
      price: '#2,400,000',
    },
    {
      id: 2,
      imageUrl: property,
      altText: 'luxury down town apartment',
      description: 'luxury down town appartment',
      location: 'manhattan, NY',
      bedrooms: '3 bed',
      bathrooms: '3 baths',
      area: '4,200 sqft',
      price: '#2,400,000',
    },
    {
      id: 3,
      imageUrl: property,
      altText: 'Contemporary Family Home',
      description: 'Contemporary Family Home',
      location: 'Austin, TX',
      bedrooms: '3 bed',
      bathrooms: '3 baths',
      area: '4,200 sqft',
      price: '#2,400,000',
    },
    {
      id: 4,
      imageUrl: property,
      altText: 'Beachfront Paradise',
      description: 'Beachfront Paradise',
      location: 'Miami, FL',
      bedrooms: '3 bed',
      bathrooms: '3 baths',
      area: '4,200 sqft',
      price: '#2,400,000',
    },
  ]
  return (
    <div className='md:py-12 sm:py-8 py-4 lg:px-16 md:px-12 sm:px-8 mx-4 font-[Inter] bg-[#f8fafc]'>
      <h2  className='text-center text-3xl font-normal'>Available Properties</h2>

      <p className='text-center md:w-1/2 mx-auto my-4'>Explore our hand-picked selection of premium properties available for sale. Each property has been carefully selected to meet our high standards.</p>

      <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4'>
        {properties.map((property) => (
          <div key={property.id} className='h-full bg-white rounded-lg shadow-md overflow-hidden'>
            <img src={property.imageUrl} alt={property.altText} className='w-full' />

            <div className='p-4'>
              <p className='text-[18px]'>{property.description}</p>


              <div className='flex flex-col gap-16 mt-2'>
                <p><CiLocationOn className='inline text-xl' /> <span className='font-extralight'>{property.location}</span></p>

                <div className='flex md:flex-row flex-col md:justify-between justify-baseline md:items-center items-start font-extralight border-b border-gray-300 pb-4 mb-4'>
                  <p><IoBedOutline className='inline' /> <span> {property.bedrooms}</span></p>
                  <p><PiShowerLight className='inline' /> <span>{property.bathrooms}</span></p>
                  <p><TbSquare className='inline' /> <span>{property.area}</span></p>
                </div>
              </div>

              <div className='flex md:flex-row flex-col md:gap-0 gap-4 md:justify-between justify-baseline items-center text-[#155DFC]'>
                <p className='text-'>{property.price}</p>

                <button className='border border-[#155DFC] px-4 py-2 rounded-3xl font-semibold cursor-pointer transition-colors duration-700 hover:bg-[#155DFC] hover:text-white'>View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className='border border-[#155DFC] text-[#155DFC] block mx-auto my-4 px-8 py-4 rounded-3xl font-semibold cursor-pointer transition-colors duration-700 hover:bg-[#155DFC] hover:text-white'>View All Properties</button>
    </div>
  )
}

export default AvailableProperties
