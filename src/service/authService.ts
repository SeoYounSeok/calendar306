import API from '../utils/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

type loginProps = {
  userId: string;
  password: string;
};

type Token = string;
type UseId = string;

// refreshToken - server
export interface AuthTokens {
  accessToken: Token;
  refreshToken: Token;
}

const setToken = async (Token: Token) => {
  await AsyncStorage.setItem('@token', Token);
  console.log('token 저장되었습니다.');
  const asyncToken = await AsyncStorage.getItem('@token');
  console.log(asyncToken);
};

const setUserId = async (userId: UseId) => {
  await AsyncStorage.setItem('@userId', userId);
  console.log('UserId 저장되었습니다.');
  const asyncUserId = await AsyncStorage.getItem('@userId');
  console.log(asyncUserId);
};

export const loginService = async ({...props}: loginProps) => {
  await API.post('/auth/login', {
    userId: props.userId,
    password: props.password,
  })
    .then(async function (response) {
      console.log('authService response');
      await setUserId(props.userId);
      await setToken(response.data.body);
    })
    .catch(async function (error) {
      console.log(error);
    });
};
