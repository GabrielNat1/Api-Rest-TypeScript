import { Request, Response } from 'express';
import * as yup from 'yup';
import { Validation } from '../../shared/middleware';

interface ICidade {
  nome: string;
  estado: string;
}

interface Ifilter {
    filter?: string;
}

export const createValidaton = Validation((getSchema) => ({
    body: getSchema<ICidade>(yup.object().shape({
        nome: yup.string().required().min(3),
        estado: yup.string().required().min(3),
    })),
    query: getSchema<Ifilter>(yup.object().shape({
        filter: yup.string().required().min(3),
    })),
}));


export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
    console.log(req.body);

  return res.send('Create!');
};
