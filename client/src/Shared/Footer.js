import { FaShopify } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="mt-5  shadow-lg md:px-28 md:py-6 px-3  text-black">
        <div className="md:flex items-center justify-between">
          <Link to={"/"} className="flex justify-center items-center">
            <FaShopify className="text-3xl text-green-700" />{" "}
            <span className="text-lg font-bold">Smart Market</span>
          </Link>
          <ul className="md:flex flex-wrap items-center text-sm text-black font-semibold mt-2">
            <li>
              <Link to="/about" className="mr-4 hover:underline md:mr-6 ">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/privacy_policy"
                className="mr-4 hover:underline md:mr-6"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/blog" className="mr-4 hover:underline md:mr-6 ">
                blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <span className="block text-sm text-black text-center font-semibold md:pb-0 pb-4">
          © 2022{" "}
          <Link to="/" className="hover:underline">
            Smart Market
          </Link>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
};

export default Footer;
