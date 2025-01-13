import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import './shared/services/translations';
import { router } from './routes';


const server = express();


server.use(cors({
    origin: process.env.ENABLE_CORS?.split(';') || [],
}));

server.use(express.json());

server.use(router);


export { server };