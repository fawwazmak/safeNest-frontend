import { IoIosArrowForward } from "react-icons/io";

const SearchAlerts = () => {
    const searchAlerts = [
        {
            id: 1,
            title: "2–3 Bed",
            location: "Ikeja",
            priceRange: "₦2,500,000 - ₦4,000,000",
            resultsCount: 12,
            dateUpdated: "today",
        },
        {
            id: 2,
            title: "2–3 Bed",
            location: "Ikeja",
            priceRange: "₦2,500,000 - ₦4,000,000",
            resultsCount: 5,
            dateUpdated: "today",
        },
        {
            id: 3,
            title: "2–3 Bed",
            location: "Ikeja",
            priceRange: "₦2,500,000 - ₦4,000,000",
            resultsCount: 2,
            dateUpdated: "today",
        }
    ];

  return (
    <div  className='bg-white px-4 py-5 rounded-2xl shadow-md font-[Inter] w-full md:w-1/2'>
        <div className="flex items-center justify-between flex-wrap">
            <p className="text-2xl font-semibold">Search Alerts</p>
            <div className="flex items-center text-[#2563EB] cursor-pointer gap-2">
                <button>View all</button>
                <IoIosArrowForward />
            </div>
        </div>

        <div className="flex flex-col gap-4 my-5">
            {searchAlerts.map((alert) => (
                <div key={alert.id} className="flex flex-wrap items-center justify-between border bg-[#E0E7FF] border-blue-500 rounded-xl p-4 gap-6">
                    <div className="max-w-[264px]">
                        <p className="font-medium text-gray-900 text-wrap">
                        {alert.title}, {alert.priceRange}, {alert.location}
                        </p>
                        <p className="text-gray-500 text-sm">
                        updated {alert.dateUpdated}
                        </p>
                    </div>

                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white text-sm font-semibold">
                        {alert.resultsCount}
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default SearchAlerts
