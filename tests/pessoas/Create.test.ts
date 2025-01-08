import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe('Pessoas - Create', () => {
    let cidadeId: number | undefined = undefined;
    beforeAll(async () => {
        const resCidade = await testServer
        .post('/cidades')
        .send({ nome: 'Cidade Teste' });

        cidadeId = resCidade.body;
    });

    it('Cria Registro', async () => {
        const res1 = await testServer
        .post('/pessoas')
        .send({
            cidadeId,
            email: 'teste@gmail.com',
            nomeCompleto: 'Nome Completo',
        });
        expect(res1.status).toEqual(StatusCodes.CREATED);
        expect(typeof res1.body).toBe('number');
    });
    it('Cria Registro 2', async () => {
        const res1 = await testServer
        .post('/pessoas')
        .send({
            nomeCompleto: 'Nome Teste',
            email: 'nome2@gmail.com',
        });

        expect(res1.status).toEqual(StatusCodes.CREATED);
        expect(typeof res1.body).toBe('number');
    });
    it('tenta criar registro com email duplicado', async () => {
        const res1 = await testServer
        .post('/pessoas')
        .send({
            cidadeId,
            email: 'nome3@gmail.com',
            nomeCompleto: 'NomeDuplicado',
        });
        expect(res1.status).toEqual(StatusCodes.CREATED);
        expect(typeof res1.body).toBe('number');

        const res2 = await testServer
        .post('/pessoas')
        .send({
            cidadeId,
            email: 'nome3@gmail.com',
            nomeCompleto: 'NomeDuplicado',
        });
        expect(res2.status).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res2.body).toHaveProperty('Erros default');
    });
    it('tenta criar registro com nomeCompleto muito curto', async () => {
        const res1 = await testServer
        .post('/pessoas')
        .send({
            cidadeId,
            email: 'email@gmail.com',
            nomeCompleto: 'ab',
        });

        expect(res1.status).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('erros.body.nomeCompleto');
    });

    it('tenta criar registro sem nomeCompleto', async () => {
        const res1 = await testServer
        .post('/pessoas')
        .send({
            cidadeId,
            email: 'email@gmail.com',
        });

        expect(res1.status).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('erros.body.nomeCompleto');
    });
    it('tenta criar registro sem email', async () => {
        const res1 = await testServer
        .post('/pessoas')
        .send({
            cidadeId,
            nomeCompleto: 'NomeCompleto',
        });

        expect(res1.status).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('erros.body.email');
    });
    it('tenta criar registro com email invalido', async () => {
        const res1 = await testServer
        .post('/pessoas')
        .send({
            cidadeId,
            email: 'juca @gmail.com',
            nomeCompleto: 'NomeCompleto',
        });

        expect(res1.status).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('erros.body.email');
    });
    it('tenta criar registro sem cidadeId', async () => {
        const res1 = await testServer
        .post('/pessoas')
        .send({
            email: 'email@gmail.com',
            nomeCompleto: 'NomeCompleto',
        });

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.cidadeId');
    });
    it('tenta criar registro com cidadeId invalido', async()=> {
        const res1 = await testServer
            .post('/pessoas')
            .send({
                cidadeId: 'teste',
                email: 'email@gmail.com',
                nomeCompleto: 'nomealeatorio123'
            });
            
            expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
            expect(res1.body).toHaveProperty('errors.body.cidadeId');
        });
        it('tenta criar registro sem enviar nenhuma propriedade', async () =>{

            const res1 = await testServer
            .post('/pessoas')
            .send({});

            expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
            expect(res1.body).toHaveProperty('errors.body.email');
            expect(res1.body).toHaveProperty('errors.body.cidadeId');
            expect(res1.body).toHaveProperty('errors.body.nomeCompleto');
        });
});
