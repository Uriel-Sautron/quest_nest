import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':id')
  get(@Param('id') id: number) {
    return this.usersService.getUser(id);
  }

  @Post()
  create(@Body() user: User) {
    return this.usersService.saveUser(user);
  }

  @Put()
  update(@Body() user: User) {
    return this.usersService.saveUser(user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    this.usersService.deleteUser(id);
    return;
  }
}
