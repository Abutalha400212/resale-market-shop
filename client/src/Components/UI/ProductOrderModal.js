import React, { useContext, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";

export default function ProductOrderModal({ item }) {
  const { name, newPrice, img } = item || {};
  const { productToCart, setProductToCart } = useContext(AuthContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (item) => {
    const isExist = productToCart.find((e) => e._id === item._id);
    if (isExist) {
      toast.error("This Product has already existed to cart");
      return;
    }
    item.orderQuantity = quantity;
    setProductToCart([...productToCart, item]);
  };
  return (
    <dialog id="my_modal_5" className="modal">
      <div className="modal-box">
        <div className="flex flex-col gap-6">
          <img src={img} className="max-w-sm " alt="Image is not available" />
          <div className="">
            <h1 className="text-2xl font-semibold mb-2">{name}</h1>
            <span class="text-xl  font-semibold  text-slate-900">
              Price: ${newPrice}
            </span>
            <p className="flex items-center gap-2 mt-2 text-xl font-semibold">
              <span>Quantity: </span>
              <div
                class=" flex justify-around items-center border border-1 
            w-12 "
              >
                <span className="text-xl font-semibold"> {quantity}</span>
                <div className="cursor-pointer text-sm">
                  <IoMdArrowDropup onClick={() => setQuantity(quantity + 1)} />
                  <IoMdArrowDropdown
                    onClick={() => setQuantity(quantity - 1)}
                  />
                </div>
              </div>
            </p>
          </div>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-success btn-nav-md"
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
