import React, { createContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.auth";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  const [productToCart, setProductToCart] = useState([]);
  const authInfo = {
    productToCart,
    setProductToCart,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
