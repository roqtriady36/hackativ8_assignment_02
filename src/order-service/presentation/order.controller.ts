import { Request, Response, } from 'express';
import orderService from '../application/order.service';
import { AppError } from '../../helper/error.handling';
import API_PRODUCT_SERVICE from '../shared/api.config';

class OrderController {

    async create(req: Request, res: Response): Promise<Response> {
        const { quantity, customerName, productId } = req.body;
        try {
            await API_PRODUCT_SERVICE().get(`/products/${productId}`)
            const data = await orderService.create({
                quantity, customerName, status: 'dibuat', productId
            })
            return res.status(201).json({
                status: 'SUKSES',
                message: 'Order berhasil dibuat',
                data
            })
        } catch (err: any) {
            if(err.response.data) return res.json(err.response.data)
            return res.status(400).json({
                status: err.errorCode,
                errors: [
                    err.message
                ]
            })
        }
    }

    async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const data = await orderService.getAll()
            return res.status(200).json({
                status: 'SUKSES',
                message: 'List Data Order',
                data
            })
        } catch (err: any) {
            return res.status(err.statusCode).json({
                status: err.errorCode,
                errors: [
                    err.message
                ]
            })
        }
    }

    async getById(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const data = await orderService.getDetailById(Number(id))
            return res.status(200).json({
                status: 200,
                message: `Detail Order id ${id}`,
                data
            })
        } catch (err: any) {
            return res.status(err.statusCode).json({
                status: err.errorCode,
                errors: [
                    err.message
                ]
            })
        }
    }

}

export default new OrderController();