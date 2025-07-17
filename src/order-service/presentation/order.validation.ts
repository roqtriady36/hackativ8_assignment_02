import { body, param } from 'express-validator';

export const createOrderValidator = [
  body('customerName').notEmpty().withMessage('Nama customer tidak boleh kosong'),
  body('productId')
    .notEmpty().withMessage('Product tidak boleh kosong')
    .isNumeric().withMessage('Format product salah'),
  body('quantity')
    .isLength({min: 1}).withMessage('Order minimal 1'),
];

export const getByIdOrderValidator = [
  param('id').isInt().withMessage('Format id salah'),
];