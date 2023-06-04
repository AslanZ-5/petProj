export const enum Role {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  DOCTOR = 'DOCTOR',
  CLIENT = 'CLIENT',
  UNVERIFIED_CLIENT = 'UNVERIFIED_CLIENT'
}

export interface IAuthRequest {
  username: string;
  password: string;
}

export interface IAuthResponse {
  jwtToken: string;
  role: Role;
}
