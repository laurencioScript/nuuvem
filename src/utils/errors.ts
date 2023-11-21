import { HTTP } from './constants';

export class HTTPException extends Error {
    public readonly name: string;
    
    public statusCode: HTTP;

    constructor(message: string, statusCode: HTTP){
        super(message);
        this.name = this.constructor.name;
        this.statusCode = statusCode;
    }
}

export class AppError extends HTTPException {
    public readonly name: string;

    constructor(message: string, statusCode: HTTP = 400){
        super(message, statusCode);
        this.name = this.constructor.name;
    }
}