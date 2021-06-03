import { Router } from 'express';
import authRoutes from '../api/auth/auth.routes';
import userRoutes from '../api/auth/user/user.routes';
import gastosRoutes from '../api/gastos/gastos.routes';
import presupuestoRoutes from '../api/presupuesto/presupuesto.routes';

const router = Router();

router
  .use('/auth', authRoutes)
  .use('/user', userRoutes)
  .use('/gastos', gastosRoutes)
  .use('/presupuesto', presupuestoRoutes);

export default router;
