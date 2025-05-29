// src/api/authenticatedApi.ts (세션 필요할 때)
import axios from 'axios';

export const publicApi = axios.create({
  baseURL: 'https://bc72-2001-e60-8863-c585-6d66-31ac-b66c-39af.ngrok-free.app',
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': '69420',
  },
});

export const authenticatedApi = axios.create({
  baseURL: 'https://bc72-2001-e60-8863-c585-6d66-31ac-b66c-39af.ngrok-free.app',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': '69420',
  },
});
