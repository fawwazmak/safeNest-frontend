import React from 'react'
import { NavLink } from 'react-router-dom';

const SecondStep = ({ step, setStep, signUpData, handleChange, errors, setErrors }) => {

    function handleNext(e) {
        e.preventDefault();

        const newErrors = {};
        if (!signUpData.first_name.trim()) newErrors.first_name = "First name is required";
        if (!signUpData.last_name.trim()) newErrors.last_name = "Last name is required";
        if (!signUpData.phone.trim()) newErrors.phone = "Phone number is required";
        if (!signUpData.email.trim()) newErrors.email = "Email is required";
        if (signUpData.email && !/\S+@\S+\.\S+/.test(signUpData.email)) {
            newErrors.email = "Invalid email address";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        setStep("third");
    }

    // Clear error for a specific field on focus
    const handleFocus = (field) => {
        if (errors[field]) {
            setErrors(prev => {
                const updated = { ...prev };
                delete updated[field];
                return updated;
            });
        }
    }

    return (
        <div className='py-5 lg:px-24 md:px-16 px-4 '>
            <div className='flex mb-8 md:items-center md:justify-baseline justify-between flex-wrap lg:gap-20 md:gap-8'>
                <h1 className='md:text-3xl text-xl font-semibold'>Sign up</h1> 
                <NavLink to="/logIn"><p className='underline'>Sign in</p></NavLink>
            </div>

            <form className='flex flex-col gap-2'>
                <input 
                    type="text" 
                    placeholder='First Name' 
                    name='first_name'
                    value={signUpData.first_name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('first_name')}
                    className='outline-none border-none bg-white text-[#1C62BA] p-3 block w-full'
                />
                {errors.first_name && <p className='text-red-500 text-sm'>{errors.first_name}</p>}

                <input 
                    type="text" 
                    placeholder='Last Name' 
                    name='last_name'
                    value={signUpData.last_name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('last_name')}
                    className='outline-none border-none bg-white text-[#1C62BA] p-3 block w-full'
                />
                {errors.last_name && <p className='text-red-500 text-sm'>{errors.last_name}</p>}

                <input 
                    type="text" 
                    placeholder='Phone Number' 
                    name='phone'
                    value={signUpData.phone}
                    onChange={handleChange}
                    onFocus={() => handleFocus('phone')}
                    className='outline-none border-none bg-white text-[#1C62BA] p-3 block w-full'
                />
                {errors.phone && <p className='text-red-500 text-sm'>{errors.phone}</p>}

                <input 
                    type="email" 
                    placeholder='Email Address' 
                    name='email'
                    value={signUpData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    className='outline-none border-none bg-white text-[#1C62BA] p-3 block w-full'
                />
                {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}

                <div className='mt-4 flex justify-end'>
                    <button className='bg-[#06C3FF] text-white py-4 px-6 block' onClick={handleNext}>Next</button>
                </div>
            </form>
        </div>
    )
}

export default SecondStep
