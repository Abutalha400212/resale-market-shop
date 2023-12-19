import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDeleteFromCartMutation } from "../../redux/service/cartApi";
import toast from "react-hot-toast";
export default function Cart() {
  const [deleteFromCart] = useDeleteFromCartMutation();
  const { products } = useContext(AuthContext);
  const navigate = useNavigate();
  const total = products?.reduce((prev, cur) => {
    return prev + cur.quantity * cur.newPrice;
  }, 0);
  const delevaryFee = products?.length * 50;
  const vat = total * (2 / 100);
  const totalPrice = total + delevaryFee + vat;

  const handleSubmitPayment = () => {
    navigate("/order/place_order", {
      state: { data: { price: totalPrice } },
    });
  };
  const handleDeleteFromCart = (payload) => {
    deleteFromCart(payload).then((res) => {
      if (res.data.deletedCount > 0) {
        toast.success(res.data.message);
      }
    });
  };
  return (
    <>
      {products?.length ? (
        <div className="h-[100vh] mt-5 w-full">
          <h1 className="text-center text-md font-bold">
            Details of Cart to Order
          </h1>
          <div className="overflow-x-auto mt-10 ">
            <table className="table w-full relative">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                <tr>
                  <th scope="col">Q.</th>
                  <th scope="col">Product Img</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Product Size</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">single Price</th>
                  <th scope="col">Total Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody className="text-center text-gray-600 font-mono">
                {products?.map((product, i) => (
                  <tr
                    key={product._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td>{i + 1}</td>
                    <td>
                      <div className="avatar placeholder">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                          <img src={product?.img} alt="" />
                        </div>
                      </div>
                    </td>
                    <td>{product.name}</td>
                    <td>{product.size}</td>
                    <td>{product.quantity}</td>
                    <td>{product.newPrice}</td>
                    <td>{product.newPrice * product.quantity}</td>
                    <td>
                      <button
                        onClick={() => handleDeleteFromCart(product)}
                        className="btn btn-circle btn-sm btn-error"
                      >
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
                  <td></td>
                  <td>Price: </td>
                  <td>{total}</td>
                </tr>
                <tr>
                  <td></td>
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
                  <td></td>
                  <td>VAT: </td>
                  <td>{vat}</td>
                </tr>
                <tr>
                  <td></td>
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
          <p className="text-xl font-semibold">
            No product Cart Available to pay
          </p>
        </div>
      )}
    </>
  );
}
