import landlordPic from "/profile-pic.png";
import { IoIosArrowForward } from "react-icons/io";
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



const Recommended = () => {
    const recommended = [
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
        }
    ]
  return (
    <div className='md:px-6 px-4 py-4 font-[Inter] bg-[#f9fafb]'>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
            <h2 className="text-2xl">Recommended For You</h2>
            <p className="font-light">You Have 3 Upcoming Viewings And 2 New Property Matches</p>
        </div>

        <div className="flex items-center text-[#2563EB] cursor-pointer gap-2">
            <button>View all</button>
            <IoIosArrowForward />
        </div>

      </div>

        <div className="my-4 pb-4 gap-4 grid grid-flow-col auto-cols-[85%] overflow-x-auto md:grid-flow-row md:auto-cols-auto md:grid-cols-3 md:overflow-x-hidden">
            {recommended.map((item) => (
                <div key={item.id} className={`bg-white rounded-lg shadow-md mb-4`} >
                    <div className="h-48 p-4 flex flex-col justify-between mb-4 bg-cover bg-center bg-no-repeat rounded-t-2xl" style={{ backgroundImage: `url(${item.buildingImage})` }}>
                        <div className="flex justify-between items-start">
                            <p className="text-white py-2 px-4 rounded-3xl" style={{ backgroundColor: item.labelColor }}>{item.label}</p>

                            <div className="flex gap-2 flex-wrap">
                                <IoShareSocial size={35} className="text-black bg-white p-2 rounded-2xl cursor-pointer" />
                                <FaRegHeart size={35} className="text-black bg-white p-2 rounded-2xl cursor-pointer" />
                            </div>
                        </div>

                        <div className="text-white flex items-center justify-between gap-2 font-light text-sm">
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
                        <div className="flex justify-between items-center my-2">
                            <p>{item.name}</p>

                            <p className="flex items-center gap-1 "><FaStar className="text-[#F0B100]" size={20} /> {item.rating}</p>
                        </div>

                        {/* Location */}
                        <p className="text-gray-600 text-md mt-2 flex items-center font-light"><CiLocationOn size={20} /> {item.location}</p>

                        <div className="flex items-center justify-between mt-4 mb-2  border-b pb-2 text-gray-600 font-light">
                            <p className="flex items-center gap-1"><IoBedOutline /> {item.bedNumber} bed</p>

                            <p className="flex items-center gap-1"><PiShowerLight /> {item.bathNumber} bath</p>

                            <p className="flex items-center gap-1"><TbSquare /> {item.size}</p>
                        </div>

                        <div className="flex gap-4 my-3">
                            <p className="py-2 px-5 bg-[#F1F5F9] rounded-2xl">Gym</p>
                            <p className="py-2 px-5 bg-[#F1F5F9] rounded-2xl">Pool</p>
                            <p className="py-2 px-5 bg-[#F1F5F9] rounded-2xl">Parking</p>
                        </div>


                        <div className="mt-4 flex justify-between items-center border-b pb-2 mb-4">
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
                        <div className="flex gap-2 mb-4">
                            <button className="w-full bg-[#F1F5F9] py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer"><IoCallOutline /> Call Now</button>
                            <button className="w-full bg-linear-to-br from-[#3A58FB] via-[#6848FB] to-[#9714FA] text-white py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer">Schedule Tour <FaArrowRight /></button>
                        </div>
                    </div>
                </div>
            ))} 

        </div>
    </div>
  )
}

export default Recommended
