import { LoginBody } from '@digital-queue/shared/src/contracts';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ValidateUserDto implements LoginBody {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @IsString()
  password!: string;

  constructor({ email, password }: LoginBody) {
    this.email = email;
    this.password = password;
  }
}
