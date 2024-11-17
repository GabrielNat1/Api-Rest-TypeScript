import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CidadesController } from './../controllers';



const router = Router();



router.get('/', (_, res) => {
  res.send('Olá, DEV!');
  return
});

router.post('/cidades', CidadesController.create);



export { router };
