export class CustomError extends Error {
    statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        
        // Validate if the status code is a valid HTTP status code
        if (!statusCode || statusCode < 100 || statusCode >= 600) {
            throw new Error("Invalid status code");
        }

        this.statusCode = statusCode;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor); 
    }
}
