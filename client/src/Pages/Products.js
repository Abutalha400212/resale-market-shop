import React, { useContext, useState } from "react";
// import { category, categoryItem } from "../Api/CategoryApi";
// import { AuthContext } from "../Context/AuthProvider";
// import OrderModal from "./OrderDetails/OrderModal";
// import PrivateRoute from "../Routes/PrivateRoute";
import Loader from "../Components/Loader";
// import { useEffect } from "react";
import ProductCard from "../Components/ProductCard";
import useQueryHook from "../hooks/useQueryHook";
import Pagination from "../Components/Pagination";
const Products = () => {
  const [sortBy, setFilter] = useState(null);
  const [searchTerm, setSearch] = useState(null);
  const [page, setPage] = useState(1);
  const { data, isFetching, isError, isLoading } = useQueryHook([
    { sortBy, page, searchTerm },
  ]);
  const meta = data?.meta;
  const [handleShop, setHandleShop] = useState(null);
  const [category, setCategory] = useState("");

  // const [categories, setCategories] = useState([]);
  // console.log(categoriesItem);
  // useEffect(() => {
  //   category().then((data) => {
  //     setCategories(data);
  //     setLoading(false);
  //   });
  // }, [loading, setLoading]);
  // const handleCategoryData = (item) => {
  //   categoryItem(item).then((data) => {
  //     setCategoriesItem(data);
  //     setLoading(false);
  //   });
  // };
  if (isLoading || isFetching) {
    return <Loader />;
  }

  return (
    <div>
      <div className="grid place-content-center place-items-center mt-20">
        <div className="join">
          <div>
            <div>
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                name="search"
                className="input input-bordered join-item"
                placeholder="Search"
              />
            </div>
          </div>
          <select
            onClick={(e) => setFilter(e.target.value)}
            className="select select-bordered join-item">
            <option disabled>Filter</option>
            <option value={"price"}>price</option>
            <option value={"ratingsCount"}>rating</option>
          </select>
          <div className="indicator">
            <button type="submit" className="btn join-item">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-3  place-content-center place-items-center ">
        {data?.data?.map((item) => (
          <ProductCard
            key={item._id}
            item={item}
            setHandleShop={setHandleShop}
          />
        ))}
      </div>
      <div>
        <Pagination setPage={setPage} meta={meta} />
      </div>
      {/* {handleShop && (
        <PrivateRoute>
          {" "}
          <OrderModal item={handleShop} setHandleShop={setHandleShop} />
        </PrivateRoute>
      )} */}
    </div>
  );
};

export default Products;
