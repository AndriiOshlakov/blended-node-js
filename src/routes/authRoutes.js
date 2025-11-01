import { celebrate } from 'celebrate';
import { Router } from 'express';
import {
  loginUserSchema,
  registerUserSchema,
  requestResetEmailSchems,
} from '../validations/authValidation.js';
import {
  authUserLogout,
  loginUser,
  refreshTokenSession,
  registerUser,
  requestResetEmail,
} from '../controllers/authController.js';

const router = Router();

router.post('/auth/register', celebrate(registerUserSchema), registerUser);
router.post('/auth/login', celebrate(loginUserSchema), loginUser);
router.post('/auth/logout', authUserLogout);
router.post('/auth/refresh', refreshTokenSession);
router.post(
  '/auth/request-reset-email',
  celebrate(requestResetEmailSchems),
  requestResetEmail,
);
export default router;
