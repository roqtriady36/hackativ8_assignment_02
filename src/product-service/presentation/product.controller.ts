import { Request, Response, } from 'express';
import productService from '../application/product.service';

class ProductController {

    async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const data = await productService.getAll()
            return res.status(200).json({
                status: 'SUKSES',
                message: 'List Data Products',
                data
            })
        } catch (err: any) {
            return res.status(err.statusCode).json({
                status: err.errorCode,
                error: [
                    err.message
                ]
            })
        }
    }

    async getById(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const data = await productService.getDetailById(Number(id))
            return res.status(200).json({
                status: 200,
                message: `Detail Product id ${id}`,
                data
            })
        } catch (err: any) {
            return res.status(err.statusCode).json({
                status: err.errorCode,
                error: [
                    err.message
                ]
            })
        }
    }

}

export default new ProductController();