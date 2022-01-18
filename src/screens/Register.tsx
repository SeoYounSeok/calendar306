import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimensions';
import TextInput from '../components/atoms/TextInput';
import {registerService} from '../service/userService';

const Register = ({navigation}: any) => {
  const [inputId, setInputId] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputAddress, setInputAddress] = useState('');

  const registProps = {
    userId : inputId,
    name: inputName,
    password: inputPassword,
    address: inputAddress,
  };
  const onPressRegister = () => {
    !inputId
      ? Alert.alert('아이디를 입력해주세요')
      : !inputName
      ? Alert.alert('이름을 입력해주세요.')
      : !inputPassword
      ? Alert.alert('비밀번호를 입력해주세요.')
      : !inputAddress
      ? Alert.alert('주소를 입력해주세요.')
      : (registerService(registProps), navigation.navigate('Calendar'));
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
      <TextInput
          label="ID"
          value={inputId}
          onChangeText={setInputId}
          placeholder="아이디를 입력해주세요."
        />
        <TextInput
          label="이름"
          value={inputName}
          onChangeText={setInputName}
          placeholder="이름을 입력해주세요."
        />
        <TextInput
          label="비밀번호"
          value={inputPassword}
          onChangeText={setInputPassword}
          placeholder="비밀번호를 입력하세요."
        />

        <TextInput
          label="주소"
          value={inputAddress}
          onChangeText={setInputAddress}
          placeholder="주소를 입력하세요."
        />
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

export default Register;
