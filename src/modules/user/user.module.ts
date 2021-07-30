import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserServiceImpl } from './internal/user.service.impl';

@Module({
  controllers: [UserController],
  providers: [UserServiceImpl],
})
export class UserModule {}
