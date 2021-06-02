import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';

export const checkDuplicates = async (req: Request, res: Response, next: NextFunction) => {
  const email = req.body.email;
  const userRepository = getRepository(User);
  const user = await userRepository.findOne({ where: { email } });

  if (user) {
    console.log('Usuario ya existe');
    return res.status(400).json({ message: 'Usuario ya existe!' });
  }
  next();
};
