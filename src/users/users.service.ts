import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      username: 'username_1',
      password: 'password1',
    },
    {
      id: 2,
      username: 'username_2',
      password: 'password1',
    },
    {
      id: 3,
      username: 'username_3',
      password: 'password1',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}