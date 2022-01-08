import React from 'react';
import {Switch} from 'react-native-paper';

type SwitchProps = {
  value: boolean;
};

const IsSwitch = ({value}: SwitchProps) => {
  return (
    <Switch
      value={value}
      onValueChange={() => {
        !value;
      }}
    />
  );
};

IsSwitch.defaultProps = {
  value: false,
};

export default IsSwitch;
