import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // 로컬 서버 주소 설정
});

export default api;
