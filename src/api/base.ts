// src/api/authenticatedApi.ts (세션 필요할 때)
import axios from 'axios';

export const publicApi = axios.create({
  baseURL: 'https://1d9d-2001-e60-8863-c585-7088-658-d71a-d320.ngrok-free.app',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
  },
});

export const authenticatedApi = axios.create({
  baseURL: 'https://1d9d-2001-e60-8863-c585-7088-658-d71a-d320.ngrok-free.app',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
  },
});
