<<<<<<< HEAD
import { ETableNames } from '../../Etablenames';
=======
import { ETableNames } from '../../ETableNames';
>>>>>>> 5c01b85f5a10c38f2fbecec47be1600ddd8d7019
import { ICidade } from '../../models';
import { Knex } from '../../knex';


export const getById = async (id: number): Promise<ICidade | Error> => {
  try {
    const result = await Knex(ETableNames.cidade)
      .select('*')
      .where('id', '=', id)
      .first();

    if (result) return result;

    return new Error('Registro não encontrado');
  } catch (error) {
    console.log(error);
    return new Error('Erro ao consultar o registro');
  }
};
