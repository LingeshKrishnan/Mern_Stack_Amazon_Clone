import express from 'express'

import { createProducts, getProducts } from '../controllers/product.js';
const router = express.Router();

// router.get('/login', (req, res) => {
//     res.send('Logged In');
// })
router.get('/product',getProducts);
router.post('/product',createProducts);
export default router