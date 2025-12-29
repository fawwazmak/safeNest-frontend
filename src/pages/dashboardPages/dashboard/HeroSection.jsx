import { GiTakeMyMoney } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa6";
import { IoCalendarClearOutline } from "react-icons/io5";
import { TiDocument } from "react-icons/ti";
import { FaRegMessage } from "react-icons/fa6";


const HeroSection = () => {
  const items = [
    { 
      icon: FaRegHeart, 
      label: "Saved Properties",
      number: 24,
      bgColor: "#1B68FE",
      notice: "+3 this week"
    },
    { 
      icon: GiTakeMyMoney, 
      label: "Make a Payment",
      number: 12,
      bgColor: "#A63AFF",
      notice: "up to date"
    },
    { 
      icon: IoCalendarClearOutline, 
      label: "Viewings Calendar",
      number: 3,
      bgColor: "#F54350",
      notice: "tomorrow 2pm"
    },
    { 
      icon: TiDocument, 
      label: "Applications",
      number: 3,
      bgColor: "#00B45C",
      notice: "1 approved"
    },
    { 
      icon: FaRegMessage, 
      label: "Messages",
      number: 2,
      bgColor: "#AFAFAF",
      notice: "from landlord"
    },
  ]
  return (
    <div className='md:px-6 px-4 py-4 font-[Inter] bg-[#f9fafb]'>
      <h1 className="text-3xl font-medium mt-5">Welcome Mike!</h1>

      <p className="font-light">You Have 3 Upcoming Viewings And 2 New Property Matches</p>
      {/* grid grid-flow-col auto-cols-[85%] overflow-x-auto md:grid-flow-row md:auto-cols-auto md:grid-cols-3 md:overflow-x-hidden */}
      <div className="grid grid-flow-col auto-cols-[80%] overflow-x-auto md:grid-flow-col md:auto-cols-auto md:overflow-x-hidden md:grid-cols-5 sm:grid-cols-2 gap-6 mt-6">
        {items.map((item, index) => (
          <div key={index} className={`text-white shadow-md rounded-xl p-6 flex flex-col sm:text-start text-center`} style={{ backgroundColor: item.bgColor }}>
            <item.icon size={40} className="mb-2 bg-transparent p-2 shadow-lg rounded-md sm:mx-0 mx-auto" />
            <p className="text-sm mt-4">{item.label}</p>
            <p className="text-xl font-bold">{item.number}</p>
            <p className="text-xs mt-2">{item.notice}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeroSection
