import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserServiceImpl } from './service/internal/user.service.impl';

@Module({
  controllers: [UserController],
  providers: [UserServiceImpl],
})
export class UserModule {}
