import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { useGetOrderQuery } from "../redux/service/orderApi";
import { IoMdHome } from "react-icons/io";
import ReviewModal from "../Components/UI/modal/ReviewModal";
export default function SuccessMesssage() {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const Query = new URLSearchParams(location.search);
  const tran_id = Query.get("tran_id");
  const { data } = useGetOrderQuery({ tran_id });
  const order = data?.data[0];
  const [userRating, setUserRating] = useState(0);
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {data?.data?.length > 0 ? (
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div class="bg-gray-100 ">
              <div class="bg-white p-6  md:mx-auto">
                <svg
                  viewBox="0 0 24 24"
                  class="text-green-600 w-16 h-16 mx-auto my-6"
                >
                  <path
                    fill="currentColor"
                    d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                  ></path>
                </svg>
                <div className="text-green-600 ">
                  <h3 class="md:text-2xl text-base font-semibold text-center">
                    Payment Done!
                  </h3>
                  <p class="t">
                    Thank you for completing your secure online payment.
                  </p>
                </div>
                <div class="text-center text-gray-700">
                  <p className="pb-2"> Have a great day! </p>
                  <h1 className="text-sm font-semibold tracking-widest">
                    Customer Name: {order?.name}
                  </h1>
                  <h1 className="text-sm font-semibold tracking-widest">
                    Customer Email: {order?.email}
                  </h1>
                  <h1 className="text-sm font-semibold tracking-widest">
                    Place order at : {order?.address}
                  </h1>
                  <hr className="my-3" />
                  <h1 className="text-sm font-semibold tracking-widest">
                    Order No. {order?.tran_id}
                  </h1>

                  <div class="py-10 text-center">
                    <Link
                      to={`/dashboard/orders`}
                      class="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
                    >
                      View Orders
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" grid h-[100vh] place-content-center">
          <p className="text-xl font-semibold">
            Something Went Wrong
            <Link
              to="/"
              class="text-sm font-medium text-gray-700 py-2 px-3 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
            >
              <IoMdHome className="inline-block text-xl mr-1" />
              <span class="">Back To Home</span>
            </Link>
          </p>
        </div>
      )}

      {showModal && (
        <ReviewModal closeModal={closeModal} setUserRating={setUserRating} />
      )}
    </>
  );
}
