import { Router } from 'express';
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductByID,
} from '../controllers/productsController.js';

const router = Router();

router.get('/products', getAllProducts);
router.get('/products/:productId', getProductByID);

router.post('/products', createProduct);
router.delete('/products/:productId', deleteProduct);

export default router;
