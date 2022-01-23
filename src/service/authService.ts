import API from '../utils/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

type loginProps = {
  userId: string;
  password: string;
};

type Token = string;

// 아직 사용되지 않음.
export interface AuthTokens {
  accessToken: Token;
  refreshToken: Token;
}

const saveToken = (Token: Token) => {
  AsyncStorage.setItem('Token', Token);
};

export const loginService = async ({...props}: loginProps) => {
  await API.post('/auth/login', {
    userId: props.userId,
    password: props.password,
  })
    .then(function (response) {
      console.log(response);
      saveToken(response.data.body);
    })
    .catch(function (error) {
      console.log(error);
    });
};
