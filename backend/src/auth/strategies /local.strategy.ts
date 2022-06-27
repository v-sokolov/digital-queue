import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { UserModel } from '../../entities/user.entity';
import { ValidateUserDto } from '../dto/validate-user.dto';
import { validate as validateInput } from 'class-validator';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<UserModel> {
    const validationErrors = await validateInput(new ValidateUserDto({ email, password }));

    if (validationErrors.length) {
      throw new BadRequestException();
    }

    const user = await this.authService.validateUser({ email, password });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
