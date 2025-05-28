import { handleRequest } from './controllers/productController.js';

const [,, method, resource, ...params] = process.argv;
handleRequest(method, resource, params);


const baseUrl = 'https://fakestoreapi.com';

async function main() {
  try {
    if (method === 'GET' && resource === 'products') {
      if (args[0]) {
        const productId = args[0].split('/')[1];
        const res = await fetch(`${baseUrl}/products/${productId}`);
        const data = await res.json();
        console.log(data);
      } else {
        const res = await fetch(`${baseUrl}/products`);
        const data = await res.json();
        console.log(data);
      }
    } else if (method === 'POST' && resource === 'products') {
      const [title, price, category] = args;
      const res = await fetch(`${baseUrl}/products`, {
        method: 'POST',
        body: JSON.stringify({
          title,
          price: parseFloat(price),
          description: 'Un producto nuevo',
          image: 'https://i.pravatar.cc',
          category
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await res.json();
      console.log('Producto creado:', data);
    } else if (method === 'DELETE' && resource.startsWith('products/')) {
      const productId = resource.split('/')[1];
      const res = await fetch(`${baseUrl}/products/${productId}`, {
        method: 'DELETE'
      });
      const data = await res.json();
      console.log('Producto eliminado:', data);
    } else {
      console.log('Comando no reconocido.');
    }
  } catch (error) {
    console.error('Ocurrió un error:', error.message);
  }
}

main();


const fetch = require('node-fetch');
const { getAllProducts, getProductById, createProduct, deleteProductById } = require('./productController');


const [] = process.argv;

async function main() {
  try {
    if (method === 'GET' && resource === 'products') {
      if (args.length === 0) {
        await getAllProducts();
      } else if (args.length === 1) {
        const id = args[0];
        await getProductById(id);
      }
    }

    else if (method === 'POST' && resource === 'products') {
      const [title, price, category] = args;
      if (!title || !price || !category) {
        console.log('Faltan argumentos. Uso: npm run start POST products <title> <price> <category>');
        return;
      }
      await createProduct(title, price, category);
    }

    else if (method === 'DELETE' && resource.startsWith('products/')) {
      const id = resource.split('/')[1];
      await deleteProductById(id);
    }

    else {
      console.log('Comando no reconocido. Revisa la sintaxis.');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();


const {
    getAllProducts,
    getProductById,
    createProduct,
    deleteProduct
  } = require('./controllers/productController.js');
  
  
  
  const run = async () => {
    if (method === 'GET' && endpoint === 'products') {
      if (args.length === 0) {
        await getAllProducts();
      } else {
        const productId = args[0].split('/')[0];
        await getProductById(productId);
      }
    }
  
    else if (method === 'POST' && endpoint === 'products') {
      const [title, price, category] = args;
      if (!title || !price || !category) {
        console.log('⚠️  Faltan datos para crear el producto.');
        console.log('Uso: npm run start POST products <title> <price> <category>');
      } else {
        await createProduct(title, price, category);
      }
    }
  
    else if (method === 'DELETE' && endpoint.startsWith('products/')) {
      const productId = endpoint.split('/')[1];
      await deleteProduct(productId);
    }
  
    else {
      console.log('❌ Comando no reconocido.');
      console.log('Ejemplos válidos:');
      console.log('  npm run start GET products');
      console.log('  npm run start GET products/15');
      console.log('  npm run start POST products T-Shirt 300 ropa');
      console.log('  npm run start DELETE products/7');
    }
  };
  
  run();
  