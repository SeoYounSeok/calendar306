import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 180000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

API.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('@token')
    console.log(token)
    if(token) {
      config.headers.Authorization = 'Bearer ' + token
      //console.log(config.headers.Authorization)
    }
    return config
  },
  error => {
    return Promise.reject(error)
}
)

export default API;
