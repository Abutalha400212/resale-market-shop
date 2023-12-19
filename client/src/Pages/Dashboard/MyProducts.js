import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../redux/service/productApi";
import toast from "react-hot-toast";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const { data } = useGetProductsQuery({ email: user?.email });
  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = (payload) => {
    deleteProduct(payload).then((res) => {
      if (res.data.statusCode === 200) {
        toast.success("Product Delete");
      }
    });
  };

  return (
    <>
      {data?.data.length ? (
        <div className="overflow-x-auto  mt-10">
          <table className="w-full table">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
              <tr>
                <th scope="col" className="py-2">
                  Q.
                </th>
                <th scope="col" className="py-2">
                  Product Photo
                </th>
                <th scope="col" className="py-2">
                  Product Name
                </th>
                <th scope="col" className="py-2">
                  Price
                </th>
                <th scope="col" className="py-2">
                  Stock
                </th>
                <th scope="col" className="py-2">
                  Ratings
                </th>
                <th scope="col" className="py-2">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-center text-gray-600 font-mono">
              {data?.data?.map((product, i) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td>{i + 1}</td>
                  <th
                    scope="row"
                    className="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                        <img src={product?.img} alt="" />
                      </div>
                    </div>
                  </th>
                  <td className="py-2">{product.name}</td>
                  <td className="py-2">{product.price}</td>
                  <td className="py-2">{product.stock}</td>
                  <td className="py-2">
                    {product.ratings ? product.ratings : "No Ratings"}
                  </td>
                  <td className="py-2">
                    <button
                      onClick={() => handleDelete(product)}
                      className="btn btn-sm btn-warning"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className=" grid h-[100vh] place-content-center">
          <p className="text-xl font-semibold">
            You don't add any single Product Yet.
          </p>
        </div>
      )}
    </>
  );
};

export default MyProducts;
