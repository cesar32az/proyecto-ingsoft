import { Router } from 'express';
import passport from 'passport';
import { addPresupuesto, getPresupuesto, updatePresupuesto } from './presupuesto.controller';

const auth = passport.authenticate('jwt', { session: false });

const router = Router();

router.post('/', auth, addPresupuesto).get('/', auth, getPresupuesto).put('/', auth, updatePresupuesto);

export default router;
