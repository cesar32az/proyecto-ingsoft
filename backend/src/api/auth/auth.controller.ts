import { Response, Request } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../../entity/User';
import { IUser } from './user/user.interface';
import { comparePassword, hashPassword } from './utils';

export const register = async (req: Request, res: Response): Promise<Response> => {
  try {
    let { name, lastName, birthDate, password, email } = req.body;
    let user: IUser = { name, lastName, birthDate, password: await hashPassword(password), email };
    const newUser = getRepository(User).create(user);
    const result = await getRepository(User).save(newUser);

    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};

export const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    return res.status(200).json({ message: 'ok' });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};
