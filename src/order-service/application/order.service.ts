import { AppError } from '../../helper/error.handling';
import { OrderRepository } from '../domain/order.repository';
import OrderModel from '../infrastructure/model/order.model';


class OrderService implements OrderRepository {
    async create(dto: Omit<OrderModel['_attributes'], 'id'>): Promise<OrderModel> {
        const data = await OrderModel.create(dto)
        return data
    };
    async getAll(): Promise<OrderModel[]> {
        const data = await OrderModel.findAll()
        if(data.length == 0) throw new AppError('Data tidak ditemukan', 404, 'ORDER-02');
        return data
    };
    async getDetailById(id: number): Promise<OrderModel> {
        const data =  await OrderModel.findOne({
            where: { id },
        })
        if(!data) throw new AppError('Data tidak ditemukan', 404, 'ORDER-03');
        return data
    }
}

export default new OrderService();