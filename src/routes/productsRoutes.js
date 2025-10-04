import { Router } from 'express';
import {
  createProduct,
  getAllProducts,
  getProductByID,
} from '../controllers/productsController.js';

const router = Router();

router.get('/products', getAllProducts);
router.get('/products/:productId', getProductByID);

router.post('/products', createProduct);

export default router;
