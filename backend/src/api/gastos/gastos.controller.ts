import { Response, Request } from 'express';
import { getRepository } from 'typeorm';
import { Gasto } from '../../entity/Gasto';
import { IGastos } from './gastos.interface';

export const addGasto = async (req: Request, res: Response) => {
  try {
    const gastoRepository = getRepository(Gasto);
    const user = req.user;
    const { gasto, categoria, costo, fecha }: IGastos = req.body;
    const newGasto = gastoRepository.create({ gasto, categoria, costo, fecha, user });
    const result = await gastoRepository.save(newGasto);

    return res.status(200).json({ message: 'Gasto creado con éxito!', result });
  } catch (error) {
    console.log(error);

    return res.status(400).json({ error, message: 'Error al agregar gasto :c' });
  }
};

export const getGastos = async (req: Request, res: Response) => {
  try {
    const gastoRepository = getRepository(Gasto);
    const user = req.user;
    const gastos = await gastoRepository.find(user);
    console.log(gastos);
    return res.status(200).json({ message: 'Gastos obtenidos con éxito!', gastos });
  } catch (error) {
    console.log(error);

    return res.status(400).json({ error, message: 'Error al obtener gastos :c' });
  }
};

export const totalGastos = async (req: Request, res: Response) => {
  try {
    const gastoRepository = getRepository(Gasto);
    const user = req.user;
    const gastos = await gastoRepository.find(user);
    const totalGastos = gastos
      .map((gasto) => {
        return gasto.costo;
      })
      .reduce((acc, curr) => acc + curr, 0);
    //console.log(totalGastos);
    return res.status(200).json({ message: 'Gastos obtenidos con éxito!', totalGastos });
  } catch (error) {
    console.log(error);

    return res.status(400).json({ error, message: 'Error al obtener gastos :c' });
  }
};
