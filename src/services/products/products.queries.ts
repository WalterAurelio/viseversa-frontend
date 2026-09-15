import { useSuspenseQuery } from "@tanstack/react-query";
import { getSizes, getLocations, getProducts, getProductsByCategory, getProductsBySearch } from "./products.api";

export const useGetSizes = (category: string) => {
  return useSuspenseQuery({
    queryKey: ["sizes", { category }],
    queryFn: () => getSizes(category)
  });
};

export const useGetLocations = () => {
  return useSuspenseQuery({
    queryKey: ["locations"],
    queryFn: getLocations
  });
};

export const useGetProducts = () => {
  return useSuspenseQuery({
    queryKey: ["products"],
    queryFn: getProducts
  });
};

export const useGetProductsByCategory = (category: string, params: string) => {
  const queryKey = params ? ["products", { category, params }] : ["products", { category }];

  return useSuspenseQuery({
    queryKey,
    queryFn: () => getProductsByCategory(category, params)
  });
};

export const useGetProductsBySearch = (searchQuery: string) => {
  return useSuspenseQuery({
    queryKey: ["products", { searchQuery }],
    queryFn: () => getProductsBySearch(searchQuery)
  });
};
