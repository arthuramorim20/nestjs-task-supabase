import { Body, Controller, Post } from '@nestjs/common';
import { Users } from './dto/usersDto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('createUser')
  async createNewUser(@Body() user: Users) {
    await this.usersService.createNewUser(user);
  }
}
