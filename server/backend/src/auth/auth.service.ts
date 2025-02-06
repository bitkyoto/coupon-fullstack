import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
import { hash } from 'bcryptjs';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        public readonly userService: UserService, 
        private readonly jwtService: JwtService
    ){}
    async register(data: Prisma.UserCreateInput){
        return await this.userService.createUser(data)
    }
    async login({id, username}){
        const payload = {username, sub: id}
        const user = await this.userService.getUser(id)
        if(user){
            const {id, password, ...data} = user
            return {
                ...data,
                access_token: await this.jwtService.signAsync(payload),
            }

        }
    }
    async validateUser(username_: string, pass: string){
        const user = await this.userService.findOne(username_, pass)
        if (!user){
            return null
        }
        const {id, username} = user
        return {id, username} 
    }
}
