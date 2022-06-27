import { AuthResponse } from '@digital-queue/shared/dist/contracts';

export class AuthResponseDto implements AuthResponse {
  accessToken: string;

  constructor(token: string) {
    this.accessToken = token;
  }
}
