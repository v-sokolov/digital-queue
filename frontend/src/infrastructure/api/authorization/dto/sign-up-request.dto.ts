import { RegisterBody } from '@digital-queue/shared/dist/contracts';

export class SignUpRequestDto implements RegisterBody {
  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;
}
