import React from 'react'
import keyIcon from "/key-icon.png"
import propertyIcon from "/property-icon.png"
import investMentIcon from "/investment.png"
import legalIcon from "/legal-icon.png"
import propertyValue from "/property-icon.png"
import management from "/mg-icon.png"

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Property Rentals",
            desc: "Find the perfect rental property or tenant with our comprehensive rental management services.",
            icon: keyIcon
        },
        {
            id: 2,
            title: "Property Sales",
            desc: "Expert assistance in buying and selling residential and commercial properties with maximum value.",
            icon: propertyIcon
        },
        {
            id: 3,
            title: "Investment Consulting",
            desc: "Strategic advice on real estate investments to maximize your returns and portfolio growth.",
            icon: investMentIcon
        },
        {
            id: 4,
            title: "Legal Support",
            desc: "Complete legal assistance for property transactions, documentation, and compliance.",
            icon: legalIcon
        },
        {
            id: 5,
            title: "Property Valuation",
            desc: "Accurate property assessments and market analysis to determine fair market value.",
            icon: propertyValue
        },
        {
            id: 6,
            title: "Property Management",
            desc: "Full-service property management including maintenance, tenant relations, and rent collection.",
            icon: management
        }
    ]
  return (
    <div className='p-6 bg-white font-[Inter]'>
      <h2 className='text-center md:text-3xl font-bold'>Our Services</h2>

      <p className='text-center mb-6'>Comprehensive real estate solutions tailored to your needs</p>

        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 p-3'>
            {services.map(service => (
                <div key={service.id} className='p-5 rounded-xl bg-[#f9fafb] shadow-md md:text-start text-center'>
                    <div className='bg-[#DBEAFE] p-3 rounded-full w-fit flex items-center justify-center mb-4 md:mx-0 mx-auto'>
                        <img src={service.icon} alt={service.title} className='block h-6 w-6' />
                    </div>
                    <h3 className='font-semibold mb-2 text-xl'>{service.title}</h3>
                    <p>{service.desc}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services
