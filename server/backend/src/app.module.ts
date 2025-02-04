import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database/database.module';
import { ShopModule } from './shop/shop.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import {PassportModule} from '@nestjs/passport'
import {JwtModule} from '@nestjs/jwt'
@Module({
  imports: [DatabaseModule, ShopModule, ProductModule, UserModule, AuthModule, PassportModule],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
