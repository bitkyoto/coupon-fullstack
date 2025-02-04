import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './strategy/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { secret } from './constants';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
    controllers: [AuthController],
    providers  : [AuthService, LocalStrategy, JwtStrategy],
    imports    : [UserModule, PassportModule, JwtModule.register({
        secret: secret,
        signOptions: { expiresIn: '60s' },
      }),],
    exports    : [AuthService]
})
export class AuthModule {}
