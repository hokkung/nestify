import { Controller, Get } from '@nestjs/common';
import { UserServiceImpl } from './internal/user.service.impl';
import { User } from './model/user';
import { Response } from '../common/model/Response'

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserServiceImpl) {}

  @Get()
  getUsers(): Response<User> {
    const response = {
      data: this.userService.getUsers()
    }
    return response;
  }

  @Get("/hello")
  getHello(): string {
      return this.userService.getHello();
  }
}
