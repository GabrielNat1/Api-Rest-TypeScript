import { ETableNames } from '../../Etablenames';
import { Knex } from '../../knex';

export const count = async (filter = ''): Promise<number | Error> => {
  try {
    const [{ count }] = await Knex(ETableNames.cidade)
      .where('nome', 'like', `%${filter}%`)
      .count<[{ count: string }]>('* as count'); // Tipo `string`, pois alguns DBs retornam strings.

    const total = Number(count);
    if (Number.isInteger(total)) return total;

    return new Error('Erro ao consultar a quantidade total de registros');
  } catch (error) {
    console.error('Erro ao executar consulta count:', error);
    return new Error('Erro ao consultar a quantidade total de registros');
  }
};
