import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {
  }

  async signIn(username: string, password: string) {
    const user = await this.usersService.findOne(username);
    if (!user || user?.password !== password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
      username: user.username
    };
  }

  register(name: string, password: string) {
    const payload = { username: name, sub: name };
    return {
      access_token: this.jwtService.sign(payload)
    };
  }
  validate(payload) {
    return { userId: payload.sub, username: payload.username };
  }
}