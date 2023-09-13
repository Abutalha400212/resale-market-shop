import React, { useState } from "react";
import Loader from "../../../Components/Loader/Loader";
import { useDeleteUser, useGetUsers } from "../../hooks/QueryHooks/useUsers";

const Users = () => {
  const { data, isLoading } = useGetUsers();
  const { mutate } = useDeleteUser();
  const handleUserDelete = (user) => {
    console.log(user);
    mutate(user);
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="overflow-x-auto  mt-10">
      <table className="w-full table">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
          <tr>
            <th scope="col" className="py-2">
              Q.
            </th>
            <th scope="col" className="py-2">
              Users Photo
            </th>
            <th scope="col" className="py-2">
              Users Name
            </th>
            <th scope="col" className="py-2">
              Users Email
            </th>
            <th scope="col" className="py-2">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-600 font-mono text-center">
          {data?.data?.data?.map((user, i) => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="py-2">{i + 1}</td>
              <th
                scope="row"
                className="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <div className="avatar placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                    <img src={user?.img} alt="" />
                  </div>
                </div>
              </th>
              <td className="py-2">{user.name}</td>
              <td className="py-2">{user.email}</td>
              <td className="py-2">
                <button
                  type="button"
                  onClick={() => handleUserDelete(user)}
                  className="btn btn-sm btn-warning">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
