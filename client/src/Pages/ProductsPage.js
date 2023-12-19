import React, { useState } from "react";
import ProductCard from "../Components/UI/products/ProductCard";
import Pagination from "../Components/UI/products/Pagination";
import { useGetProductsQuery } from "../redux/service/productApi";
import Loader from "../Components/UI/Loader";
const Products = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetProductsQuery({
    page,
  });
  const meta = data?.meta;
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="mt-20">
      <div className="grid grid-cols-1 my-5 md:grid-cols-4 gap-5 place-content-center place-items-center">
        {data?.data?.map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </div>
     {data?.data?.length && <div>
        <Pagination setPage={setPage} page={page} meta={meta} />
      </div>}
    </div>
  );
};

export default Products;
