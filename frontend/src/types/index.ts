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

export interface AuthState {
    isAuthenticated: boolean
    user: User | null
    login: (credentials: LoginCredentials) => Promise<void>
    logout: () => void
}