import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { GrUpdate } from "react-icons/gr";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
export default function Invoice() {
  const { state } = useLocation();
  console.log(state);
  const navigate = useNavigate();
  const { productToCart } = useContext(AuthContext);
  const total = productToCart.reduce((prev, cur) => {
    return prev + cur.orderQuantity * cur.newPrice;
  }, 0);
  const delevaryFee = productToCart.length * 50;
  const vat = total * (2 / 100);
  const totalPrice = total + delevaryFee + vat;

  const handleSubmitPayment = () => {
    navigate("/dashboard/payment", { state: { data: { price: totalPrice } } });
  };
  return (
    <>
      {productToCart.length ? (
        <div>
          <h1 className="text-center text-md font-bold">
            Details of Cart to Order
          </h1>
          <div className="overflow-x-auto mt-10 ">
            <table className="table w-full relative">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                <tr>
                  <th scope="col" className="py-2">
                    Q.
                  </th>
                  <th scope="col" className="py-2">
                    Product Img
                  </th>
                  <th scope="col" className="py-2">
                    Product Name
                  </th>
                  <th scope="col" className="py-2">
                    Quantity
                  </th>
                  <th scope="col" className="py-2">
                    single Price
                  </th>
                  <th scope="col" className="py-2">
                    Total Price
                  </th>
                  <th scope="col" className="py-2">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="text-center text-gray-600 font-mono">
                {productToCart?.map((product, i) => (
                  <tr
                    key={product._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="py-2">{i + 1}</td>
                    <td>
                      <div className="avatar placeholder">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                          <img src={product?.img} alt="" />
                        </div>
                      </div>
                    </td>
                    <td className="py-2">{product.name}</td>
                    <td>{product.orderQuantity}</td>
                    <td className="py-2">{product.newPrice}</td>
                    <td className="py-2">
                      {product.newPrice * product.orderQuantity}
                    </td>
                    <td className="py-2">
                      <button className="btn btn-circle btn-sm btn-error">
                        <MdDeleteOutline />
                      </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Price: </td>
                  <td>{total}</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Delevary Fee: </td>
                  <td>{delevaryFee}</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>VAT: </td>
                  <td>{vat}</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Total Price: </td>
                  <td>{totalPrice}</td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-start p-2">
              <button
                disabled={state?.isConfirm}
                onClick={handleSubmitPayment}
                className="btn btn-info btn-wide"
              >
                Submit To Pay
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className=" grid h-[100vh] place-content-center">
          <p className="text-xl font-semibold">No product Cart Available</p>
        </div>
      )}
    </>
  );
}
