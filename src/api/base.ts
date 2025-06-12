// src/api/authenticatedApi.ts (세션 필요할 때)
import axios from 'axios';

export const publicApi = axios.create({
  baseURL: 'https://7fbb-2001-e60-8e61-401d-944b-88b4-34e0-befb.ngrok-free.app',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
  },
});

export const authenticatedApi = axios.create({
  baseURL: 'https://7fbb-2001-e60-8e61-401d-944b-88b4-34e0-befb.ngrok-free.app',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
  },
});
