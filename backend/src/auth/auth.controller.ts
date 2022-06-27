import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from '../shared/guards/local-auth.guard';
import { AuthResponseDto } from './dto/auth-response.dto';
import { RegisterBodyDto } from './dto/register-body.dto';
import { UserModel } from '../entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: { user: UserModel }): Promise<AuthResponseDto> {
    return new AuthResponseDto(await this.authService.login(req.user));
  }

  @Post('register')
  async register(@Body() body: RegisterBodyDto): Promise<AuthResponseDto> {
    return new AuthResponseDto(await this.authService.register(body));
  }
}
