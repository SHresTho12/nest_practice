import { SerializedUser } from './../../types/Users';
import { UsersService } from './../../services/users/users.service';
import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  UseInterceptors,
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
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/:name')
  getByName(@Param('name') name: string) {
    const user = this.userService.getUserByUsername(name);
    if (user) {
      return new SerializedUser(user);
    } else throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }
}
