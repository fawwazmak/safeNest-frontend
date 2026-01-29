import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "/logo.png";
import { login } from "../../services/authService.js";

const LogInPage = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "tenant", // default role
    rememberMe: false,
  });

  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  // Update form values
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // frontend validation
    if (!loginData.email || !loginData.password || !loginData.role) {
      setServerError("Please fill in all required fields");
      return;
    }

    setServerError("");
    setLoading(true);

    const payload = {
      email: loginData.email,
      password: loginData.password,
      role: loginData.role,
    };

    try {
      const { response, data } = await login(payload);

      if (!response.ok) {
        let message = "Login failed";

        // Backend sends detail array
        if (Array.isArray(data?.detail)) {
          message = data.detail.map((err) => err.msg).join(", ");
        } 
        // Backend sends message string
        else if (data?.message) {
          message = data.message;
        }

        // Customize for account not exist
        if (response.status === 404) {
          message = "Account does not exist";
        } else if (response.status === 401) {
          message = "Invalid email or password";
        }

        setServerError(message);
        return;
      }

      // Save to localStorage/sessionStorage
      if (loginData.rememberMe) {
        localStorage.setItem("user", JSON.stringify(data));
      } else {
        sessionStorage.setItem("user", JSON.stringify(data));
      }

      setServerError("");
      navigate("/dashboard");
    } catch (error) {
      console.error("Network error:", error);
      setServerError("Network error, please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[url(/signUpBg.jpg)] bg-cover bg-center font-[Inter]">
      <div className="bg-black/60 shadow-lg w-full h-full">
        <div className="flex md:flex-row flex-col items-center justify-center h-full md:px-48 relative md:text-start text-center">
          {/* Left Side */}
          <div className="md:w-1/2 w-full md:relative top-0 left-[3%] md:h-auto h-full flex">
            <div className="text-white bg-[#262E45F2] w-full md:rounded-l-lg flex flex-col gap-6 p-8 md:[clip-path:polygon(0_0,100%_0,85%_100%,0_100%)]">
              <NavLink to="/" className="flex md:justify-start justify-center items-center gap-3 font-bold md:text-xl text-lg">
                <img src={logo} alt="Logo" className="h-8" />
                <p className="max-[265px]:hidden text-white">
                  SAFE <span className="text-[#2B5FA9]">NEST</span>
                </p>
              </NavLink>

              <h1 className="text-2xl font-semibold">
                Sell, Rent, Buy And Lease A Home On Your Own Terms
              </h1>
              <p className="text-xs">
                We have created the smartest way to sell your home by creating
                the smartest way to pay
              </p>
              <p className="text-[#0CA6C6] text-xl font-medium">
                Find A House, Live Like A King
              </p>

              <small className="block md:mt-20">
                Terms Of Service | Privacy Policy | Contact Us
              </small>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-[#1C62BA] text-white opacity-100 md:rounded-r-lg md:w-1/2 w-full md:[clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] md:relative top-0 right-[5%] md:h-auto h-full py-8 lg:px-24 md:px-16 px-4">
            <div className="flex mb-8 md:items-center md:justify-baseline justify-between flex-wrap lg:gap-20 md:gap-8">
              <NavLink to="/signUp">
                <p className="underline">Sign up</p>
              </NavLink>

              <h1 className="md:text-3xl text-xl font-semibold">Sign in</h1>
            </div>

            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email Address"
                className="outline-none border-none bg-white text-[#1C62BA] p-3 block w-full"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                required
              />

              <input
                type="password"
                placeholder="Password"
                className="outline-none border-none bg-white text-[#1C62BA] p-3 block w-full"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                required
              />

              {/* Role select */}
              <select
                name="role"
                value={loginData.role}
                onChange={handleChange}
                className="outline-none border-none bg-white text-[#1C62BA] p-3 block w-full"
              >
                <option value="tenant">Tenant</option>
                <option value="landlord">Landlord</option>
              </select>

              {/* Remember Me */}
              <div className="flex items-center gap-2 mt-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={loginData.rememberMe}
                  onChange={handleChange}
                />
                <label htmlFor="rememberMe" className="text-xs">
                  Remember me
                </label>
              </div>

              {/* Server error */}
              {serverError && (
                <p className="text-red-500 text-sm mt-1 bg-white text-center">{serverError}</p>
              )}

              <button
                type="submit"
                className="bg-[#06C3FF] text-white py-2 px-6 block w-full hover:bg-[#05a3cc] hover:rounded-2xl transition-all duration-700"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Log In"}
              </button>
            </form>

            <p className="mt-4 text-xs underline cursor-pointer">Forgot Password</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
