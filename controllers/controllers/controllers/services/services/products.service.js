import * as productModel from '../models/products.model.js';

export const getAllProducts = async () => {
  return await productModel.getAllProducts();
};

export const getProductById = async (id) => {
  return await productModel.getProductById(id);
};

export const createProduct = async (product) => {
  return await productModel.createProduct(product);
};

export const deleteProduct = async (id) => {
  return await productModel.deleteProduct(id);
};
