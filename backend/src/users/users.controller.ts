import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/all')
  getUsers() {
    return this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  getProfile(@Request() req) {
    return req.user;
  }
}
