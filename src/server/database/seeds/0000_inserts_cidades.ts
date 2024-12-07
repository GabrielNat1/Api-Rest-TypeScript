import { Knex } from "knex";
import { ETableNames } from "../Etablenames";

export const seed = async (knex: Knex) => {

    const [{ count }] = await knex(ETableNames.cidade).count<[{count: number}]>('* as count')
    if (!Number.isInteger(count) || Number(count) > 0) return;

    const cidadesToInsert = cidadesDoParana.map(nomeDaCidade => ({nome: nomeDaCidade}));
    await knex(ETableNames.cidade).insert(cidadesToInsert);
};

const cidadesDoParana = [
    'Curitiba',
    'Londrina',
    'Maringá',
    'Cascavel',
    'Ponta Grossa',
    'Foz do Iguaçu',
    'São José dos Pinhais',
    'Colombo',
    'Guarapuava',
    'Paranaguá',
    'Apucarana',
    'Arapongas',
    'Toledo',
    'Campo Mourão',
    'Pinhais',
    'Araucária',
    'Umuarama',
    'Francisco Beltrão',
    'Almirante Tamandaré',
    'Sarandi',
    'Cambé',
    'Rolândia',
    'Piraquara',
    'Palmas',
    'Ibiporã',
    'Cianorte',
    'Telêmaco Borba',
    'Pato Branco',
    'Castro',
    'Campo Largo',
    'Medianeira',
    'Irati',
    'Cornélio Procópio',
    'Marechal Cândido Rondon',
    'Guaratuba',
    'Mandaguari',
    'Dois Vizinhos',
    'Wenceslau Braz',
    'Bituruna',
    'Lapa',
    'Realeza',
    'Quedas do Iguaçu',
    'Santa Helena',
    'Altônia',
    'Assaí',
    'Ivaiporã',
    'São Mateus do Sul',
    'Jaguariaíva',
    'Palotina',
    'Capitão Leônidas Marques',
    'Santo Antônio da Platina',
    'Pitanga',
    'Reserva',
    'Planaltina do Paraná',
    'Cambará',
    'Antonina',
    'Rio Negro',
    'Guaira',
    'Matinhos',
    'Morretes',
    'Nova Londrina'
  ];
  