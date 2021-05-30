import { Router } from 'express';
import { getProfile, updateProfile } from './user.controller';

const router = Router();

router.get('/profile', getProfile).post('/update', updateProfile);

export default router;
