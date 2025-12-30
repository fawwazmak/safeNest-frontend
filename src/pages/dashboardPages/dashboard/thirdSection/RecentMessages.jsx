import { IoIosArrowForward } from "react-icons/io";
import landlordPic from "/profile-pic.png";

const RecentMessages = () => {
  const recentMessages = [
    {
      id: 1,
      name: "Mike Dingo",
      messengerPic: landlordPic,
      message: "Great! I've confirmed your viewing for Thursday at 2 PM.",
      messengerLocation: "Ikeja",
      time: "1 hour ago",
      status: "unread"
    },
    {
      id: 2,
      name: "Mike Dingo",
      messengerPic: landlordPic,
      message: "Great! I've confirmed your viewing for Thursday at 2 PM.",
      messengerLocation: "Ikeja",
      time: "1 hour ago",
      status: "unread"
    },
    {
      id: 3,
      name: "Mike Dingo",
      messengerPic: landlordPic,
      message: "Great! I've confirmed your viewing for Thursday at 2 PM.",
      messengerLocation: "Ikeja",
      time: "1 hour ago",
      status: "read"
    },    
  ];
  return (
    <div  className='bg-white px-4 py-5 rounded-2xl shadow-md font-[Inter] w-full md:w-1/2'>
      <div className="flex items-center justify-between flex-wrap">
        <p className="text-2xl font-semibold">Recent Messages</p>
        <div className="flex items-center text-[#2563EB] cursor-pointer gap-2">
          <button>View all</button>
          <IoIosArrowForward />
        </div>
      </div>

      <div className="flex flex-col gap-4 my-5">
        {recentMessages.map((item) => (
          <div key={item.id} className={`flex justify-between p-3 rounded-lg bg-[#E0E7FF] border border-blue-500 `}>
            <div className="flex items-center gap-4"> 
              <img src={item.messengerPic} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500 text-wrap max-w-[235px]">{item.message}</p>
                <p className="text-sm text-gray-500 font-light">{item.messengerLocation} Apartment</p>
              </div>
            </div>


            <div className="text-right flex sm:flex-row flex-col items-center gap-2 h-fit">
              <p className="text-xs text-gray-400">{item.time}</p>
              {item.status === "unread" && <span className="inline-block mt-1 w-3 h-3 bg-[#2563EB] rounded-full"></span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentMessages
