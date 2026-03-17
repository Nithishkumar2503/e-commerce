import { DELETE, GET, PATCH, POST } from "../dispatch";

export const fetchAllProducts = async () => {
  return await GET("https://dummyjson.com/products", "products")
};

export const addProduct = async <T>(data: T) => {
  return await POST("https://dummyjson.com/products", data);
};

export const updateProduct = async <T>(data: T) => {
  return await PATCH("https://dummyjson.com/products", data);
};

export const deleteProduct = async (id: string) => {
  return await DELETE(`https://dummyjson.com/products/${id}`);
};
