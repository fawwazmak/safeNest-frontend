import React, {useState} from 'react'
import bg from '/signUpBg.jpg'
import logo from "/logo.png"
import FirstStep from './firstStep.jsx'
import SecondStep from './SecondStep.jsx'
import ThirdStep from './ThirdStep.jsx'

const SignUpPage = () => {
    const [step, setStep] = useState("first");
  return (
    <div className='flex justify-center items-center h-screen bg-[url(/signUpBg.jpg)] bg-cover bg-center font-[Inter]'>
        <div className="bg-black opacity-75 shadow-lg w-full h-full">
            <div className='flex md:flex-row flex-col items-center justify-center h-full md:px-48 relative md:text-start text-center'>
                <div className='md:w-1/2 w-full md:relative top-0 left-[5%] md:h-auto h-full flex'>
                    <div className='text-white bg-[#262E45F2] w-full md:rounded-l-lg flex flex-col gap-6 p-8  md:[clip-path:polygon(0_0,100%_0,85%_100%,0_100%)]'>
                        <div className="flex md:justify-start justify-center items-center gap-3 font-bold md:text-xl text-lg">
                            <img src={logo} alt="Logo" className='h-8' />
                            <p className='max-[265px]:hidden text-white'>SAFE <span className='text-[#2B5FA9]'>NEST</span></p>
                        </div>

                        <h1 className='text-2xl font-semibold'>Rent / Lease A Home On Your Own Terms</h1>
                        <p className='text-xs'>Find affordable homes, flexible rent payments, and trusted landlords all in one place</p>
                        <p className='text-[#0CA6C6] text-xl font-medium'>Find A House, Live Like A King</p>


                        <small className='block md:mt-20'>Terms Of Service | Privacy Policy | Contact Us</small>
                    </div>
                </div>


                <div className='bg-[#1C62BA] text-white opacity-100 md:rounded-r-lg  md:w-1/2 w-full md:[clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] md:relative top-0 right-[5%] md:h-auto h-full'>
                    {step === "first" &&
                        <FirstStep step={step} setStep={setStep} />
                    }

                    {step === "second" && 
                        <SecondStep step={step} setStep={setStep} />
                    }

                    {step === "third" &&
                        <ThirdStep step={step} setStep={setStep} />
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUpPage
