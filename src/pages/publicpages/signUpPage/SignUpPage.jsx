import React, { useState } from "react";
import bg from "/signUpBg.jpg";
import logo from "/logo.png";
import FirstStep from "./FirstStep.jsx";
import SecondStep from "./SecondStep.jsx";
import ThirdStep from "./ThirdStep.jsx";
import { signup } from "../../../services/authService.js";

const SignUpPage = () => {
    const [step, setStep] = useState("first");

    const [signUpData, setSignUpData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
        confirm_password: "",
        marital_status: "",
        gender: "",
        occupation: "",
        role: "",
        terms: false,
    });

    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState("");
    const [loading, setLoading] = useState(false); 
    
    // Handle Input Change
    function handleChange(e) {
        const { name, value, type, checked } = e.target;

        setSignUpData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    // Handle Submit 
    async function handleSubmit(e) {
        e.preventDefault();
        setServerError("");

        const newErrors = {};

        if (!signUpData.first_name.trim())
            newErrors.first_name = "First name required";

        if (!signUpData.last_name.trim())
            newErrors.last_name = "Last name required";

        if (!signUpData.email.trim())
            newErrors.email = "Email required";
        else if (!/\S+@\S+\.\S+/.test(signUpData.email))
            newErrors.email = "Invalid email";

        if (!signUpData.phone.trim())
            newErrors.phone = "Phone required";

        if (!signUpData.password)
            newErrors.password = "Password required";
        else if (signUpData.password.length < 6)
            newErrors.password = "Password must be at least 6 characters";

        if (!signUpData.confirm_password)
            newErrors.confirm_password = "Confirm your password";
        else if (signUpData.password !== signUpData.confirm_password)
            newErrors.confirm_password = "Passwords do not match";

        if (!signUpData.gender)
            newErrors.gender = "Select gender";

        if (!signUpData.marital_status)
            newErrors.marital_status = "Select marital status";

        if (!signUpData.role)
            newErrors.role = "Select role";

        if (!signUpData.terms)
            newErrors.terms = "You must accept terms";

        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;

        setLoading(true);

        /* ✅ ONLY BACKEND-EXPECTED FIELDS */
        const payload = {
            first_name: signUpData.first_name,
            last_name: signUpData.last_name,
            email: signUpData.email,
            phone: signUpData.phone,
            password: signUpData.password,
            marital_status: signUpData.marital_status,
            gender: signUpData.gender,
            occupation: signUpData.occupation,
            role: signUpData.role,
            terms: signUpData.terms,
        };

        try {
            const { response, data } = await signup(payload);

            if (!response.ok) {
                let message = "Signup failed";

                if (Array.isArray(data?.detail)) {
                    message = data.detail.map((err) => err.msg).join(", ");
                } else if (typeof data?.detail === "string") {
                    message = data.detail;
                } else if (data?.message) {
                    message = data.message;
                }

                if (response.status === 409) {
                    message = "Account already exists";
                }

                setServerError(message);
                return;
            }

            console.log("Signup success:", data);
            setServerError("");
            // 👉 redirect user here if needed

        } catch (error) {
            console.error("Network error:", error);
            setServerError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex justify-center items-center h-screen bg-[url(/signUpBg.jpg)] bg-cover bg-center font-[Inter]">
            <div className="bg-black opacity-75 shadow-lg w-full h-full">
                <div className="flex md:flex-row flex-col items-center justify-center h-full md:px-48 relative md:text-start text-center">
                    
                    {/* LEFT PANEL */}
                    <div className="md:w-1/2 w-full md:relative top-0 left-[8%] md:h-auto h-full flex">
                        <div className="text-white bg-[#262E45F2] w-full md:rounded-l-lg flex flex-col gap-6 p-8 md:[clip-path:polygon(0_0,100%_0,85%_100%,0_100%)]">
                            <div className="flex md:justify-start justify-center items-center gap-3 font-bold md:text-xl text-lg">
                                <img src={logo} alt="Logo" className="h-8" />
                                <p className="text-white">
                                    SAFE <span className="text-[#2B5FA9]">NEST</span>
                                </p>
                            </div>

                            <h1 className="text-2xl font-semibold">
                                Rent / Lease A Home On Your Own Terms
                            </h1>
                            <p className="text-xs">
                                Find affordable homes, flexible rent payments, and trusted landlords all in one place
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
                    <div className="bg-[#1C62BA] text-white md:rounded-r-lg md:w-1/2 w-full md:[clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)]">
                        {step === "first" && (
                            <FirstStep
                                step={step}
                                setStep={setStep}
                                signUpData={signUpData}
                                handleChange={handleChange}
                            />
                        )}

                        {step === "second" && (
                            <SecondStep
                                step={step}
                                setStep={setStep}
                                signUpData={signUpData}
                                handleChange={handleChange}
                                errors={errors}
                                setErrors={setErrors}
                            />
                        )}

                        {step === "third" && (
                            <ThirdStep
                                step={step}
                                setStep={setStep}
                                signUpData={signUpData}
                                handleChange={handleChange}
                                handleSubmit={handleSubmit}
                                loading={loading}
                                errors={errors}
                                setErrors={setErrors}
                                serverError={serverError}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
