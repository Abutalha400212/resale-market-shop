import axios from "axios";

export const imageUpload = async (image) => {
  const data = await axios.post(
    `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG_BB}`,
    image
  );
  return data;
};
