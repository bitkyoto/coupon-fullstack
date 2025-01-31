import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShopService } from './shop.service';
import { Prisma } from '@prisma/client';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Post()
  create(@Body() createShopDto: Prisma.ShopCreateInput) {
    return this.shopService.create(createShopDto);
  }

  @Get()
  findAll() {
    return this.shopService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shopService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShopDto: Prisma.ShopUpdateInput) {
    return this.shopService.update(+id, updateShopDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shopService.remove(+id);
  }
}
