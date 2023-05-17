import Http from "./httpConfig";

const http = new Http();

export const fetchProducts = async (wordTosearch) => {
  try {
    const data = await http.get(`/items?q=${wordTosearch}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchProduct = async (id) => {
  try {
    const data = await http.get(`/items/${id}`);
    return data;
  } catch (error) {
    return error;
  }
};
