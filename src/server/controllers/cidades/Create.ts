import { Request, Response } from 'express';
import * as yup from 'yup';
import { Validation } from '../../shared/middleware';

import { CidadesProvider } from '../../database/providers/cidades';
import { StatusCodes } from 'http-status-codes';
import { ICidade } from '../../database/models';

interface IBodyProps extends Omit<ICidade,'id'> { }

export const createValidaton = Validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        nome: yup.string().required().min(3).max(150),
    })),
}));

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
    const result = await CidadesProvider.create(req.body);
    if ( result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        });
    }


  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(result);
};
