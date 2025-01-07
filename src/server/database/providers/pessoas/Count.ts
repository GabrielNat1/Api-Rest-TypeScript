import { Knex } from "../../knex";
import { ETableNames } from "../../Etablenames";

export const count = async (filter: ''): Promise<number | Error> => {
    try {
        const [{ count }] = await Knex(ETableNames.pessoa)
        .where('nomeCompleto', 'like', `%${filter}%`)
        .count<[{count: number}]>('* as count');

        if (Number.isInteger(Number(count))) return Number(count);
        
        return new Error('Erro ao contar registros');
    } catch (error) {
        console.log(error);
        return new Error('Erro ao contar registros');
    }}