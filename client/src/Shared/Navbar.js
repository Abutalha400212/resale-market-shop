import { FaShopify, FaRegUserCircle } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Loader from "../Components/UI/Loader";
import { useGetProductsQuery } from "../redux/service/productApi";

const Navbar = () => {
  const { data } = useGetProductsQuery({ page: 1 });
  const { user, products } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [header, setHeader] = useState("bg-white");
  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader("bg-white");
    } else if (window.scrollY > 70) {
      return setHeader("bg-white shadow-md");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const handleLogOut = () => {
    try {
      setLoading(true);
      localStorage.removeItem("token");
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <Loader />;
  }

  const pages = [
    { label: "Products", href: "/products" },
    { label: "Profile", href: "/dashboard/profile" },
    { label: "Change Password", href: "/dashboard/change_password" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Login", href: "/login" },
    { label: "Register", href: "/signup" },
  ];

  return (
    <div
      className={`navbar ${header} px-6  fixed w-full z-10 top-0 ease-in-out  duration-1000`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <RiBarChartHorizontalFill className="text-xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 overflow-y-scroll"
          >
            <li>
              <button>Category</button>
              <ul className="p-2">
                {data?.data?.map((e) => (
                  <li>
                    <Link to={`/products/search?searchTerm=${e?.category}`}>
                      {e?.category}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <button>Brand</button>
              <ul className="p-2">
                {data?.data?.map((e) => (
                  <li>
                    <Link to={`/products/search?searchTerm=${e?.seller}`}>
                      {e?.seller}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <button>Pages</button>
              <ul className="p-2">
                {pages.map((e) => (
                  <li>
                    <Link to={e?.href}>{e?.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="flex justify-center items-center">
          <FaShopify className="text-3xl text-green-700" />{" "}
          <span className="text-lg font-bold">Smart Market</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu   menu-horizontal px-1 ">
          <li className="">
            <details>
              <summary>Category</summary>
              <ul className="p-2 rounded-sm w-52">
                {data?.data?.map((e) => (
                  <li>
                    <Link to={`/products?searchTerm=${e?.category}`}>
                      {e?.seller}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          <li className="">
            <details>
              <summary>Brand</summary>
              <ul className="p-2 rounded-sm w-52">
                {data?.data?.map((e) => (
                  <li>
                    <Link to={`/products?searchTerm=${e?.seller}`}>
                      {e?.seller}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          <li className="">
            <details>
              <summary>Pages</summary>
              <ul className="p-2 rounded-sm w-52">
                {pages.map((e) => (
                  <li>
                    <Link to={e?.href}>{e?.label}</Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-x-4">
        {user?.role === "user" && (
          <div className="dropdown dropdown-end ">
            <div tabIndex={0} role="button">
              <Link
                to={"/dashboard/cart"}
                className="flex justify-center items-center"
              >
                {" "}
                <div className="indicator">
                  <HiOutlineShoppingBag className="text-2xl text-gray-400" />
                  <span className="badge badge-sm indicator-item ">
                    {products?.length}
                  </span>
                </div>
                Cart
              </Link>
            </div>
          </div>
        )}
        {user && user.email ? (
          <div className="dropdown dropdown-end ">
            <div tabIndex={0} role="button" className="avatar">
              <div className="w-8 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user?.image_url}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-sm w-56"
            >
              <li>
                <Link to={"/dashboard/profile"}>Profile</Link>
              </li>
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
              <li>
                <button onClick={handleLogOut}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to={"/login"}
            className="flex justify-center items-center gap-x-1"
          >
            <FaRegUserCircle className="text-2xl text-gray-500" />{" "}
            <span>Sign In</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
