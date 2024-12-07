import { Request, Response } from 'express';
import * as yup from 'yup';
import { Validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';

interface IQueryProps {
  page?: number | null;
  limit?: number | null;
  filter?: string | null;
}
export const getAllValidaton = Validation((getSchema) => ({
    query: getSchema<IQueryProps>(yup.object().shape({
        page: yup.number().optional().moreThan(0),
        limit: yup.number().optional().moreThan(0),
        filter: yup.string().required(),
    })),
}));

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
    res.setHeader('acess-control-expose-headers', 'x-total-count');


  return res.status(StatusCodes.OK).json([{
    id: 1,
    nome: 'caxias do sul',
  }
]);
};
