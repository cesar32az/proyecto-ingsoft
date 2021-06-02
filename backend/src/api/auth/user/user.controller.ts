import { Response, Request } from 'express';
import { IUser } from './user.interface';
export const updateProfile = (req: Request, res: Response) => {
  try {
    const newProfile = req.body;
    return res.json(newProfile);
  } catch (err) {
    console.log(err);
  }
};

export const getProfile = async (req: Request, res: Response) => {
  try {
    let userProfile = req.user;
    return res.json({ user: userProfile });
  } catch (err) {
    console.log(err);
  }
};
