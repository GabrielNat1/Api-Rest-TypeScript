import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe('Pessoas - DeleteById', () => {
    let cidadeId: number | undefined = undefined;
    beforeAll(async () => {
        const resCidade = await testServer 
        .post('/cidades') 
        .send({  nome: 'Cidade Teste' });

        cidadeId = resCidade.body;
    });


    it('Deleta Registro', async () => {
        const res1 = await testServer 
        .post('/pessoas')
        .send({
            cidadeId,
            email: 'testedelete@gmail.com',
            nomeCompleto: 'Nome Completo',
        });
        expect(res1.status).toEqual(StatusCodes.CREATED);

        const resApagada = await testServer
        .delete(`/pessoas/${res1.body}`)
        .send();
        expect(resApagada.status).toEqual(StatusCodes.NO_CONTENT);
    });
        it ('Deleta Registro Inexistente', async () => {
            const res1 = await testServer
            .delete('/pessoas/999999')
            .send();

            expect(res1.status).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
            expect(res1.body).toHaveProperty('Erros default');
    });
});