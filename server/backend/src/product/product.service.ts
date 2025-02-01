import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database/database.service';

@Injectable()
export class ProductService {
  constructor(private readonly databaseService: DatabaseService){}
  create(createProductDto: Prisma.ProductCreateInput) {
    return this.databaseService.product.create({data: createProductDto})
  }

  findAll() {
    return this.databaseService.product.findMany({});
  }

  findOne(id: number) {
    return this.databaseService.product.findUnique({where: {id}})
  }

  update(id: number, updateProductDto: Prisma.ProductUpdateInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
