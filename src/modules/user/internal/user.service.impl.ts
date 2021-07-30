import { Injectable } from '@nestjs/common';
import { User } from '../model/user'
import { UserService } from '../user.service'

@Injectable()
export class UserServiceImpl implements UserService {
  getHello(): string {
    return 'User Controller!';
  }

  getUsers(): User[] {
    return [{name: "John", email: "John@gmail.com"}];
  }
}
