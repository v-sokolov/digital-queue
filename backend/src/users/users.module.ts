import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { UserModel } from '../entities/user.entity';
import { CryptoService } from '../crypto/crypto.service';

@Module({
  imports: [MikroOrmModule.forFeature([UserModel])],
  providers: [UsersService, CryptoService],
  exports: [UsersService]
})
export class UsersModule {}
