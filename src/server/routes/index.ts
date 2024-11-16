import { Router } from "express";
import { StatusCodes } from 'http-status-codes';


const rounter = Router();


rounter.post('/teste', (req, res) => {
    console.log(req);
   
    res.status(StatusCodes.ACCEPTED).json(req.body);
    return
})


export { rounter };