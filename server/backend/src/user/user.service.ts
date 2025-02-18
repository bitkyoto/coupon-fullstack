import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database/database.service';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService){}
  create(createUserDto: Prisma.UserCreateInput) {
    return this.databaseService.user.create({data: createUserDto})
  }

  findAll() {
    return this.databaseService.user.findMany({})
  }

  findOne(id: number) {
    return this.databaseService.user.findMany({where: {id}})
  }

  update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    return this.databaseService.user.update({
      where: {id},
      data: updateUserDto
    })
  }

  remove(id: number) {
    return this.databaseService.user.delete({where: {id}})
  }
}
