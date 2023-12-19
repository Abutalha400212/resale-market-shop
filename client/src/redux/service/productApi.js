import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createProduct: build.mutation({
      query: (payload) => ({
        url: "/products/create-product",
        method: "post",
        data: payload,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: ["product"],
    }),
    deleteProduct: build.mutation({
      query: (payload) => ({
        url: `/products/delete-product/${payload._id}`,
        method: "delete",
      }),
      invalidatesTags: ["product"],
    }),
    getProducts: build.query({
      query: (arg) => ({
        url: `/products`,
        method: "get",
        params: arg,
      }),
      providesTags: ["product"],
    }),
    getProductsWithoutCondition: build.query({
      query: () => ({
        url: `/products/get_products`,
        method: "get",
      }),
      providesTags: ["product"],
    }),
    getProductsById: build.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "get",
      }),
    }),
    updateProductById: build.query({
      query: (id) => ({
        url: `/products/update-product/${id}`,
        method: "get",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByIdQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  getProductsWithoutCondition,
} = productApi;
