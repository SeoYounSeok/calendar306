import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Alert,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Text} from 'react-native-paper';
import TextInput from '../components/atoms/TextInput';
import {windowHeight, windowWidth} from '../utils/Dimensions';
import {loginService} from '../service/authService';

const Login = ({navigation}: any) => {
  const [inputId, setInputId] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const loginProps = {
    userId: inputId,
    password: inputPassword,
  };

  const onPressLogin = () => {
    !inputId ? Alert.alert('아이디를 입력해주세요.') : null;
    !inputPassword ? Alert.alert('비밀번호를 입력해주세요.') : null;
    loginService(loginProps);
    navigation.navigate('Calendar');
  };
  const onPressRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <TextInput
          label="아이디"
          value={inputId}
          onChangeText={setInputId}
          placeholder="아이디를 입력해주세요."
        />
        <TextInput
          label="비밀번호"
          value={inputPassword}
          onChangeText={setInputPassword}
          placeholder="비밀번호를 입력하세요."
        />
        <TouchableOpacity onPress={onPressLogin}>
          <Text style={styles.touch}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressRegister}>
          <Text style={styles.touch}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: windowHeight,
  },
  body: {
    padding: 15,
  },
  touch: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Login;
