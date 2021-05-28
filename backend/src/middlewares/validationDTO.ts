import { validate, ValidationError } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { NextFunction, RequestHandler, Response, Request } from 'express';
import { HttpException, errorHandler } from '../exceptions';

export const validationMiddleware = (
  dto: any,
  skipMissingProperties = false, // true when need update
  value: 'body' | 'query' | 'params' = 'body',
): RequestHandler => (req: Request, res: Response, next: NextFunction) => {
  validate(plainToClass(dto, req[value]), {
    validationError: { target: false },
    skipMissingProperties,
    whitelist: true,
    forbidUnknownValues: true,
  }).then((errors: ValidationError[]) => {
    if (errors.length > 0) {
      const message = errors
        .map((error: ValidationError) => {
          if (error.constraints) return Object.values(error.constraints);
          return `${error.property}: validation error`;
        })
        .join(', ');
      errorHandler(new HttpException(400, message), req, res, next);
    } else {
      next();
    }
  });
};