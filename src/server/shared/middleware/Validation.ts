import { RequestHandler } from "express";
import { Maybe, ObjectSchema, ValidationError, AnyObject } from "yup";
import { StatusCodes } from "http-status-codes";

type TProperty = 'body' | 'header' | 'params' | 'query'

type TGetSchema = <T extends Maybe<AnyObject>>(schema: ObjectSchema<T>) => ObjectSchema<T>

type TALLSchemas = Record<TProperty, ObjectSchema<any>>;

type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TALLSchemas>;

type TValidation = (getALLSchemas: TGetAllSchemas) => RequestHandler;


export const Validation: TValidation = (getALLSchemas) => async(req, res, next) => {
    const schemas = getALLSchemas(schema => schema) ;
    const errorsResult: Record<string, Record<string, string>> = {

    };

    Object.entries(schemas).forEach(([key, schema]) => {
    try {
        schema.validateSync(req[key as TProperty], { abortEarly: false });
        
    } catch (err) {
        const yupError = err as ValidationError;
        const errors: Record<string, string> = {};

        yupError.inner.forEach(error => {
            if (error.path === undefined) return;
            errors[error.path] = error.message;
        });

        errorsResult[key] = errors;

    }
    });

    if (Object.entries(errorsResult).length === 0) {
        return next();
    } else {
        return res.status(StatusCodes.BAD_REQUEST).json({ errors: errorsResult })
    }
};
