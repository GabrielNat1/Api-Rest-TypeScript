import { StatusCodes } from "http-status-codes";
import { testServer } from '../jest.setup';

describe('Pessoas - GetAll', () => {
    let cidadeId: number | undefined = undefined;
    beforeAll(async () => {
        const resCidade = await testServer 
        .post('/cidades') 
        .send({  nome: 'Cidade Teste' });

    cidadeId = resCidade.body;
});

    it('Busca Registros', async () => {
     const res1 = await testServer 
        .post('/pessoas')
        .send({
            cidadeId,
            email: 'dwadwadwadwa@gmail.com',
            nomeCompleto: 'Nome Completo',
        });
    expect(res1.status).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer
        .get('/pessoas')
        .send();
    expect(Number(resBuscada.headers['x-total-count'])).toBeGreaterThan(0);
    expect(resBuscada.status).toEqual(StatusCodes.OK);  
    expect(resBuscada.body.length).toBeGreaterThan(0);
});
})