// controllers/productController.js

const fetch = require('node-fetch');

const BASE_URL = 'https://fakestoreapi.com/products';

const getAllProducts = async () => {
  try {
    const response = await fetch(BASE_URL);
    const products = await response.json();
    console.log(products);
  } catch (error) {
    console.error('Error al obtener los productos:', error.message);
  }
};

const getProductById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) throw new Error('Producto no encontrado');
    const product = await response.json();
    console.log(product);
  } catch (error) {
    console.error(`Error al obtener el producto con ID ${id}:`, error.message);
  }
};

const createProduct = async (title, price, category) => {
  try {
    const newProduct = {
      title,
      price: parseFloat(price),
      category,
      description: 'Producto creado desde la terminal',
      image: 'https://via.placeholder.com/150',
    };

    const response = await fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify(newProduct),
      headers: { 
        'Content-Type': 'application/json' 
    },
    body: JSON.stringify(newProduct),
    });

    const result = await response.json();
    console.log('Producto creado:', result);
  } catch (error) {
    console.error('Error al crear el producto:', error.message);
  }
};

const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });

    const result = await response.json();
    console.log('Producto eliminado:', result);
  } catch (error) {
    console.error(`Error al eliminar el producto con ID ${id}:`, error.message);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct
};
