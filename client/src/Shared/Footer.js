import logo from "../assest/Image/logo.png";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Footer = () => {
  const { loading } = useContext(AuthContext);
  return (
    <>
      {!loading && (
        <footer className="mt-[calc(100vh-36px)] p-5 bg-blue-50 rounded shadow-xl bordered md:px-28 md:py-6 text-black">
          <div className="md:flex items-center justify-between">
            <Link to="/">
              <img
                className="shadow-md shadow-orange-700 rounded-full w-14 h-14 "
                src={logo}
                alt=""
              />
            </Link>
            <ul className="md:flex flex-wrap items-center text-sm text-black font-semibold mt-2">
              <li>
                <Link to="/" className="mr-4 hover:underline md:mr-6 ">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/blog" className="mr-4 hover:underline md:mr-6 ">
                  blog
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-3  sm:mx-auto lg:my-2" />
          <span className="block text-sm text-black text-center font-semibold h-2">
            © 2022{" "}
            <Link to="/" className="hover:underline">
              Mobile <span className="text-md">X</span>
            </Link>
            . All Rights Reserved.
          </span>
        </footer>
      )}
    </>
  );
};

export default Footer;
