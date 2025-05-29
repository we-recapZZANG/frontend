// src/api/authenticatedApi.ts (세션 필요할 때)
import axios from 'axios';

export const publicApi = axios.create({
  baseURL: 'https://7ded-2001-e60-9275-ff7b-6817-bfe1-6346-a280.ngrok-free.app',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': '69420',
  },
});

export const authenticatedApi = axios.create({
  baseURL: 'https://7ded-2001-e60-9275-ff7b-6817-bfe1-6346-a280.ngrok-free.app',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': '69420',
  },
});
