import { ConflictException, Injectable } from '@nestjs/common';

export interface User {
  userId: number;
  email: string;
  password: string;
}

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      userId: 1,
      email: 'john',
      password: 'changeMe'
    },
    {
      userId: 2,
      email: 'maria',
      password: 'guess'
    }
  ];

  private userId: number = 2;

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }

  async create(data: Omit<User, 'userId'>): Promise<User> {
    if (await this.findOne(data.email)) {
      throw new ConflictException('User with this email already exists!');
    }

    this.userId = this.userId++;
    this.users.push({ ...data, userId: this.userId });
    return this.findOne(data.email);
  }
}
