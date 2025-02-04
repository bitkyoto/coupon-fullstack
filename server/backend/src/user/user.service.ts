import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { compare, hash } from 'bcryptjs';
import { DatabaseService } from 'src/database/database/database.service';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService){}
  async createUser(createUserDto: Prisma.UserCreateInput) {
    return await this.databaseService.user.create({
      data:{
        ...createUserDto,
        password: await hash(createUserDto.password, 10)
      }})
  }

  async getAllUsers() {
    return await this.databaseService.user.findMany({})
  }

  async getUser(id: number) {
    return this.databaseService.user.findMany({where: {id}})
  }

  async updateUser(id: number, updateUserDto: Prisma.UserUpdateInput) {
    return await this.databaseService.user.update({
      where: {id},
      data: updateUserDto
    })
  }

  async findOne(username: string, password: string){
    const user = await this.databaseService.user.findUnique({where: {username}})
    if (!user || !(await compare(password, user.password))){
      return null
    }
    return user
  }
  async remove(id: number) {
    return await this.databaseService.user.delete({where: {id}})
  }
}
