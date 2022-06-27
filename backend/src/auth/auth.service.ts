import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CryptoService } from '../crypto/crypto.service';
import { RegisterUserInterface } from './interfaces/register-user.interface';
import { UserModel } from '../entities/user.entity';
import { GenerateTokenPayloadInterface } from './interfaces/generate-token-payload.interface';
import { ValidateUserPayload } from './interfaces/validate-user-payload';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly crypto: CryptoService
  ) {}

  public async validateUser({ email, password }: ValidateUserPayload): Promise<UserModel | null> {
    return await this.usersService.findOne({ email, password: this.crypto.encode(password) });
  }

  private generateToken(payload: GenerateTokenPayloadInterface) {
    return this.jwtService.sign(payload);
  }

  public async register(user: RegisterUserInterface): Promise<string> {
    const createdUser = await this.usersService.create(user);

    return this.generateToken({ email: user.email, userId: createdUser.userId });
  }

  public async login(user: UserModel): Promise<string> {
    return this.generateToken({ email: user.email, userId: user.userId });
  }
}
