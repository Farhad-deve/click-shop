

export interface User {
  id: string;
  userName: string;
  email: string;
  isActive: boolean;
  isAdmin: boolean;
}

export interface AdminUser {
  _id: string;
  userName: string;
  email: string;
  isActive: boolean;
  isAdmin: boolean;
  createdAt?: string;
  orders?: string[];
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

export interface OrderProduct {
  name: string;
  image: string;
  price: number;
  quantity: number;
  _id: string;
}

export interface Order {
  _id: string;
  userId: string;
  products: OrderProduct[];
  createdAt: string;
  updatedAt: string;
}