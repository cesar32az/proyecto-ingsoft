import jwt from 'jsonwebtoken';
import { IUser } from '../user/user.interface';

export const createToken = (user: IUser): string => {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || 'secret', {
    expiresIn: 86400, // 24 hrs
  });
};
