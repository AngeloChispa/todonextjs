import React, { createContext, useContext, useState, useEffect } from 'react'
import type { User, LoginCredentials, AuthState } from "./types"
import { api } from "./routes/(login)/-login"



const AuthContext = createContext<AuthState | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const solucion = async () => {
        try {
            const { data } = await api.get<User>('/api/user');
            setUser(data);
            setIsAuthenticated(true)
        } catch (err: any) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }

    // Restore auth state on app load
    useEffect(() => {
        solucion()
    }, [])

    // Show loading state while checking auth
    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                Loading...
            </div>
        )
    }

    const login = async (credentials: LoginCredentials) => {
        try {
            await api.get('/sanctum/csrf-cookie');
            await api.post('/login', credentials);

            const { data } = await api.get<User>('/api/user');

            setIsAuthenticated(true);
            setUser(data);

            console.log(isAuthenticated);
        } catch (err: any) {
            setIsLoading(false);
            const message = err.response?.data?.message || 'Error al iniciar sesión';
            console.log(message);
        }
    }

    const logout = () => {
        setUser(null)
        setIsAuthenticated(false)
        localStorage.removeItem('auth-token')
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}