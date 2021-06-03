import { Router } from 'express';
import passport from 'passport';

const auth = passport.authenticate('jwt', { session: false });

const router = Router();

router.post('/').get('/',);

export default router;
