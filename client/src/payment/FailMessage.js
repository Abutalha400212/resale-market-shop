import React from "react";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
const PaymentFail = () => {
  return (
    <div className=" grid h-[100vh] place-content-center">
      <p className="text-xl font-semibold">
        <span className="text-red-700">Order Failed !</span>
        <br />
        <Link
          to="/"
          class="text-sm font-medium text-gray-700 py-2 px-3 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
        >
          <IoMdHome className="inline-block text-xl mr-1" />
          <span class="">Back To Home</span>
        </Link>
      </p>
    </div>
  );
};

export default PaymentFail;
