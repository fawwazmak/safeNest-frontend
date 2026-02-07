import landlordPic from "/profile-pic.png";
import apartment from "/aprtImg.png";
import { IoShareSocial } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { TbPhotoSquareRounded } from "react-icons/tb";
import { BsCameraVideoFill } from "react-icons/bs";
import { RiSparkling2Fill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { PiShowerLight } from "react-icons/pi";
import { TbSquare } from "react-icons/tb";
import { IoCallOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { GoPeople } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";



const Properties = () => {
  const allProperties = [
      {
          id: 1,
          label: "New Listing",
          labelColor: "#00C951",
          name: "Contemporary Family Home",
          location: "Alagbado",
          rating: 4.8,
          bedNumber: 3,
          bathNumber: 2,
          size: "4,200 sqft",
          landlordpic: landlordPic,
          landlord: "Mike Dingo",
          landlordRating: 4.9,
          paymentType: "Per Month",
          buildingImage: apartment,
          price: "₦10,000"
      },
      {
          id: 2,
          label: "Hot",
          labelColor: "#F54350",
          name: "Contemporary Family Home",
          location: "Alagbado",
          rating: 4.8,
          bedNumber: 3,
          bathNumber: 2,
          size: "4,200 sqft",
          landlordpic: landlordPic,
          landlord: "Mike Dingo",
          landlordRating: 4.9,
          paymentType: "Per Year",
          buildingImage: apartment,
          price: "₦300,000"
      },
      {
          id: 3,
          label: "Premium",
          labelColor: "#DB408A",
          name: "Contemporary Family Home",
          location: "Alagbado",
          rating: 4.8,
          bedNumber: 3,
          bathNumber: 2,
          size: "4,200 sqft",
          landlordpic: landlordPic,
          landlord: "Mike Dingo",
          landlordRating: 4.9,
          paymentType: "Total package",
          buildingImage: apartment,
          price: "₦10,000,000"
      },
      {
          id: 4,
          label: "Hot",
          labelColor: "#F54350",
          name: "Contemporary Family Home",
          location: "Alagbado",
          rating: 4.8,
          bedNumber: 3,
          bathNumber: 2,
          size: "4,200 sqft",
          landlordpic: landlordPic,
          landlord: "Mike Dingo",
          landlordRating: 4.9,
          paymentType: "Total package",
          buildingImage: apartment,
          price: "₦10,000,000"
      }
  ]

  const SavedProperties = [
    {
      id: 1,
      buildingImage: apartment,
      label: "Rented",
      labelColor: "#00C951",
      name: "Skyline Modern Apartment",
      location: "Alagbado",
      bedNumber: 3,
      bathNumber: 3,
      size: "4,200 sqft",
      views: 234,
      applications: 8,
      tenant: "John Smith",
      price: "₦3,200,000"
    },
    {
      id: 2,
      buildingImage: apartment,
      label: "Available",
      labelColor: "#155DFC",
      name: "Skyline Modern Apartment",
      location: "Alagbado",
      bedNumber: 3,
      bathNumber: 3,
      size: "4,200 sqft",
      views: 234,
      applications: 8,
      tenant: "John Smith",
      price: "₦3,200,000"
    }
  ]

  return (
    <div className='font-[Inter]'>
      <div>
        <h1 className='text-3xl'>Properties</h1>
        <p>Access all properties in Nigeria</p>

        <form action="" method="post" className='flex flex-wrap gap-6 shadow-md p-3 my-4'>
          <select defaultValue="" name="location" id="location" className='border p-2'>
            <option value="" disabled>Location</option>
            <option value="lagos">Lagos</option>
            <option value="abuja">Abuja</option>
          </select>

          <select defaultValue="" name="propertyType" id="propertyType" className='border p-2'>
            <option value="" disabled>Property Type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
          </select>

          <select defaultValue="" name="priceRange" id="priceRange" className='border p-2'>
            <option value="" disabled>Price Range</option>
            <option value="0-500000">₦0 - ₦500,000</option>
            <option value="500001-1500000">₦500,001 - ₦1,500,000</option>
          </select>


          <button className="bg-blue-500 text-white px-8 py-2">Search</button>
        </form>

      </div>


      <div className="flex min-[1115px]:flex-row flex-col gap-4 justify-between">
        <div className="grid min-[1115px]:grid-cols-2 gap-4 auto-cols-[80%] overflow-x-auto grid-flow-col min-[1115px]:grid-flow-row min-[1115px]:auto-cols-auto min-[1115px]:overflow-x-hidden">
          {allProperties.map((item) => (
            <div key={item.id} className={`bg-white rounded-lg shadow-md mb-4`} >
              <div className="sm:h-48 h-fit p-4 flex flex-col justify-between mb-4 bg-cover bg-center bg-no-repeat rounded-t-2xl" style={{ backgroundImage: `url(${item.buildingImage})` }}>
                  <div className="flex flex-wrap sm:mb-0 mb-8 justify-between items-start">
                      <p className="text-white py-2 px-4 rounded-3xl" style={{ backgroundColor: item.labelColor }}>{item.label}</p>

                      <div className="flex gap-2 flex-wrap">
                          <IoShareSocial size={35} className="text-black bg-white p-2 rounded-2xl cursor-pointer" />
                          <FaRegHeart size={35} className="text-black bg-white p-2 rounded-2xl cursor-pointer" />
                      </div>
                  </div>

                  <div className="text-white flex flex-wrap items-center justify-between gap-2 font-light text-sm">
                      <div className="flex items-center bg-[#AFAFAF] p-2 rounded-2xl gap-1">
                          <TbPhotoSquareRounded />
                          <p>18</p>
                      </div>

                      <div className="flex items-center bg-[#155DFC] p-2 rounded-2xl gap-1">
                          <BsCameraVideoFill />
                          <p>Virtual Tour</p>
                      </div>

                      <div className="flex items-center bg-[#00C951] p-2 rounded-2xl gap-1">
                          <RiSparkling2Fill />
                          <p>95% Match</p>
                      </div>
                  </div>
              </div>

              <div className="bg-white p-4 rounded-b-3xl">
                  {/* Name and rating */}
                  <div className="flex flex-wrap sm:gap-0 gap-3 justify-between items-center my-2">
                      <p>{item.name}</p>

                      <p className="flex items-center gap-1 "><FaStar className="text-[#F0B100]" size={20} /> {item.rating}</p>
                  </div>

                  {/* Location */}
                  <p className="text-gray-600 text-md mt-2 flex items-center font-light"><CiLocationOn size={20} /> {item.location}</p>

                  <div className="flex flex-wrap sm:gap-0 gap-2 items-center justify-between mt-4 mb-2 border-b pb-4 text-gray-600 font-light">
                    <p className="flex items-center gap-1"><IoBedOutline /> {item.bedNumber} bed</p>

                    <p className="flex items-center gap-1"><PiShowerLight /> {item.bathNumber} bath</p>

                    <p className="flex items-center gap-1"><TbSquare /> {item.size}</p>
                  </div>

                  <div className="flex flex-wrap gap-4 my-3">
                      <p className="py-2 px-5 bg-[#F1F5F9] rounded-2xl">Gym</p>
                      <p className="py-2 px-5 bg-[#F1F5F9] rounded-2xl">Pool</p>
                      <p className="py-2 px-5 bg-[#F1F5F9] rounded-2xl">Parking</p>
                  </div>


                  <div className="mt-4 flex flex-wrap sm:gap-0 gap-2 justify-between items-center border-b pb-2 mb-4">
                      <div className="flex items-center">
                          <img src={item.landlordpic} alt={item.landlord} className="w-12 h-12 rounded-full mr-2" />

                          <div>
                              <p className="font-medium">{item.landlord}</p>
                              <p className="text-gray-500 flex items-center gap-1"><FaStar className="text-[#F0B100] font-light" size={20} /> {item.landlordRating}</p>
                          </div>
                      </div>
                      <div className="flex flex-col">
                          <p className="">{item.paymentType}</p>
                          <p className="text-end text-[#155DFC]">{item.price}</p>
                      </div>
                  </div>

                  {/* Call and schedule viewing button */}
                  <div className="flex sm:flex-row flex-col gap-2 mb-4">
                      <button className="w-full bg-[#F1F5F9] py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer"><IoCallOutline /> Call Now</button>
                      <button className="w-full bg-linear-to-br from-[#3A58FB] via-[#6848FB] to-[#9714FA] text-white py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer px-2">Schedule Tour <FaArrowRight /></button>
                  </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-2">
          <h2 className="text-3xl min-[1115px]:text-start text-center font-light mb-4">Saved Properties</h2>

          <div className="grid md:grid-cols-1 gap-4 ">
            {SavedProperties.map((item) => (
              <div key={item.id} className="border border-blue-500 bg-blue-100 p-3 rounded-xl pb-8">
                <div className="bg-cover bg-center flex justify-end w-full rounded-md p-2 sm:h-40 h-fit mb-4" style={{ backgroundImage: `url(${item.buildingImage})` }}>
                  <p className={`py-3 px-12 rounded-4xl text-white h-fit`} style={{ backgroundColor: `${item.labelColor}` }}>{item.label}</p>
                </div>

                <p className="text-xl">{item.name}</p>

                {/* location */}
                <div className="flex gap-1 items-center font-light mt-3">
                  <CiLocationOn size={20} className="inline-block" /> 
                  <p className="">{item.location}</p>
                </div>

                {/* beds - baths - size */}
                <div className="flex flex-wrap gap-4 font-light text-sm justify-between my-4">
                  <p className="flex items-center gap-1"><IoBedOutline /> {item.bedNumber} bed</p>
                  <p className="flex items-center gap-1"><PiShowerLight /> {item.bathNumber} bath</p>
                  <p className="flex items-center gap-1"><TbSquare /> {item.size}</p>
                </div>

                {/* views - applications - tenant */}
                <div className="text-sm flex items-center justify-between min-[1115px]:gap-4">
                  <div className="flex items-center gap-1">
                    <FiEye />
                    <p className="">{item.views} view{item.views > 1 ? 's' : ''}</p>
                  </div>

                  <div className="flex items-center gap-1">
                    <GoPeople />
                    <p className="">{item.applications} Application{item.applications > 1 ? 's' : ''}</p>
                  </div>

                  <div className="flex items-center gap-1">
                    <p>Tenant</p> 
                    <p className="">{item.tenant}</p>
                  </div>
                </div>

                {/* price - edit - remove */}
                <div className="mt-6 flex flex-wrap items-center justify-between">
                  <p className="text-[#155DFC] font-semibold text-2xl">{item.price}</p>
                  <FaRegEdit className="text-blue-500 cursor-pointer text-3xl" />
                  <RiDeleteBin6Line className="text-red-500 cursor-pointer text-3xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Properties
