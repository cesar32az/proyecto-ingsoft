import { Response, Request } from 'express';
import { getRepository } from 'typeorm';
import { Presupuesto } from '../../entity/Presupuesto';
import { IPresupuesto } from './presupuesto.interface';

export const addPresupuesto = async (req: Request, res: Response) => {
  try {
    const repository = getRepository(Presupuesto);
    const user = req.user;
    const { presupuesto }: IPresupuesto = req.body;
    const newPresupuesto = repository.create({ user, presupuesto });
    const result = await repository.save(newPresupuesto);

    return res.status(200).json({ result, message: 'Presupuesto creado con éxito!' });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error, message: 'Error al crear presupuesto' });
  }
};
export const getPresupuesto = async (req: Request, res: Response) => {
  try {
    const user = req.user.id;
    const repository = getRepository(Presupuesto);
    const presupuesto = await repository.findOne({ where: { user } });
    console.log(presupuesto)
    return res.status(200).json({ message: `Presupuesto encontrado!`, presupuesto });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error, message: 'Error al obtener presupuesto' });
  }
};
export const updatePresupuesto = async (req: Request, res: Response) => {
  try {
    const user = req.user.id;
    const presupuesto: number = req.body.presupuesto;
    const repository = getRepository(Presupuesto);
    let presupuestoToUpdate = await repository.findOne({ where: { user } });
    if (!presupuestoToUpdate) {
      return res.status(400).json({ message: 'Error, presupuesto no encontrado' });
    } else {
      presupuestoToUpdate.presupuesto = presupuesto;
      const result = await repository.save(presupuestoToUpdate);
      return res.status(200).json({ message: `Presupuesto actualizado!`, result });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error, message: 'Error al actualizar presupuesto' });
  }
};
