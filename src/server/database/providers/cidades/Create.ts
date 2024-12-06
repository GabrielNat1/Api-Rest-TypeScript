import { Knex } from "../../knex";
import { ICidade } from "../../models";
import { ETableNames } from "../../Etablenames";

export const create = async (cidade: Omit<ICidade, 'id'>): Promise<number | Error> => {
    try {
        const [result1] = await Knex(ETableNames.cidade).insert(cidade).returning('id');


        return 1;
    } catch(error) {
        console.log(error);
        return Error('Erro ao cadastrar o registro!');

    }
}
