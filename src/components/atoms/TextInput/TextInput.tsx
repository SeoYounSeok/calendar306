import React from 'react';
import {TextInput} from 'react-native-paper';
import {StyleSheet} from 'react-native';

type TextInputProps = {
  label: string;
  value?: string;
  placeholder: string;
  onChangeText: (text: string) => void;
};

const CustomTextInput = ({...props}: TextInputProps) => {
  return (
    <TextInput
      label={props.label}
      value={props.value}
      onChangeText={props.onChangeText}
      placeholder={props.placeholder}
      style={styles.textInput}
    />
  );
};

CustomTextInput.defalutProps = {
  label: '',
  value: '',
  placeholder: '',
};

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: '#ababab',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
});

export default CustomTextInput;
