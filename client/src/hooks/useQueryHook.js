import axios from "axios";
import { useQuery } from "react-query";

const apiBaseURL = "http://localhost:5000/api/v1"; // Replace this with your API base URL

const useProductsQueryHook = (queryKey, config = {}) => {
  console.log(queryKey);
  return useQuery(queryKey, async () => {
    const response = await axios.get(`${apiBaseURL}/products`, {
      params: queryKey[0],
    });
    return response.data;
  });
};

export default useProductsQueryHook;
