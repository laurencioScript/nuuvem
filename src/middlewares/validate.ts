import { Request, Response, NextFunction } from "express";
import * as yup from "yup";
import { ObjectShape } from "yup";
import { HTTP } from "../utils/constants";

type ValdationMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => void;
type Path = "body" | "query" | "params";
type FailWrapper = {
    [k: string]: string;
}

export function validate(shape: ObjectShape, path: Path): ValdationMiddleware {
    return async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
        const schema = yup.object().shape(shape);

        try{
            const validData = await schema.validate(req[path], {
                abortEarly: false
            });

            req[path] = validData;

            next();
        }catch(err){
            console.error(err);
            const data = (err as yup.ValidationError).inner.reduce(
                (acc, error) => {
                    if(error.path) acc[error.path] = error.message;
                    return acc;
                },
                {} as FailWrapper
            );

            res.status(HTTP.UnprocessableEntity).json({ status: "fail", data});
        }
    };
}

export const paginationSchema = {
    page: yup.number().integer().positive().default(1),
    limit: yup.number().integer().positive().max(30).default(10)
}

export const userSchema = {
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required()
}