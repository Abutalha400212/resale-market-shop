import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-4  ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
