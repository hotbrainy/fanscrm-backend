import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) { }

  async addUser(name: string, email: string): Promise<User> {
    const user = new User();
    user.name = name;
    user.email = email;
    return user.save();
  }

  async getUserById(id: number): Promise<User> {
    return this.userModel.findByPk(id);
  }

  async getUsers(): Promise<User[]> {
    return this.userModel.findAll();
  }
} 
