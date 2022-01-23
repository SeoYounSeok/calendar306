import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 180000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default API;
