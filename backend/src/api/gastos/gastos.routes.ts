import { Router } from 'express';
import passport from 'passport';
import { addGasto, getGastos } from './gastos.controller';
const auth = passport.authenticate('jwt', { session: false });

const router = Router();

router.post('/', auth, addGasto).get('/', getGastos);

export default router;
