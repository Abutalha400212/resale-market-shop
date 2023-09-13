import React from "react";
import useVerified from "../hooks/useVerified";
import verifyImg from "../../../assest/Image/verified.png";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const WishListCard = ({ item, setHandleShop }) => {
  const { brand, seller, posted, original, resale, used, img, location } = item;
  console.log(item);
  const [verify] = useVerified(item.email);
  return (
    <div className="drop-shadow-xl rounded-md">
      <div className=" bg-white shadow rounded">
        <div
          className={`h-48 flex flex-col justify-between p-4  rounded-t-md `}
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}>
          <div>
            {item.status ? (
              <span className="uppercase text-xs bg-gray-900 p-0.5  border rounded text-white font-medium select-none ">
                Out of Stock
              </span>
            ) : (
              <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
                available
              </span>
            )}
          </div>
        </div>
        <div className="p-4 flex flex-col items-center">
          <p className="text-gray-900 font-mono text-sm text-center flex justify-center items-center">
            {seller}
            {verify && (
              <div
                className="avatar tooltip tooltip-primary"
                data-tip="Verified">
                <div className="w-6 rounded-full">
                  <img className="w-full " src={verifyImg} alt="" />
                </div>
              </div>
            )}
          </p>
          <p className="text-gray-400 font-light text-xs text-center">
            Location:{location}
          </p>
          <p className="text-gray-400 font-light text-xs text-center">
            Posted on : {posted}
          </p>
          <h1 className="text-gray-600 text-center mt-1 font-bold uppercase">
            {brand}
          </h1>
          <p className="text-gray-700 font-light text-sm text-center">
            Model: {brand}
          </p>
          <div className="flex justify-between gap-x-2 text-gray-700  font-light">
            <p className="text-center  mt-1 text-sm">
              Original Price : ৳{" "}
              <span className="line-through font-semibold">{original}</span>
            </p>
            <p className="text-center  mt-1 text-sm">
              Resale Price : ৳{" "}
              <span className="font-bold text-blue-900">{resale}</span>
            </p>
          </div>
          <p className="text-gray-500 font-light text-xs text-center">
            Used For: {used}
          </p>
          <label
            onClick={() => setHandleShop(item)}
            htmlFor="order-modal"
            className=" w-full flex items-center justify-center btn btn-primary hover:btn-info my-1">
            Booking Now <ShoppingCartIcon className="h-6 w-6 " />
          </label>
        </div>
      </div>
    </div>
  );
};

export default WishListCard;
