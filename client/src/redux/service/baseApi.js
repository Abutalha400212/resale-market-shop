import { createApi } from "@reduxjs/toolkit/query/react";
import {
  axiosBaseQuery,
  developmentUrl,
  productionUrl,
} from "../../constant/axiosBaseUrl";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery({ baseUrl: productionUrl }),
  tagTypes: ["cart", "order", "auth", "product"],
  endpoints: (builder) => ({}),
});
