// src/api/authenticatedApi.ts (세션 필요할 때)
import axios from 'axios';

export const publicApi = axios.create({
  baseURL: 'https://2c09-2001-e60-9230-ae69-ecff-f478-ed15-a198.ngrok-free.app',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
  },
});

export const authenticatedApi = axios.create({
  baseURL: 'https://2c09-2001-e60-9230-ae69-ecff-f478-ed15-a198.ngrok-free.app',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
  },
});
