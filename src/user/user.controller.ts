import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('api/v1')
@UseGuards(AuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) { }
  @Post('add-user')
  async addUser(
    @Body('name') name: string,
    @Body('email') email: string,
  ) {
    const user = await this.userService.addUser(name, email);
    console.log(user);
    return user;
  }

  @Get('get-users')
  async getUsers() {
    return this.userService.getUsers()
  }
  @Get('get-user/:id')
  async getUser(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }
}
