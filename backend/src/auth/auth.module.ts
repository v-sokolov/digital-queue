import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies /local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies /jwt.strategy';
import { CryptoService } from '../crypto/crypto.service';
import { AuthController } from './auth.controller';
import { JWT_SECRET } from './constants';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: { expiresIn: '1h' }
    })
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, CryptoService],
  exports: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
