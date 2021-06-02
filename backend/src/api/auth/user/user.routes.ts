import { Router } from 'express';
import { getProfile, updateProfile } from './user.controller';
import passport from 'passport';
const auth = passport.authenticate('jwt', { session: false });

const router = Router();

router.get('/profile', auth, getProfile).put('/update', updateProfile);

export default router;
