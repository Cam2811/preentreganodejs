import { Router } from 'express';
import { getAllProducts, getProductById, createProduct, deleteProduct } from '../controllers/products.controller.js';

const router = Router();

// Obtener todos los productos
router.get('/api/products', getAllProducts);

// Obtener un producto por ID
router.get('/api/products/:id', getProductById);

// Crear un producto nuevo
router.post('/api/products/create', createProduct);

// Eliminar un producto por ID
router.delete('/api/products/:id', deleteProduct);

export default router;

