import { AUTH_TOKEN_LOCAL_STORAGE_KEY } from '../constants';

export const persistAuthToken = (token: string): void => {
  window.localStorage.setItem(AUTH_TOKEN_LOCAL_STORAGE_KEY, token);
};

export const getAuthToken = (): string | null => {
  return window.localStorage.getItem(AUTH_TOKEN_LOCAL_STORAGE_KEY);
};

export const deleteAuthToken = (): void => {
  window.localStorage.removeItem(AUTH_TOKEN_LOCAL_STORAGE_KEY);
};
