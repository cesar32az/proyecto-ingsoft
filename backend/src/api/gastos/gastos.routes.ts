import { Router } from 'express';
import passport from 'passport';
import { addGasto, getGastos, totalGastos } from './gastos.controller';

const auth = passport.authenticate('jwt', { session: false });

const router = Router();

router.post('/', auth, addGasto).get('/', auth, getGastos).get('/total', auth, totalGastos);

export default router;
