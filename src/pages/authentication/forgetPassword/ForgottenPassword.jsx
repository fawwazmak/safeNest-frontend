import bg from "/signUpBg.jpg";
import openedMail from "/opened-mail.png";
import logo from "/logo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosClose } from "react-icons/io";

const ForgottenPassword = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        console.log(isSubmitted);
    }


    return (
        <div>
            {isSubmitted ? 
            (
                <div className="text-center p-6 md:w-1/2 w-full h-fit bg-white shadow-2xl rounded-lg mx-auto mt-20 font-[Inter]">
                    <div className="flex justify-end">
                        <IoIosClose className="text-2xl cursor-pointer" onClick={() => setIsSubmitted(false)} />
                    </div>

                    <img src={openedMail} alt="Opened Mail" className="w-48 h-48 mt-4 block mx-auto my-4" />

                    <div className="pb-8 border-b-3 border-gray-300">
                        <h1 className="text-2xl font-bold">Email Confirmation</h1>

                        <p className="mt-4">we have sent email to <span className="text-blue-500">safenest@gmail.com</span> to confirm the validity of your email. after receiving the email follow the link provided to change your password.</p>
                    </div>

                    <p className="my-3">If you did not get any email, <span className="text-blue-500 cursor-pointer">Resend Confirmation</span></p>

                </div>
            ) : 
            (
                <div className="flex justify-center items-center h-screen bg-[url(/signUpBg.jpg)] bg-cover bg-center font-[Inter]">
                    <div className="bg-black/60  shadow-lg w-full h-full flex justify-center items-center">
                        <div className="flex md:flex-row flex-col items-center justify-center h-fit md:px-48 relative md:text-start text-center">
                            
                            {/* LEFT PANEL */}
                            <div className="md:w-1/2 w-full md:relative top-0 left-[8%] md:h-auto h-full flex md:py-0 py-4">
                                <div className="text-white bg-[#262E45F2] w-full md:rounded-l-lg flex flex-col gap-6 p-8 md:[clip-path:polygon(0_0,100%_0,85%_100%,0_100%)]">
                                    <NavLink to="/" className="flex md:justify-start justify-center items-center gap-3 font-bold md:text-xl text-lg">
                                        <img src={logo} alt="Logo" className="h-8" />
                                        <p className="text-white">
                                            SAFE <span className="text-[#2B5FA9]">NEST</span>
                                        </p>
                                    </NavLink>

                                    <h1 className="text-2xl font-semibold">
                                        Sell, Rent, Buy And Lease A Home On Your Own Terms
                                    </h1>
                                    <p className="text-xs">
                                        We have created the smartest way to sell your home by creating the smartest way to pay
                                    </p>
                                    <p className="text-[#0CA6C6] text-xl font-medium">
                                        Find A House, Live Like A King
                                    </p>

                                    <small className="block md:mt-20">
                                        Terms Of Service | Privacy Policy | Contact Us
                                    </small>
                                </div>
                            </div>


                            {/* RIGHT PANEL */}
                            <div className="bg-[#1C62BA] text-white md:rounded-r-lg md:w-1/2 w-full md:[clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] pt-7 md:pb-32 pb-8 lg:pl-30 md:pl-18 pl-8 pr-8 md:rounded-none rounded-t-2xl md:translate-y-0 -translate-y-8">
                                <h1 className="text-2xl my-6 font-semibold">Forgot Password?</h1>

                                <p className="mb-6 font-light">Enter the email address associated with your account</p>

                                <form action="" method="post" onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <input type="email" placeholder="Enter the email address" className="block w-full mb-6 border-b-2 border-white outline-none focus:outline-none focus:border-b-2 bg-transparent" />

                                    <input type="submit" value="Reset Password" className="block text-black bg-white w-full py-2 rounded-lg font-semibold cursor-pointer" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
        </div>
    )
}

export default ForgottenPassword
