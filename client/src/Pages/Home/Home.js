import React from "react";
import Hero from "./Hero";
import Products from "../ProductsPage";
import PaymentHeroNotice from "./PaymentHeroNotice";

const Home = () => {
  return (
    <div>
      <Hero />
      <PaymentHeroNotice />
      <div className="divider pt-10">Products</div>
      <Products />
    </div>
  );
};

export default Home;
