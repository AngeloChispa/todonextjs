export interface LoginCredentials {
  email: string;
  password: string;
  remember?: boolean;
}

export interface User {
    id: number;
    name: string;
    email: string;
}