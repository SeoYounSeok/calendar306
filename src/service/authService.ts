import API from '../utils/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

type loginProps = {
  userId: string;
  password: string;
};

type Token = string;

// refreshToken - server
export interface AuthTokens {
  accessToken: Token;
  refreshToken: Token;
}

const setToken = async (Token: Token) => {
  await AsyncStorage.setItem('@token', Token);
};

export const loginService = async ({...props}: loginProps) => {
  await API.post('/auth/login', {
    userId: props.userId,
    password: props.password,
  })
    .then(function (response) {
      console.log(response);
      setToken(response.data.body);
    })
    .catch(function (error) {
      console.log(error);
    });
};
