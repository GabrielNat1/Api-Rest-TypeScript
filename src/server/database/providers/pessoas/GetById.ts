import { ETableNames } from "../../Etablenames";
import { IPessoa } from "../../models";
import { Knex } from "../../knex";

export const geyById = async (id: number): Promise<IPessoa | Error> => {
  try {
    const result = await Knex(ETableNames.pessoa)
      .select("*")
      .where('id', '=', id)
      .first();

      if (result) return result;

    return new Error('registro não encontrada');
  } catch (error) {
    console.log(error);
    return new Error('Erro ao buscar registro');
  }
}