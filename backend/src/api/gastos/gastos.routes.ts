import { Router } from 'express';
import passport from 'passport';
import { addGasto, getGastos, totalGastos } from './gastos.controller';
const auth = passport.authenticate('jwt', { session: false });

const router = Router();

router.post('/', auth, addGasto).get('/', getGastos).get('/total', totalGastos);

export default router;
