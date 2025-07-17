import OrderModel from '../infrastructure/model/order.model';

export interface OrderRepository {
    create(data: OrderModel): Promise<OrderModel>;
    getAll(): Promise<OrderModel[]>;
    getDetailById(id: number): Promise<OrderModel | null>;
}