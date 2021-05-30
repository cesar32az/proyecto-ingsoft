import { Response, Request } from 'express';

export const updateProfile = (req: Request, res: Response) => {
  try {
    const newProfile = req.body;
    return res.json(newProfile);
  } catch (err) {
    console.log(err);
  }
};

export const getProfile = (req: Request, res: Response) => {
  try {
    const profile = req.body;
    return res.json(profile);
  } catch (err) {
    console.log(err);
  }
};
