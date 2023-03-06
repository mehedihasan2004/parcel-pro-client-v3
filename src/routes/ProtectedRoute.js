import React from "react";
import { Navigate } from "react-router-dom";
import { Spinner } from "../components";
import { useAuthContext } from "../contexts/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { user, loading, location } = useAuthContext();

  if (loading) return <Spinner />;

  if (user) return children;

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectedRoute;
