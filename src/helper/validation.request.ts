import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

export const requestValidate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => error.msg);
    return res.status(422).json({
      status: 'Error-Validator',
      errors: errorMessages 
    });
  }
  next();
};