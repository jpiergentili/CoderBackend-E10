import { Router } from "express";
import cartModel from '../models/cart.models.js';

const router = Router()
/* 
import ProductManager from  '../ProductManager.js'
const productManager = new ProductManager();

// Ruta para la vista Home
router.get('/', async(req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : null;
  const productos = await productManager.getProducts(limit);
  res.render('home', {
    title: 'Lista de Productos',
    productos: productos,
    style: 'index.css'
  });
});

router.post('/', async (req, res) => {
  const { title, description, price, thumbnail, code, stock } = req.body;
  await productManager.addProduct(title, description, price, thumbnail, code, stock);
  const productos = await productManager.getProducts();
  // Envío la lista de productos actualizada a través de WebSockets
  io.emit('productAdded', productos);
  res.status(201).send('Producto agregado exitosamente');
});

router.delete('/:pid', async (req, res) => {
  const pid = parseInt(req.params.pid);
  try {
    await productManager.deleteProduct(+pid);
    const productos = await productManager.getProducts();
    // Envío la lista de productos actualizada a través de WebSockets
    io.emit('productDeleted', productos);
    res.json({ message: `Producto con id ${pid} ha sido eliminado` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el producto' });
  }
}); */

export default router