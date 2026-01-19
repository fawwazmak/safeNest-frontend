import React from 'react';
import { NavLink } from 'react-router-dom';

const ThirdStep = ({ step, setStep, signUpData, handleChange, handleSubmit, loading, errors, setErrors, serverError }) => {

    // Go back to previous step
    const handleBack = (e) => {
        e.preventDefault();
        setStep("second");
    };

    // Clear error for a specific field on focus
    const handleFocus = (field) => {
        if (errors[field]) {
            setErrors(prev => {
                const updated = { ...prev };
                delete updated[field];
                return updated;
            });
        }
    };

    return (
        <div className='py-7 lg:px-24 md:px-16 px-4'>
            <div className='flex mb-8 md:items-center md:justify-baseline justify-between flex-wrap lg:gap-20 md:gap-8'>
                <h1 className='md:text-3xl text-xl font-semibold'>Sign up</h1>
                <NavLink to="/logIn"><p className='underline'>Sign in</p></NavLink>
            </div>

            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                
                {/* Gender */}
                <select
                    name='gender'
                    value={signUpData.gender}
                    onChange={handleChange}
                    onFocus={() => handleFocus('gender')}
                    className='outline-none border-none bg-white text-[#1C62BA] p-3 block w-full'
                >
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                {errors.gender && <p className='text-red-500 text-sm'>{errors.gender}</p>}

                {/* Role */}
                <select
                    name='role'
                    value={signUpData.role}
                    onChange={handleChange}
                    onFocus={() => handleFocus('role')}
                    className='outline-none border-none bg-white text-[#1C62BA] p-3 block w-full'
                >
                    <option value="">Role</option>
                    <option value="tenant">Tenant</option>
                    <option value="landlord">Landlord</option>
                </select>
                {errors.role && <p className='text-red-500 text-sm'>{errors.role}</p>}

                {/* Marital Status */}
                <select name="marital_status" value={signUpData.marital_status} onChange={handleChange} onFocus={() => handleFocus('marital_status')} className="outline-none border-none bg-white text-[#1C62BA] p-3 block w-full">
                    <option value="">Marital Status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                </select>
                {errors.marital_status && <p className='text-red-500 text-sm'>{errors.marital_status}</p>}

                {/* Password */}
                <input
                    type="password"
                    placeholder='Password'
                    name='password'
                    value={signUpData.password}
                    onChange={handleChange}
                    onFocus={() => handleFocus('password')}
                    className='outline-none border-none bg-white text-[#1C62BA] p-3 block w-full'
                />
                {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}

                {/* Confirm Password */}
                <input
                    type="password"
                    placeholder='Confirm Password'
                    name='confirm_password'
                    value={signUpData.confirm_password || ""}
                    onChange={handleChange}
                    onFocus={() => handleFocus('confirm_password')}
                    className='outline-none border-none bg-white text-[#1C62BA] p-3 block w-full'
                />
                {errors.confirm_password && <p className='text-red-500 text-sm'>{errors.confirm_password}</p>}
                
                {/* Back link */}
                <p className='underline cursor-pointer' onClick={handleBack}>Back</p>

                {/* Terms */}
                <div className='flex items-center gap-2'>
                    <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        checked={signUpData.terms}
                        onChange={handleChange}
                        onFocus={() => handleFocus('terms')}
                    />

                    <label htmlFor="terms" className='text-xs'>
                        I agree to <span className='font-bold'>SafeNest</span> Terms & Conditions and Privacy Policy
                    </label>
                </div>
                {errors.terms && <p className='text-red-500 text-sm'>{errors.terms}</p>}



                {serverError && (<div className="bg-red-100 text-red-700 p-3 rounded text-sm">{serverError}</div>)}

                {/* Submit button */}
                <button type='submit' className='bg-[#06C3FF] text-white py-4 px-6 block w-full cursor-pointer' disabled={loading}>
                    {loading ? "Signing up..." : "Sign Up"}
                </button>
            </form>
        </div>
    );
};

export default ThirdStep;
