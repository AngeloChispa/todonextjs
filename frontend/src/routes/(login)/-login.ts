import axios from 'axios'
import type { LoginCredentials, User } from '#/types';

const api = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
    withXSRFToken: true,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
        
    },
});

export const login = async (credentials: LoginCredentials) => {
    await api.get('/sanctum/csrf-cookie');

    await api.post('/login', credentials);

    const { data } = await api.get<User>('/api/user');
    return data;
}

/* async logout(): Promise<void> {
      await api.post('/logout');
    } */

