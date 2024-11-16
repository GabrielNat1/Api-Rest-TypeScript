import express, { Request, Response } from 'express';
import 'dotenv/config';


import { rounter } from './routes';

const server = express();

server.use(rounter);




export { server };
