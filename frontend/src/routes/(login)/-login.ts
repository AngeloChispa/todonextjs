import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
    withXSRFToken: true,
    headers: {
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

    },
});

/* export const login = async (credentials: LoginCredentials) => {
    await api.get('/sanctum/csrf-cookie');

    await api.post('/login', credentials);

    const { data } = await api.get<User>('/api/user');
    return data;
} */

/* async logout(): Promise<void> {
      await api.post('/logout');
    } */

