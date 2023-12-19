import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  const { _id, price, name, newPrice, img, stock } = item || {};

  return (
    <Link to={`/products/${_id}`}>
      <div class="relative flex w-full md:max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md ">
        <img className="w-full h-full  " src={img} alt="product_image" />
        {newPrice && newPrice < price && (
          <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-xs font-medium text-white">
            {Math.ceil(((price - newPrice) / price) * 100)}% OFF
          </span>
        )}
        <span
          class={`absolute top-0 right-0 m-2 rounded-full ${
            stock > 0 ? "bg-green-500" : "bg-black"
          }  px-2 text-center text-xs font-medium text-white`}
        >
          {stock > 0 ? "ON SALE" : "STOCK OUT"}
        </span>

        <div class=" absolute bottom-0 left-0 right-0 w-full p-3 bg-white shadow-sm">
          <h5 class="text-md font-serif text-slate-900 text-center">{name}</h5>
          <div class=" flex items-center justify-center ">
            <span class="text-xl font-bold text-slate-900">
              ${newPrice ? newPrice : price}
            </span>
            {newPrice && (
              <span class="text-xs text-slate-900 line-through ml-1">
                ${price}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
