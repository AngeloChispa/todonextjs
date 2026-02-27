'use client'
import { useEffect } from 'react'


export const getCookie = () => {
    useEffect(() => {
        const prepareCsrf = async () => {
            try {
                
                await fetch('http://localhost:8000/sanctum/csrf-cookie', {
                    method: 'GET',
                    credentials: 'include',
                });
            } catch (error) {
                console.error("Error al obtener la cookie CSRF:", error);
            }
        };
        prepareCsrf();
    }, []);
}