import { Router } from 'express';
import orderController from './order.controller';
import { requestValidate } from '../../helper/validation.request';
import { createOrderValidator, getByIdOrderValidator } from './order.validation';

export interface RouterInterface {
    routes(): void;
}

class OrderRouter implements RouterInterface {

    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    };

    public routes(): void {
        this.router.post('/', createOrderValidator, requestValidate, orderController.create)
        this.router.get('/', orderController.getAll)
        this.router.get('/:id', getByIdOrderValidator, requestValidate, orderController.getById)
    };

}

export default new OrderRouter().router;