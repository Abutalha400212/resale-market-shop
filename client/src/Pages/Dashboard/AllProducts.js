import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../redux/service/productApi";
import { MdOutlineDelete } from "react-icons/md";
export default function AllProducts() {
  const [deleteProduct] = useDeleteProductMutation();
  const [page, setPage] = useState(1);
  const { data } = useGetProductsQuery({ page });
  const handleDelete = (payload) => {
    deleteProduct(payload).then((res) => {
      if (res?.data?.statusCode === 200) {
        toast.success("product Deleted");
      } else if (res?.error?.status === 400) {
        toast.error(res?.error?.data?.message);
      }
    });
  };
  return (
    <>
      {data?.data.length ? (
        <div className="overflow-auto w-full p-2  mt-10">
          <h1 className="text-center font-bold text-2xl my-2">Products List</h1>
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
                  <td className="py-2  mx-auto">
                    <MdOutlineDelete
                      onClick={() => handleDelete(product)}
                      className="text-2xl text-red-600 hover:text-red-700 cursor-pointer w-full mx-auto "
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="grid place-content-center my-5">
            <ul className="join flex flex-wrap justify-center items-center">
              <li onClick={() => setPage(page - 1)} className="join-item btn">
                Previous page
              </li>
              <li onClick={() => setPage(page + 1)} className="join-item btn ">
                Next
              </li>
            </ul>
          </div>
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
}
