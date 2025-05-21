// src/api/authenticatedApi.ts (세션 필요할 때)
import axios from 'axios';

export const authenticatedApi = axios.create({
  baseURL: 'https://192.0.0.2:8443',
  withCredentials: true,
});

export const publicApi = axios.create({
  baseURL: 'https://192.0.0.2:8443',
});
