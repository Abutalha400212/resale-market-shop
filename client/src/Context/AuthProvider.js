import React, { createContext } from "react";
import Loader from "../Components/UI/Loader";
import { useGetFromCartQuery } from "../redux/service/cartApi";
import { useGetUserQuery } from "../redux/service/authApi";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const { data, isLoading } = useGetUserQuery();
  const user = data?.data;
  let authInfo = {
    user,
    isLoading,
  };
  const { data: cart } = useGetFromCartQuery({ email: user?.email });
  console.log(cart);
  authInfo.products = cart?.data;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
