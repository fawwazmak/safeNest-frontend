import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import PublicLayout from "./layouts/PublicLayout";
import PrivateRoute from "./component/PrivateRoute";
import PublicRoute from "./component/PublicRoute";  
import DashboardLayout from "./layouts/DashboardLayout";

import LandingPage from "./pages/publicpages/landingPage/LandingPage";
import About from "./pages/publicpages/aboutPage/About";
import Properties from "./pages/publicpages/propertiesPage/Properties";
import LogInPage from "./pages/authentication/LogInPage";
import SignUpPage from "./pages/authentication/signUpPage/SignUpPage";

// dashboard pages
import DashboardHome from "./pages/dashboardPages/dashboard/HomePage";
import PropertiesPage from "./pages/dashboardPages/properties/PropertiesPage";
import RentApplication from "./pages/dashboardPages/rentApplication/RentApplication";
import CheckMail from "./pages/authentication/emailVerification/CheckEmail";

import ForgottenPassword from "./pages/authentication/forgetPassword/ForgottenPassword";
import ResetPassword from "./pages/authentication/forgetPassword/ResetPassword";

function App() {
  return (
    <BrowserRouter>
    {/* React toast replacing alert for better user experience  */}
      <Toaster position="top-right" />
      
      <Routes>
        {/* PUBLIC PAGES */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<Properties />} />

        </Route>

        {/* PUBLIC ROUTES - Login / Signup */}
        <Route element={<PublicRoute />}>
          <Route path="/logIn" element={<LogInPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          {/* <Route path="/check-email" element={<CheckMail />} /> */}


          <Route path="/forgot-password" element={<ForgottenPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>

        {/* DASHBOARD / AUTHENTICATED ROUTES */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="properties" element={<PropertiesPage />} />
            <Route path="rent-application" element={<RentApplication />} />
          </Route>
        </Route>

        {/* 404 */}
        <Route path="*"
          element={
            <h1 className="text-center mt-20 text-3xl font-[Inter]">
              404 - Page Not Found
            </h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
