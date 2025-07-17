import ProductModel from '../infrastructure/model/product.model';

export interface ProductRepository {
    getAll(): Promise<ProductModel[]>;
    getDetailById(id: number): Promise<ProductModel | null>;
}