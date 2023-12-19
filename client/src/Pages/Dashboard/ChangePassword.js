import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";
import { useChangePasswordMutation } from "../../redux/service/authApi";

export default function ChangePassword() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors, re },
  } = useForm();

  const [changePassword] = useChangePasswordMutation();

  const handleResetPassword = (payload) => {
    changePassword({ ...payload, email: user?.email }).then((res) => {
      if (res?.data?.statusCode === 200) {
        localStorage.removeItem("token");
        toast.success(res?.data?.message);
        window.location.href = "/login";
      } else if (res?.error?.status === 400) {
        toast.error(res?.error?.data?.message);
      } else {
        toast.error("Something is Wrong");
      }
    });
  };
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content text-center">
        <form onSubmit={handleSubmit(handleResetPassword)}>
          <h1 className="text-center text-md tracking-tight my-5">
            Carefully Provide Your Password.
          </h1>
          <div className="grid md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="password"
                {...register("old_password")}
                id="floating_address"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_address"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Old Password
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="password"
                {...register("new_password")}
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                New Password
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-outline btn-sm btn-wide hover:btn-primary "
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}
