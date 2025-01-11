import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";


export const ensureAuthenticated: RequestHandler = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            errors: {default: 'Não authenticado'}
        })
    }

    const [type,token] = authorization.split(' ');
    
    if (type !== 'Bearer') {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            errors: {default: 'Não authenticado'}
        })
    }

    if (token !== 'teste.teste.teste') {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            errors: {default: 'Não authenticado'}
        })
    }

    return next();
}
