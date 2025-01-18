import { ETableNames } from '../../Etablenames';
import { IUsuario } from '../../models';
import { Knex } from '../../knex';
import { PasswordCrypto } from '../../../shared/services';


export const create = async (usuario: Omit<IUsuario, 'id'>): Promise<number | Error> => {
  try {
    const hashedPassword = await PasswordCrypto.hashPassword(usuario.senha);

    const [result] = await Knex(ETableNames.usuario).insert({...usuario, senha: hashedPassword}).returning('id');

    if (typeof result === 'object') {
      console.log('User created with ID:', result.id);
      return result.id;
    } else if (typeof result === 'number') {
      console.log('User created with ID:', result);
      return result;
    }

    return new Error('Erro ao cadastrar o registro');
  } catch (error) {
    console.log(error);
    return new Error('Erro ao cadastrar o registro');
  }
};