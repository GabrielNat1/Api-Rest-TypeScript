import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { Validation } from '../../shared/middleware';


interface IParamProps {
  id?: number;
}
export const deleteByIdValidation = Validation(getSchema => ({
  params: getSchema<IParamProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  })),
}));

export const deleteById = async (req: Request<IParamProps>, res: Response) => {
  console.log(req.params);

  if (Number(req.params.id) === 99999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    errors: {
      default: 'Registro não encontrado'
    }
  });


  return res.status(StatusCodes.NO_CONTENT).send();
};