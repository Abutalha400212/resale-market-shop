import { baseApi } from "./baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    setInCart: build.mutation({
      query: (payload) => ({
        url: "/cart/set-cart",
        method: "POST",
        data: payload,
        contentType: "application/json",
      }),
      invalidatesTags: ["cart"],
    }),
    getFromCart: build.query({
      query: (arg) => ({
        url: `/cart/get-cart`,
        method: "get",
        params: arg,
      }),
      providesTags: ["cart"],
    }),
    deleteFromCart: build.mutation({
      query: (payload) => ({
        url: `/cart/delete-cart/${payload._id}`,
        method: "delete",
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

export const {
  useSetInCartMutation,
  useGetFromCartQuery,
  useDeleteFromCartMutation,
} = cartApi;
