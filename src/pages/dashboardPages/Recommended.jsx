import { IoIosArrowForward } from "react-icons/io";


const Recommended = () => {
    const recommended = [
        {
            id: 1,
            label: "New Listing",
            name: "Contemporary Family Home",
            location: "Alagbado",
            rating: 4.8,
            bedNumber: 3,
            bathNumber: 2,
            size: "4,200 sqft",
            landlordpic: "",
            landlord: "Mike Dingo",
            landlordRating: 4.9,
            paymentType: "Per Month",
            price: "₦10,000"
        },
        {
            id: 2,
            label: "Hot",
            name: "Contemporary Family Home",
            location: "Alagbado",
            rating: 4.8,
            bedNumber: 3,
            bathNumber: 2,
            size: "4,200 sqft",
            landlordpic: "",
            landlord: "Mike Dingo",
            landlordRating: 4.9,
            paymentType: "Per Year",
            price: "₦300,000"
        },
        {
            id: 3,
            label: "Premium",
            name: "Contemporary Family Home",
            location: "Alagbado",
            rating: 4.8,
            bedNumber: 3,
            bathNumber: 2,
            size: "4,200 sqft",
            landlordpic: "",
            landlord: "Mike Dingo",
            landlordRating: 4.9,
            paymentType: "Total package",
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

        <div className="grid md:grid-cols-3 sm:grid-cols-2">
            {recommended.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md p-4 mb-4">
                    <div className="flex justify-between items-center">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">{item.label}</span>
                        <span className="text-sm font-medium">{item.name}</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">{item.location}</p>
                    <div className="flex items-center mt-2">
                        <span className="text-gray-700 mr-2">{item.rating}</span>
                        <span className="text-gray-500 text-sm">({item.bedNumber} bed, {item.bathNumber} bath)</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-2">{item.size}</p>
                    <div className="mt-4 flex justify-between items-center">
                        <div className="flex items-center">
                            <img src={item.landlordpic} alt={item.landlord} className="w-8 h-8 rounded-full mr-2" />
                            <div>
                                <p className="font-medium">{item.landlord}</p>
                                <p className="text-xs text-gray-500">Landlord Rating: {item.landlordRating}</p>
                            </div>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
                            {item.paymentType}
                        </button>
                    </div>
                </div>
            ))} 

        </div>
    </div>
  )
}

export default Recommended
