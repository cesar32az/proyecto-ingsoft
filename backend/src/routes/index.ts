import { Router } from 'express';
import authRoutes from '../api/auth/auth.routes';
import userRoutes from '../api/auth/user/user.routes';

const router = Router();

router.use('/auth', authRoutes).use('/user', userRoutes);

export default router;
