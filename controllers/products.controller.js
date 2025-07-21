import * as productService from '../services/products.service.js';

export const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};

export const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productService.getProductById(id);
    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener producto' });
  }
};

export const createProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    const createdProduct = await productService.createProduct(newProduct);
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear producto' });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await productService.deleteProduct(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar producto' });
  }
};
