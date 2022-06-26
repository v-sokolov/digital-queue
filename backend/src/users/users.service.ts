import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { UserModel } from '../entities/user.entity';
import { EntityRepository } from '@mikro-orm/postgresql';
import { CryptoService } from '../crypto/crypto.service';

export interface User {
  userId: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserModel) private readonly userRepository: EntityRepository<UserModel>,
    private readonly cryptoService: CryptoService
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async findOne(where: Record<string, string>): Promise<User | null> {
    return await this.userRepository.findOne(where);
  }

  async create(data: any): Promise<User> {
    if (await this.findOne({ email: data.email })) {
      throw new ConflictException('User with this email already exists!');
    }

    const encodedPassword = this.cryptoService.encode(data.password);

    const createResult = await this.userRepository.create({ ...data, password: encodedPassword });

    await this.userRepository.persistAndFlush(createResult);

    return createResult;
  }
}
