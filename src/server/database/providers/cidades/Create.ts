import { Knex } from "../../knex";
import { ICidade } from "../../models";
import { ETableNames } from "../../Etablenames";

export const create = async (cidade: Omit<ICidade, 'id'>): Promise<number | Error> => {
    try {
        const [result] = await Knex(ETableNames.cidade).insert(cidade).returning('id');

    if (typeof result === 'object') {
        return result.id;
    } else if (typeof result === 'number') {
        return result;
    }

        return new Error('erro ao cadastras o registro!')
    } catch(error) {
        console.log(error);
        return Error('Erro ao cadastrar o registro!');

    }
};
