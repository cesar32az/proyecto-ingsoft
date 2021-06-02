import jwt from 'jsonwebtoken';
import { IUser } from '../user/user.interface';

export const createToken = (user: IUser): string => {
  const secret = process.env.JWT_SECRET || 'secret';
  console.log(secret);
  return jwt.sign({ id: user.id, email: user.email }, secret, {
    expiresIn: 86400, // 24 hrs
  });
};
