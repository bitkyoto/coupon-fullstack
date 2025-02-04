import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database/database.service';

@Injectable()
export class ShopService {
  constructor(private readonly databaseService: DatabaseService){}
  async create(createShopDto: Prisma.ShopCreateInput) {
    return await this.databaseService.shop.create({data: createShopDto});
  }

  async findAll() {
    return await this.databaseService.shop.findMany({});
  }

  async findOne(id: number) {
    return await this.databaseService.shop.findUnique({
      where: {id}
    });
  }

  async findProducts(id: number){
    return await this.databaseService.product.findMany({
      where: {shopId: id}
    })

  }
  async update(id: number, updateShopDto: Prisma.ShopUpdateInput) {
    return this.databaseService.shop.update({
      where: {id},
      data: updateShopDto
    });
  }

  async remove(id: number) {
    return this.databaseService.shop.delete({
      where: {id}
    });
  }
}
