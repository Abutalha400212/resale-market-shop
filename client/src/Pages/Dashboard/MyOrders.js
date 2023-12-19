import React, { useContext } from "react";
import { useGetOrderQuery } from "../../redux/service/orderApi";
import { AuthContext } from "../../Context/AuthProvider";
const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const { data: order } = useGetOrderQuery({ email: user?.email });
  return (
    <>
      {order?.data?.length ? (
        <div className="h-[100vh] mt-5 w-full">
          <h1 className="text-center font-bold text-2xl">Order List</h1>
          <div className="overflow-x-auto mt-10 ">
            <table className="table w-full">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                <tr>
                  <th scope="col" className="py-2">
                    Q.
                  </th>
                  <th scope="col" className="py-2">
                    TransactionID
                  </th>
                  <th scope="col" className="py-2">
                    Name
                  </th>
                  <th scope="col" className="py-2">
                    Phone
                  </th>
                  <th scope="col" className="py-2">
                    Email
                  </th>
                  <th scope="col" className="py-2">
                    Price
                  </th>
                  <th scope="col" className="py-2">
                    Payment Date
                  </th>
                </tr>
              </thead>
              <tbody className="text-center text-gray-600 font-mono">
                {order?.data?.map((product, i) => (
                  <tr
                    key={product._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="py-2">{i + 1}</td>
                    <td className="py-2">{product.tran_id}</td>
                    <td className="py-2">{product.name}</td>
                    <td className="py-2">{product.phone}</td>
                    <td className="py-2">{product.email}</td>
                    <td className="py-2">{product.price}</td>
                    <td className="py-2">{product.paidAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className=" grid h-[100vh] place-content-center">
          <p className="text-xl font-semibold">No Order Purchase yet</p>
        </div>
      )}
    </>
  );
};

export default MyOrders;
