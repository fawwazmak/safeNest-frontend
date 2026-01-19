import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import LandingPage from "./pages/publicpages/landingPage/LandingPage";
import About from "./pages/publicpages/aboutPage/About";
import Properties from "./pages/publicpages/propertiesPage/Properties";
import LogInPage from "./pages/publicpages/LogInPage";
import SignUpPage from "./pages/publicpages/signUpPage/SignUpPage";

// dashboard pages
import DashboardHome from "./pages/dashboardPages/dashboard/HomePage";
// import Profile from "./pages/dashboard/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC ROUTES */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<Properties />} />
        </Route>


        <Route path="/logIn" element={<LogInPage />} />
        <Route path="/signUp" element={<SignUpPage />} />

        {/* DASHBOARD / AUTHENTICATED ROUTES */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          {/* <Route path="profile" element={<Profile />} /> */}
        </Route>

        {/* 404 */}
        <Route path="*" element={<h1 className="text-center mt-20 text-3xl font-[Inter]">404 - Page Not Found</h1>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
