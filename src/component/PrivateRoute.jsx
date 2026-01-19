import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// Checks if a user is logged in
const PrivateRoute = () => {
  // Check for user in localStorage or sessionStorage
  const user = JSON.parse(localStorage.getItem("user")) || JSON.parse(sessionStorage.getItem("user"));

  // If no user, redirect to login
  if (!user) {
    return <Navigate to="/logIn" replace />;
  }

  // If user exists, render the nested routes (Outlet)
  return <Outlet />;
};

export default PrivateRoute;
