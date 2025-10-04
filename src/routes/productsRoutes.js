import { Router } from 'express';
import {
  createProduct,
  getAllProducts,
  getProductByID,
  updateProduct,
} from '../controllers/productsController.js';

const router = Router();

router.get('/products', getAllProducts);
router.get('/products/:productId', getProductByID);

router.post('/products', createProduct);
router.patch('/products/:productId', updateProduct)

export default router;
