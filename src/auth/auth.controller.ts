import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    console.log(signInDto)
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
  @Post('register')
  async register(@Body() req) {
    return this.authService.register(req.email, req.password);
  }
}