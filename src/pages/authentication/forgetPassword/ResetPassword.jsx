import { useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect  } from "react";
import { toast } from "react-hot-toast";
import { NavLink } from "react-router-dom";
import logo from "/logo.png";
import bg from "/signUpBg.jpg";

const ResetPassword = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const token = searchParams.get("token");
    const [loading, setLoading] = useState(false);  
  
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    useEffect(() => {
        const validateToken = async () => {
            const res = await fetch(`/auth/validate-reset-token?token=${token}`);
            if (!res.ok) {
            toast.error("Invalid or expired reset link.");
            navigate("/login");
            }
        };

        if (token) validateToken();
    }, [token, navigate]);
  
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!token) {
            toast.error("Invalid reset link.");
            navigate("/login");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("/auth/reset-password", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                token,
                password,
            }),
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message || "Reset failed");
                setLoading(false);
                return;
            }

            toast.success("Password updated successfully");
            navigate("/login");

        } catch (error) {
            toast.error("Network error. Try again.");
            setLoading(false);
        }
    };


  return (
    <div>
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
                    <div className="bg-[#1C62BA] text-white md:rounded-r-lg md:w-1/2 w-full md:[clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] pt-7 md:pb-30 pb-8 lg:pl-30 md:pl-18 pl-8 pr-8 md:rounded-none rounded-t-2xl md:translate-y-0 -translate-y-8">
                        <h1 className="text-2xl my-6 font-semibold">Update Password</h1>

                        <form onSubmit={handleSubmit}>
                            <input
                                type="password"
                                placeholder="New password"
                                className="bg-white text-[#23A9F0] p-3 block w-full mb-6 outline-none border-none"
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <input
                                type="password"
                                placeholder="Confirm password"
                                className="bg-white text-[#23A9F0] p-3 block w-full mb-6 outline-none border-none"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />

                            <button type="submit" disabled={loading} className={`bg-[#23A9F0] text-white p-3 w-full ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#1e8bc2]"} transition-all duration-700`}>{loading ? "Updating..." : "Update Password"}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ResetPassword;
