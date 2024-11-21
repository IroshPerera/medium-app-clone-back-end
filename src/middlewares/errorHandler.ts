import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../utils/CustomError';

const errorHandler = (
    err: Error | CustomError,  
    req: Request,
    res: Response,
    next: NextFunction
): Response => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({
            message: err.message,
        });
    }

    return res.status(500).json({
        message: 'Internal Server Error',
    });
};

export default errorHandler;
