import { Controller, Get } from '@nestjs/common';
import { UserServiceImpl } from './service/internal/user.service.impl';
import { User } from './model/user';

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserServiceImpl) {}

  @Get()
  getUsers(): User[] {
    return this.userService.getUsers();
  }

  @Get("/hello")
  getHello(): string {
      return this.userService.getHello();
  }
}
