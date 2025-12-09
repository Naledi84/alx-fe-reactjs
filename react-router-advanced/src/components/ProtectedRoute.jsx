import React from "react";
import { Navigate } from "react-router-dom";

// Simulated authentication check
const isAuthenticated = false; // change to true to simulate login

function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;
