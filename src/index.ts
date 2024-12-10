import dotenv from 'dotenv';
import { Knex } from './server/database/knex';
import { server } from './server/Server';

dotenv.config();

const PORT = process.env.PORT || 3333;
const IS_LOCALHOST = process.env.IS_LOCALHOST === 'true';

const startServer = () => {
  server.listen(PORT, () => {
    console.log(`App rodando na porta ${PORT}`);
  });
};

if (!IS_LOCALHOST) {
  Knex.migrate.latest()
    .then(() => {
        Knex.seed.run().then(() => startServer())
    })
    .catch((err) => {
      console.error('Erro ao aplicar migrações:', err);
    });
} else {
  startServer();
}
