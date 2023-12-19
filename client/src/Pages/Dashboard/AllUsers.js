import React from "react";
import toast from "react-hot-toast";
import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from "../../redux/service/authApi";
import { MdOutlineDelete } from "react-icons/md";
import Loader from "../../Components/UI/Loader";
export default function AllUsers() {
  const [deleteUser, { isSuccess, isLoading }] = useDeleteUserMutation();
  const { data } = useGetUsersQuery();
  const handleUser = (payload) => {
    deleteUser(payload).then((res) => {
      if (res?.data?.statusCode === 200) {
        toast.success("User Deleted");
      } else if (res?.error?.status === 400) {
        toast.error(res?.error?.data?.message);
      }
    });
  };

  if (isLoading && !isSuccess) {
    return <Loader />;
  }
  return (
    <>
      {data?.data?.length ? (
        <div className="h-[100vh] mt-5 w-full">
          <h1 className="text-center font-bold text-2xl">Users List</h1>
          <div className="overflow-x-auto mt-10 ">
            <table className="table w-full">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                <tr>
                  <th scope="col" className="py-2">
                    Q.
                  </th>
                  <th scope="col" className="py-2">
                    Profile
                  </th>
                  <th scope="col" className="py-2">
                    Email
                  </th>
                  <th scope="col" className="py-2">
                    Name
                  </th>
                  <th scope="col" className="py-2">
                    Role
                  </th>
                  <th scope="col" className="py-2">
                    Joined Date
                  </th>
                  <th scope="col" className="py-2">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="text-center text-gray-600 font-mono">
                {data?.data?.map((user, i) => (
                  <tr
                    key={user._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="py-2">{i + 1}</td>
                    <td className="py-2">
                      <div className="avatar">
                        <div className="w-12 rounded-full">
                          <img src={user?.image_url} alt="" />
                        </div>
                      </div>
                    </td>

                    <td className="py-2">{user?.email}</td>
                    <td className="py-2">{user?.name}</td>
                    <td className="py-2">{user?.role}</td>

                    <td className="py-2">{user?.createAt}</td>
                    <td className="py-2  mx-auto">
                      <MdOutlineDelete
                        onClick={() => handleUser(user)}
                        className="text-2xl text-red-600 hover:text-red-700 cursor-pointer w-full mx-auto "
                      />
                    </td>
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
}
