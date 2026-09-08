

export interface User {
  id: string;
  userName: string;
  email: string;
  isActive: boolean;
  isAdmin: boolean;
}

export interface RegisterPayload {
  userName: string;
  password: string;
  email: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}
export interface LoginPayload {
  email: string;
  password: string;
}