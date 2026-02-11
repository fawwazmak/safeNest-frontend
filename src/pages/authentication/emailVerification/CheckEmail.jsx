import { MdOutlineMail } from "react-icons/md";


const CheckEmail = () => {
  return (
    <div className="bg-[#f9fafb] w-full h-screen flex items-center justify-center font-[Inter]">
        <div className="bg-white text-center shadow-2xl relative rounded-lg md:w-1/2 md:h-fit h-full w-full md:p-10 sm:p-6 p-4">
            <MdOutlineMail className="bg-blue-700 h-24 w-24 rounded-full p-4 text-white absolute left-1/2 -translate-x-1/2 -top-12" />

            <h1 className="text-3xl font-bold my-4">Verify Email!</h1>

            <p>We sent you a verification link via link. Please click it to verify your email address. if you don't see it, please wait up to 5mins or check  your spam folder.</p>

            <button className="bg-blue-700 text-white w-full py-2 text-xl my-4 rounded-lg cursor-pointer hover:bg-blue-800 hover:shadow-lg transition duration-300">Open email</button>

            <h1 className="text-3xl font-bold mb-4">01 : 20</h1>

            <p className="text-blue-500 font-bold cursor-pointer hover:text-blue-700 transition-all duration-300">Resend email verification</p>
        </div>
    </div>
  )
}

export default CheckEmail
