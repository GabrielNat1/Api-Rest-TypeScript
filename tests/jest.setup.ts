import supertest from "supertest";
import { server } from "../src/server/Server";
import { Knex } from "../src/server/database/knex";


<<<<<<< HEAD
beforeAll(async () => {
=======
beforeAll(async() => {
>>>>>>> 5c01b85f5a10c38f2fbecec47be1600ddd8d7019
    await Knex.migrate.latest();
});

afterAll(async () => {
    await Knex.destroy();
});


export const testServer = supertest(server);