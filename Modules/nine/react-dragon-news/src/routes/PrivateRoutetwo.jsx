import React, { useContext } from "react";
import { AuthContexttwo } from "../providers/AuthProvidertwo";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutetwo = ({ children }) => {
  const { user, loading } = useContext(AuthContexttwo);
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoutetwo;
