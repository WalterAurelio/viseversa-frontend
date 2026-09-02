import axiosInstance from '../../api/axios';
import type { ApiResponse } from '../../types/ApiResponse';
// import type { Filters } from '../../types/Filters';
import type { ProductHomeResponse } from './products.types';

export const getProducts = async () => {
  const res =
    await axiosInstance.get<ApiResponse<ProductHomeResponse>>('/products');
  return res.data.data ?? ['No hay productos disponibles'];
};

export const filterProducts = async (category: string, params: string) => {
  const res = await axiosInstance.get(`/products/${category}?${params}`);
  return res.data.data;
};
