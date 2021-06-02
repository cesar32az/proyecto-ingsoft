import { Router } from 'express';
import { register, login } from './auth.controller';
import { checkDuplicates, validationMiddleware } from '../../middlewares';
import { UserDTO } from './user/user.dto';

const router = Router();

router
  .post('/register', checkDuplicates, validationMiddleware(UserDTO), register)
  .post('/login', login);

export default router;
