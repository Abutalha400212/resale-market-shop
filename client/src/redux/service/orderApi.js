import { baseApi } from "./baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: (payload) => ({
        url: "/orders/create-order",
        method: "POST",
        data: payload,
        contentType: "application/json",
      }),
      invalidatesTags: ["order"],
    }),
    getOrder: build.query({
      query: (arg) => ({
        url: `/orders/get-order`,
        method: "get",
        params: arg,
      }),
      providesTags: ["order"],
    }),
    deleteFromOrder: build.mutation({
      query: (payload) => ({
        url: `/orders/${payload}`,
        method: "delete",
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrderQuery,
  useDeleteFromOrderMutation,
} = orderApi;
