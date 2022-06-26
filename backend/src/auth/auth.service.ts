import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CryptoService } from '../crypto/crypto.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly crypto: CryptoService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne({ email, password: this.crypto.encode(password) });

    if (!user) {
      return null;
    }

    return user;
  }

  // TODO: add DTO
  generateToken(payload: any) {
    return {
      accessToken: this.jwtService.sign(payload)
    };
  }

  async register(user: any) {
    await this.usersService.create(user);

    return this.generateToken({ username: user.email, sub: user.userId });
  }

  async login(user: any) {
    return this.generateToken({ username: user.email, sub: user.userId });
  }
}
