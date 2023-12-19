import React, { useState } from "react";
import ProductCard from "../Components/UI/products/ProductCard";
import { useGetProductsQuery } from "../redux/service/productApi";
import { useLocation } from "react-router-dom";
import Loader from "../Components/UI/Loader";
import { colorItems, sizeItems } from "../constant/checkbox.items";
import Checkbox from "../Components/UI/Reusable.component/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { setColor, setSize } from "../redux/features/filter/flter.slice";

export default function ProductsForSearch() {
  const filter = useSelector((state) => state.filter);
  // const [filters,setFilters] = useState({})
  const dispatch = useDispatch();
  const location = useLocation();
  const Query = new URLSearchParams(location.search);
  const searchTerm = Query.get("searchTerm");
  const { data, isFetching, isError } = useGetProductsQuery({
    searchTerm,
  });
  if (isFetching && !isError) {
    return <Loader />;
  }
  return (
    <div>
      <div class="bg-white">
        <div>
          <main class="px-4 sm:px-6 lg:px-8">
            <div class="flex items-baseline justify-between border-b border-gray-200 pt-24 py-3">
              <h1 class="text-2xl font-bold tracking-tight text-gray-900">
                Products Filters
              </h1>

              <div class="flex items-center">
                <select className="select select-text select-xs px-2 ">
                  <option disabled selected>
                    Sort
                  </option>
                  <option>Most Popular</option>
                  <option>Best Rating</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option> High to Low</option>
                </select>

                <button
                  type="button"
                  class="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                >
                  <span class="sr-only">View grid</span>
                  <svg
                    class="h-5 w-5"
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" class="pb-24 pt-6">
              <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                <form class="hidden lg:block">
                  <div class="border-b border-gray-200 py-6">
                    <h3 class="-my-3 flow-root">
                      <button
                        type="button"
                        class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-0"
                        aria-expanded="false"
                      >
                        <span class="font-medium text-gray-900">Color</span>
                        <span class="ml-6 flex items-center">
                          <svg
                            class="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>

                          <svg
                            class="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                      </button>
                    </h3>

                    <div class="pt-6" id="filter-section-0">
                      <div class="space-y-4">
                        {colorItems.map((item, i) => (
                          <Checkbox
                            key={1}
                            label={item.name}
                            className={
                              " text-sm text-gray-600 flex items-center gap-x-2"
                            }
                            onChange={() =>
                              dispatch(setColor({ color: item.name }))
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div class="border-b border-gray-200 py-6">
                    <h3 class="-my-3 flow-root">
                      <button
                        type="button"
                        class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-2"
                        aria-expanded="false"
                      >
                        <span class="font-medium text-gray-900">Size</span>
                        <span class="ml-6 flex items-center">
                          <svg
                            class="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>

                          <svg
                            class="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                      </button>
                    </h3>

                    <div class="pt-6" id="filter-section-2">
                      <div class="space-y-4">
                        {sizeItems.map((item, i) => (
                          <Checkbox
                            key={1}
                            label={item.name}
                            className={
                              " text-sm text-gray-600 flex items-center gap-x-2"
                            }
                            // checked={filter[item.option]}
                            onChange={() =>
                              dispatch(setSize({ size: item.name }))
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </form>

                <div class="lg:col-span-3">
                  {data?.data?.length > 0 ? (
                    <div className="h-[100vh]">
                      <div className="grid grid-cols-1 md:grid-cols-4 my-5  gap-5 place-content-center place-items-center">
                        {data?.data?.map((item) => (
                          <ProductCard key={item._id} item={item} />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className=" grid h-[100vh] place-content-center">
                      <p className="text-xl font-semibold">
                        Seaching Products are not Available.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
