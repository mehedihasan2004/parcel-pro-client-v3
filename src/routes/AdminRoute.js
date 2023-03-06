import React from "react";
import { Navigate } from "react-router-dom";
import { Spinner } from "../components";
import { useAuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/isAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading, logout, location } = useAuthContext();
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);

  if (loading || isAdminLoading) return <Spinner />;

  if (user && isAdmin) return children;
  else {
    logout();
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default AdminRoute;
