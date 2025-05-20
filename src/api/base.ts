// src/api/authenticatedApi.ts (세션 필요할 때)
import axios from 'axios';

export const authenticatedApi = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
});

export const publicApi = axios.create({
  baseURL: 'http://localhost:8080',
});
