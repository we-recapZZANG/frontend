// src/api/authenticatedApi.ts (세션 필요할 때)
import axios from 'axios';

export const publicApi = axios.create({
  baseURL: 'https://8c43-2001-e60-8e61-6894-8c56-1b34-b22e-3e41.ngrok-free.app',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
  },
});

export const authenticatedApi = axios.create({
  baseURL: 'https://8c43-2001-e60-8e61-6894-8c56-1b34-b22e-3e41.ngrok-free.app',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
  },
});
