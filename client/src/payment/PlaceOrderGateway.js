import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import sslCommerze from "../assest/Image/ssl.png";
import { AuthContext } from "../Context/AuthProvider";
import { useForm } from "react-hook-form";
import { useCreateOrderMutation } from "../redux/service/orderApi";
export default function PlaceOrderGetway() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);
  const [createOrder, { data }] = useCreateOrderMutation();
  if (data?.data) window.location.replace(data?.data);
  const { state } = useLocation();
  const handleSubmitPayment = (data) => {
    data.email = user?.email;
    data.price = state?.data?.price;
    createOrder(data);
  };
  return (
    <div>
      <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center mt-20">
        <div class="container max-w-screen-lg mx-auto">
          <div>
            <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div class="text-gray-600">
                  <p class="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <form
                  onSubmit={handleSubmit(handleSubmitPayment)}
                  class="lg:col-span-2"
                >
                  {" "}
                  <p className="text-sm font-semibold text-center">
                    Please Pay{" "}
                    <strong className="text-blue-600">
                      ${state?.data?.price}
                    </strong>{" "}
                    for your Order
                  </p>
                  <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div class="md:col-span-5">
                      <label className="form-control input-group-md w-full">
                        Name
                        <input
                          type="text"
                          placeholder="domain"
                          className="input input-md  input-bordered w-full bg-gray-50"
                          {...register("name", {
                            required: "Name is required",
                          })}
                        />
                      </label>
                    </div>

                    <div class="md:col-span-5">
                      <label className="form-control input-group-md w-full ">
                        Email Address
                        <input
                          defaultValue={user?.email}
                          disabled
                          type="email"
                          placeholder="domain@gmail.com"
                          className="input input-md  input-bordered w-full bg-gray-50"
                        />
                      </label>
                    </div>
                    <div class="md:col-span-5">
                      <label className="form-control input-group-md w-full ">
                        Phone No.
                        <input
                          type="tel"
                          placeholder="017*******"
                          className="input input-md  input-bordered w-full bg-gray-50"
                          {...register("phone", {
                            required: "Phone No. is required",
                          })}
                        />
                      </label>
                      {errors.phone && (
                        <span className="text-red-500">{errors.message}</span>
                      )}
                    </div>

                    <div class="md:col-span-5">
                      <label className="form-control input-group-md w-full ">
                        Address
                        <input
                          type="text"
                          placeholder="dhaka"
                          className="input input-md  input-bordered w-full bg-gray-50"
                          {...register("address", {
                            required: "Address No. is required",
                          })}
                        />
                      </label>
                      {errors.phone && (
                        <span className="text-red-500">{errors.message}</span>
                      )}
                    </div>
                    <div class="md:col-span-2">
                      <label className="form-control input-group-md w-full ">
                        City
                        <input
                          type="text"
                          placeholder="dhaka"
                          className="input input-md  input-bordered w-full bg-gray-50"
                          {...register("city", {
                            required: "City is required",
                          })}
                        />
                      </label>
                    </div>
                    <div class="md:col-span-3">
                      <label className="form-control input-group-md w-full ">
                        Country
                        <input
                          type="text"
                          placeholder="Bangladesh"
                          className="input input-md  input-bordered w-full bg-gray-50"
                          {...register("country", {
                            required: "Country is required",
                          })}
                        />
                      </label>
                    </div>

                    <div class="md:col-span-3">
                      <label className="form-control input-group-md w-full ">
                        Zip Code
                        <input
                          type="tel"
                          placeholder="1200"
                          className="input input-md  input-bordered w-full bg-gray-50"
                          {...register("zip_code", {
                            required: "Zip Code is required",
                          })}
                        />
                      </label>
                    </div>
                    <div class="md:col-span-2">
                      <label className="form-control input-group-md w-full">
                        Currency
                        <select
                          className="select select-bordered bg-gray-50"
                          {...register("currency", {
                            required: "currency is required",
                          })}
                        >
                          <option selected value={"BDT"}>
                            BDT
                          </option>
                          <option value={"USD"}>USD</option>
                        </select>
                      </label>
                    </div>

                    <div class="md:col-span-5 text-right mr-2">
                      <h1 className="text-md font-semibold underline">
                        Payment Method
                      </h1>
                    </div>
                    <div class="md:col-span-5 text-right">
                      <div class="inline-flex items-center gap-x-4">
                        {/* <button type="submit" class="curosor-pointer">
                          <FaCcStripe className="text-4xl" />
                        </button> */}
                        <button type="submit" class="curosor-pointer h-12 w-28">
                          <img
                            className="h-full w-full object-fit"
                            src={sslCommerze}
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}
