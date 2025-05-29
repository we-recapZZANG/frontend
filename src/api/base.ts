// src/api/authenticatedApi.ts (세션 필요할 때)
import axios from 'axios';

export const authenticatedApi = axios.create({
  baseURL: 'https://fb3f-2001-e60-9279-5aa0-640a-5678-b7ec-7151.ngrok-free.app',
  withCredentials: true,
});

export const publicApi = axios.create({
  baseURL: 'https://fb3f-2001-e60-9279-5aa0-640a-5678-b7ec-7151.ngrok-free.app',
  withCredentials: true,
});
