import { AuthResponse } from '@digital-queue/shared/src/contracts';

export class AuthResponseDto implements AuthResponse {
  accessToken: string;

  constructor(token: string) {
    this.accessToken = token;
  }
}
