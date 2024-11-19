import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CidadesController } from './../controllers';

const router = Router();

router.get('/', (_, res) => {
  res.send('Olá, DEV!');
  return
});

router.get('/cidades', CidadesController.getAllValidaton, CidadesController.getAll);
router.get('/cidades/:id', CidadesController.getByIdValidation, CidadesController.getById);
router.put('/cidades/:id', CidadesController.updateByIdValidation, CidadesController.updateById);
router.delete('/cidades/:id', CidadesController.deleteByIdValidation, CidadesController.deleteById );
router.post('/cidades', CidadesController.createValidaton, CidadesController.create);

export { router };
