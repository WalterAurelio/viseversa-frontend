import axiosInstance from "../../api/axios";
import type { ApiResponse } from "../../types/ApiResponse";
import type { ProductResponse } from "./products.types";

export const getSizes = async (category: string) => {
  const res = await axiosInstance.get<ApiResponse<string[]>>(`/sizes/${category}`);
  return res.data.data;
};

export const getLocations = async () => {
  const res = await axiosInstance.get<ApiResponse<string[]>>("/locations");
  return res.data.data;
};

export const getProducts = async () => {
  const res = await axiosInstance.get<ApiResponse<ProductResponse[]>>("/products");
  return res.data.data;
};

export const getProductsByCategory = async (category: string, params: string) => {
  const res = await axiosInstance.get<ApiResponse<ProductResponse[]>>(`/products/${category}?${params}`);
  return res.data.data;
};
