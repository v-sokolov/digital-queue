import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';

// TODO: create global nest-filter
// TODO: create global nest-interceptor

@Module({
  imports: [MikroOrmModule.forRoot(), AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
