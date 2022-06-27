import axiosClient from '../shared/base.api-service';
import { AuthResponse } from '@digital-queue/shared/dist/contracts';
import { AuthResponseDto, LoginRequestDto, SignUpRequestDto } from './dto';

export const singUpRequest = async (body: SignUpRequestDto): Promise<AuthResponseDto> => {
  const { data } = await axiosClient.post<AuthResponse>('auth/register', body);

  return new AuthResponseDto(data.accessToken);
};

export const loginRequest = async (body: LoginRequestDto): Promise<AuthResponseDto> => {
  const { data } = await axiosClient.post<AuthResponse>('auth/login', body);

  return new AuthResponseDto(data.accessToken);
};
