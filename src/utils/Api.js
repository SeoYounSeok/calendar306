import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const token = async () => {
//   const access_token = await AsyncStorage.getItem('@token');
//   return access_token;
// };
const API = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 180000,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: 'Bearer' + token(),
  },
  withCredentials: true,
});

export default API;
