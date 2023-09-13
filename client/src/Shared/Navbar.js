import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import logo from "../assest/Image/logo.png";
import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import { categories } from "../Api/CategoryApi";
// import { AuthContext } from "../Context/AuthProvider";
const Navbar = () => {
  const user = { email: "abu" };
  const [header, setHeader] = useState("bg-transparent");
  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader("bg-transparent");
    } else if (window.scrollY > 70) {
      return setHeader("backdrop-blur-lg");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  // const navigate = useNavigate();
  // const { user, logOut, setCategoriesItem } = useContext(AuthContext);
  // const handleLogOut = () => {
  //   logOut().then(() => {
  //     toast.success("Account LogOut");
  //     navigate("/");
  //   });
  // };
  // const handleAllData = () => {
  //   categories().then((data) => setCategoriesItem(data));
  // };
  const navItem = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center px-4 m-0.5 rounded-md transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              isActive ? "bg-gray-300  text-gray-700" : "bg-gray-100"
            }`
          }>
          <span className=" font-medium">Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          // onClick={handleAllData}
          className={({ isActive }) =>
            `flex items-center px-4 m-0.5 rounded-md transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              isActive ? "bg-gray-300  text-gray-700" : "bg-gray-100"
            }`
          }>
          <span className=" font-medium">Products</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `flex items-center px-4 m-0.5 rounded-md transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              isActive ? "bg-gray-300  text-gray-700" : "bg-gray-100"
            }`
          }>
          <span className=" font-medium">Blog</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center px-4 m-0.5 rounded-md transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              isActive ? "bg-gray-300  text-gray-700" : "bg-gray-100"
            }`
          }>
          <span className=" font-medium">Dashboard</span>
        </NavLink>
      </li>
    </>
  );

  const authItem = (
    <>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `flex items-center px-4 m-0.5 rounded-md transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              isActive ? "bg-gray-300  text-gray-700" : "bg-gray-100"
            }`
          }>
          <span className=" font-medium">Log in</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            `flex items-center px-4 m-0.5 rounded-md transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              isActive ? "bg-gray-300  text-gray-700" : "bg-gray-100"
            }`
          }>
          <span className=" font-medium">Sign Up</span>
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`navbar fixed top-0 w-full z-10 duration-300 ease-in-out ${header} `}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItem}
          </ul>
        </div>
        <Link to={"/"} className="ml-2">
          <img
            className="shadow-md shadow-orange-700 rounded-full w-14 h-14 "
            src={logo}
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          {!user.email ? (
            authItem
          ) : (
            <button className="flex items-center px-4 py-2 m-0.5 rounded-md transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700">
              <span className="font-bold">Log Out</span>
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
