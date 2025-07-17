import { Request, Response, NextFunction } from "express";

export class AppError extends Error {
  public statusCode: number;
  public errorCode: string

  constructor(message: string, statusCode = 500, errorCode= 'Belum Terdefinisi!!!') {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;

    Error.captureStackTrace(this, this.constructor);
  }
}