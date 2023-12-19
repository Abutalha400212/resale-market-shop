import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Loader from "../Components/UI/Loader";

const SellerRoute = ({ children }) => {
  const location = useLocation();
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }
  if (user && user?.role === "seller") {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
