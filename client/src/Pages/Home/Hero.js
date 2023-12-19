import React from "react";
import image from "../../assest/Image/hero.jpg";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    if (search) {
      navigate(`/products/search?searchTerm=${search}`);
    }
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: ` url(${image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hi, My Beloved Customer</h1>
          <p className="mb-5">
            We Provide the Latest Shoes & Pants on cheep Rate. It's Offer only
            for Online Shopping in Bangladesh at SmartMarket.com. Brands:
            Adiads, Bata, Apex etc.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              name="search"
              className="input  w-full"
              placeholder="What are you looking...."
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
