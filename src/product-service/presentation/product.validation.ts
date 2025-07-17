import { body, param } from 'express-validator';

export const getByIdProductValidator = [
  param('id').isInt().withMessage('Format id salah'),
];