import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getWishlist } from "../../Api/WishlistCollection";
import Loader from "../../../Components/Loader/Loader";
import { AuthContext } from "../../Context/AuthProvider";
import { useProducts } from "../../hooks/QueryHooks/useProducts";
import Card from "../../Categories/Card/Card";
import OrderModal from "../../Categories/OrderDetails/OrderModal";

const Wishlist = () => {
  const [handleShop, setHandleShop] = useState(null);
  const location = useLocation();
  const { data, isLoading } = useProducts();
  let wishListItem;
  if (location.pathname == "/dashboard/wishlist") {
    wishListItem = data?.data?.data
      ?.filter((dt) => dt?.wisthList)
      ?.map((dt) => <Card item={dt} setHandleShop={setHandleShop} />);
  }
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {wishListItem}
      </div>
      {handleShop && (
        <OrderModal item={handleShop} setHandleShop={setHandleShop} />
      )}
    </div>
  );
};

export default Wishlist;
