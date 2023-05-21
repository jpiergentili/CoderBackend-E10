import { Router } from "express";
import productModel from '../models/products.models.js'

const router = Router()


// Ruta para la vista Home donde se van a mostrar todos los productos
router.get('/', async (req, res) => {
  try{
    let page = parseInt(req.query.page)
    if (!page) page = 1  
    const products = await productModel.paginate({}, {page, limit: 5, lean: true})
    res.render('products', {
      title: 'Lista de Productos',
      productos: products.docs,
      style: 'index.css'
    })    
  } catch (error){
    console.log('Error al cargar los productos:', error);
    res.status(500).json({ error: 'Error al cargar los productos' });
  }

})

// Ruta para crear un nuevo producto
router.post('/', async (req, res) => {
  try {
    const newProduct = await productModel.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    console.log('Error al crear el producto:', error);
    res.status(500).json({ error: 'Error al crear el producto' });
  }
});

// Ruta para actualizar un producto existente
router.put('/:id', async (req, res) => {
  try {
    const updatedProduct = await productModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.json(updatedProduct);
  } catch (error) {
    console.log('Error al actualizar el producto:', error);
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
});

// Ruta para eliminar un producto existente
router.delete('/:id', async (req, res) => {
  try {
    await productModel.findByIdAndRemove(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    console.log('Error al eliminar el producto:', error);
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
});

export default router;