import * as create from './Create';
import * as getall from './GetAll' 
import * as deleteById from './DeleteById'
import * as getById from './GetById'
import * as uptadeById from './UpdateById'




export const CidadesController = {
  ...deleteById,
  ...uptadeById,
  ...getById,
  ...create,
  ...getall,

};
