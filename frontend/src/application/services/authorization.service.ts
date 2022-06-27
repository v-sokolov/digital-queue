import { loginRequest, singUpRequest } from '@infrastructure/api/authorization';
import { persistAuthToken } from './local-storage.service';
import { ApplicationResponse, Login, SignUp } from '../interfaces';

export const signUp = async (input: SignUp): Promise<ApplicationResponse> => {
  const response = await singUpRequest(input);

  persistAuthToken(response.accessToken);

  return {
    success: true,
    errors: []
  };
};

export const login = async (input: Login): Promise<ApplicationResponse> => {
  const response = await loginRequest(input);

  persistAuthToken(response.accessToken);

  return {
    success: true,
    errors: []
  };
};
