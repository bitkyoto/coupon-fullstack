import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    
    //   @Post()
    //   create(@Body() createUserDto: Prisma.UserCreateInput) {
    //     return 'hello'
    //   }
    
      @Get()
      findAll() {
        return 'hello';
      }
    
      @Get(':id')
      findOne(@Param('id') id: string) {
        // return this.userService.findOne(+id);
      }
    
    //   @Patch(':id')
    //   update(@Param('id') id: string, @Body() updateUserDto: Prisma.UserUpdateInput) {
    //     // return this.userService.update(+id, updateUserDto);
    //   }
    
      @Delete(':id')
      remove(@Param('id') id: string) {
        // return this.userService.remove(+id);
      }
}
