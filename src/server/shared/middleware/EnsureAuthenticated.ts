import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { JWTService } from "../services";


export const ensureAuthenticated: RequestHandler = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        console.warn('Authorization header missing');
        return res.status(StatusCodes.UNAUTHORIZED).json({
            errors: {default: 'Não authenticado'}
        })
    }

    const [type,token] = authorization.split(' ');
    
    if (type !== 'Bearer') {
        console.warn('Invalid authorization type');
        return res.status(StatusCodes.UNAUTHORIZED).json({
            errors: {default: 'Não authenticado'}
        })
    }

    const jwtData = JWTService.verify(token);
    if (jwtData === 'JWT_SECRET_NOT_FOUND') {
        console.error('JWT secret not found');
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {default: 'Erro ao verificar token'}
        })
    } else if (jwtData === 'INVALID_TOKEN') {
        console.warn('Invalid token');
        return res.status(StatusCodes.UNAUTHORIZED).json({
            errors: {default: 'Token inválido'}
        })
    }

    req.headers.idUsuario = jwtData.uid.toString();

    return next();
}
