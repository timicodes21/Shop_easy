import { SingleItem } from "../utils/model";
import apiClient from "../service/api";

export const fetchAllProducts = async () => {
  let data: SingleItem[] = [];
  await apiClient
    .get("products")
    .then((res) => {
      data = res.data;
    })
    .catch((err) => {
      data = [];
    });

  return data;
};

export const fetchSingleProduct = async (id: string) => {
  let data: SingleItem | {} = {};
  await apiClient
    .get(`products/${id}`)
    .then((res) => {
      data = res.data;
    })
    .catch((err) => {
      data = {};
    });

  return data;
};

export const fetchCategories = async () => {
  let data: string[] = [];
  await apiClient
    .get("products/categories")
    .then((res) => {
      data = res.data;
    })
    .catch((err) => {
      data = [];
    });

  return data;
};

export const fetchByCategory = async (id: string) => {
  let data: SingleItem[] = [];
  await apiClient
    .get(`products/category/${id}`)
    .then((res) => {
      data = res.data;
    })
    .catch((err) => {
      data = [];
    });

  return data;
};
