// import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { useProducts } from "../../hooks/QueryHooks/useProducts";
// import PrivateRoute from "../../Routes/PrivateRoute";
// import OrderModal from "../../products/OrderDetails/OrderModal";
// import ProductCard from "../../Components/ProductCard";
const Advertise = () => {
  // const [handleShop, setHandleShop] = useState(null);
  // const location = useLocation();
  // const { data } = useProducts();
  // let advertiseData;
  // if (location.pathname == "/") {
  //   advertiseData = data?.data?.data
  //     ?.filter((dt) => dt.advertise)
  //     ?.map((dt) => <ProductCard item={dt} setHandleShop={setHandleShop} />);
  // }
  return (
    <>
      {/* {data?.data?.data?.length && (
        <div>
          <h1 className="text-2xl text-gray-700 underline py-5 font-mono text-center">
            Advertise Section:
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 w-11/12 mx-auto gap-6 mt-10">
            {advertiseData}
          </div>
          {handleShop && (
            <PrivateRoute>
              <OrderModal item={handleShop} setHandleShop={setHandleShop} />
            </PrivateRoute>
          )}
        </div>
      )} */}
    </>
  );
};

export default Advertise;
