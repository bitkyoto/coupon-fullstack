import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database/database.service';

@Injectable()
export class ProductService {
  constructor(private readonly databaseService: DatabaseService){}
  async create(createProductDto: Prisma.ProductCreateInput) {
    return await this.databaseService.product.create({data: createProductDto})
  }

  async findAll() {
    return await this.databaseService.product.findMany({});
  }

  async findOne(id: number) {
    return await this.databaseService.product.findUnique({where: {id}})
  }

  async update(id: number, updateProductDto: Prisma.ProductUpdateInput) {
    return `This action updates a #${id} product`;
  }

  async remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
