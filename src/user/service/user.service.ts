import { User } from '../model/user'

export interface UserService {
  getHello(): string
  getUsers(): User[]
}
