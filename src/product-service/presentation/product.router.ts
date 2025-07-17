import { Router } from 'express';
import productController from '../presentation/product.controller';
import { requestValidate } from '../../helper/validation.request';
import { getByIdProductValidator } from './product.validation';

export interface RouterInterface {
    routes(): void;
}

class ProductRouter implements RouterInterface {

    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    };

    public routes(): void {
        this.router.get('/', productController.getAll)
        this.router.get('/:id', getByIdProductValidator, requestValidate, productController.getById)
    };

}

export default new ProductRouter().router;