import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from '../shared/guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  // TODO: DTO
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }

  @Post('register')
  // TODO: DTO
  async register(@Body() body: any) {
    return this.authService.register(body);
  }
}
