import React from 'react';
import {Switch} from 'react-native-paper';

type SwitchProps = {
  value: boolean;
  onValueChange: any;
};

const IsSwitch = ({value, onValueChange}: SwitchProps) => {
  return (
    <Switch
      value={value}
      onValueChange={() => {
        !value;
        onValueChange;
      }}
    />
  );
};

IsSwitch.defaultProps = {
  value: false,
};

export default IsSwitch;
