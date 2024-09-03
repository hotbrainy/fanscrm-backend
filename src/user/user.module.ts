import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { JwtService } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '../auth/auth.guard';

@Module({

  imports: [SequelizeModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, JwtService/* , {
    provide: APP_GUARD,
    useClass: AuthGuard,
  } */]
})
export class UserModule { }
