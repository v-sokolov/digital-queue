interface Basic {
  email: string;
  password: string;
}

export interface LoginBody extends Basic {}

export interface RegisterBody extends Basic {
  firstName: string;
  lastName: string;
}

export interface AuthResponse {
  accessToken: string;
}
