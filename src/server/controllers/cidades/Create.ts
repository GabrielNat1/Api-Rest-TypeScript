import { Request, Response } from 'express';
import * as yup from 'yup';
import { Validation } from '../../shared/middleware';

import { StatusCodes } from 'http-status-codes';
import { ICidade } from '../../database/models';

interface IBodyProps extends Omit<ICidade,'id'> { }

export const createValidaton = Validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        nome: yup.string().required().min(3),
    })),
}));

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {



  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(1);
};
