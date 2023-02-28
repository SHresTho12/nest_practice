import { UsersService } from './../../services/users/users.service';
import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}
  @Get('')
  getUsers(): string {
    return JSON.stringify(this.userService.getSeralizedUsers());
  }

  @Get('/:name')
  getByName(@Param('name') name: string) {
    const user = JSON.stringify(this.userService.getUserByUsername(name));
    if (user) {
      return user;
    } else throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }
}
