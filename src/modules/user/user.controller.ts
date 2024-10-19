import { Body, Controller, Get, Put, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUser() {
    return this.userService.getUser()
  }

  @Put()
  async putUser(@Body() body: {
    user: {
      name: string,
    }
  }) {

    return this.userService.putUser(body.user.name)
  }
}
