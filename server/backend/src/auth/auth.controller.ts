import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Prisma } from '@prisma/client';
import { Request } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/auth.request';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
      return await this.authService.login(req.user)
    }


    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
      return await this.authService.register(createUserDto)
    }
  

    @Get()
    async findAll() {
      return 'hello';
    }
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async findOne(@Param('id') id: string) {
      return await this.authService.userService.getUser(+id)
      // return this.userService.findOne(+id);
    }
  
  //   @Patch(':id')
  //   update(@Param('id') id: string, @Body() updateUserDto: Prisma.UserUpdateInput) {
  //     // return this.userService.update(+id, updateUserDto);
  //   }
  
    @Delete(':id')
    async remove(@Param('id') id: string) {
      // return this.userService.remove(+id);
    }
}
