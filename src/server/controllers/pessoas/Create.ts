import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import * as yup from 'yup';

import { PessoasProvider } from '../../database/providers/pessoas';
import { Validation } from '../../shared/middleware/Validation';
import { IPessoa } from './../../database/models';


interface IBodyProps extends Omit<IPessoa, 'id'> { }

export const createValidation = Validation(get => ({
  body: get<IBodyProps>(yup.object().shape({
    email: yup.string().required().email(),
    cidadeID: yup.number().integer().required(),
    nomeCompleto: yup.string().required().min(3),
  })),
}));

export const create = async (req: Request<{}, {}, IBodyProps>, res: Response) => {
  const result = await PessoasProvider.create(req.body);

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }

  return res.status(StatusCodes.CREATED).json(result);
};