import { RegisterBody } from '@digital-queue/shared/src/contracts';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterBodyDto implements RegisterBody {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @IsString()
  firstName!: string;

  @IsNotEmpty()
  @IsString()
  lastName!: string;

  @IsNotEmpty()
  @IsString()
  password!: string;
}
