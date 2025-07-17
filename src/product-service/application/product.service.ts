import { AppError } from '../../helper/error.handling';
import { ProductRepository } from '../domain/product.repository';
import ImageModel from '../infrastructure/model/image.model';
import ProductModel from '../infrastructure/model/product.model'
import RatingModel from '../infrastructure/model/rating.model';


class ProductService implements ProductRepository {
    async getAll(): Promise<ProductModel[]> {
        const data = await ProductModel.findAll()
        if(data.length == 0) throw new AppError('Data tidak ditemukan', 404, 'PRODUCT-01');
        return data
    };
    async getDetailById(id: number): Promise<ProductModel> {
        const data =  await ProductModel.findOne({
            where: { id },
            include: [
                { 
                    model: ImageModel,
                    attributes: ['id', 'url']
                },                
                { 
                    model: RatingModel,
                    attributes: ['id', 'rate', 'count']
                },
            ]
        })
        if(!data) throw new AppError('Data tidak ditemukan', 404, 'PRODUCT-02');
        return data
    }
}

export default new ProductService();