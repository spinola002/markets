import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import Product from './product.interface';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') private readonly productModel: Model<Product>) { }

  async create(createProductDto: any): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    const err = await createdProduct.validate();
    if (err != null) {
      throw err;
    }
    return await createdProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }

}
