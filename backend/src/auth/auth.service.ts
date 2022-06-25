import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CryptoService } from '../crypto/crypto.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService, private crypto: CryptoService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    // TODO: where: [ email, password: this.crypto.encode(pass)]
    const user = await this.usersService.findOne(email);

    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  generateToken(payload) {
    return {
      accessToken: this.jwtService.sign(payload)
    };
  }

  async register(user: any) {
    // TODO: create user in DB

    await this.usersService.create(user);
    return this.generateToken({ username: user.email, sub: user.userId });
  }

  async login(user: any) {
    // TODO: verify user in DB

    return this.generateToken({ username: user.email, sub: user.userId });
  }
}
