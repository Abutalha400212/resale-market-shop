import axios from "axios";
export const productionUrl = "https://smart-market-eta.vercel.app/api/v1";
export const developmentUrl = "http://localhost:5000/api/v1";
export const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: productionUrl }) =>
  async ({
    url,
    method,
    data,
    params,
    headers,
    meta,
    contentType,
    authorization,
  }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: {
          ...headers,
          "Content-Type": contentType || "application/json",
          authorization: authorization || localStorage.getItem("token"),
        },
        meta,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
