// src/api/authenticatedApi.ts (세션 필요할 때)
import axios from 'axios';

export const authenticatedApi = axios.create({
  baseURL: 'https://006e-2001-e60-927c-6055-6dc5-1386-89c5-14c9.ngrok-free.app',
  withCredentials: true,
});

export const publicApi = axios.create({
  baseURL: 'https://006e-2001-e60-927c-6055-6dc5-1386-89c5-14c9.ngrok-free.app',
  withCredentials: true,
});
