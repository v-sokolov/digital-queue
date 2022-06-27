import { LoginBody } from '@digital-queue/shared/dist/contracts';

export class LoginRequestDto implements LoginBody {
  email!: string;
  password!: string;
}
