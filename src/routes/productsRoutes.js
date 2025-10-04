import { Router } from 'express';
import {
  getAllProducts,
  getProductByID,
} from '../controllers/productsController.js';

const router = Router();

router.get('/products', getAllProducts);
router.get('/products/:productId', getProductByID);

export default router;
