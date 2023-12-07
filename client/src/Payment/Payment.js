import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import OrderConfirm from "./OrderConfirm";
import { useLocation } from "react-router-dom";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_SECRET);
const Payment = () => {
  const { state } = useLocation();
  const data = state.data;
  return (
    <div className="w-1/2 mx-auto h-[100vh] my-auto mt-10">
      <h1 className="text-xl font-mono text-center">{data.product}</h1>
      <p className="text-sm font-semibold text-center">
        Please Pay <strong>${data.price}</strong> for your Order
      </p>
      <div className="md:w-96 my-12 ">
        <Elements stripe={stripePromise}>
          <OrderConfirm data={data} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
