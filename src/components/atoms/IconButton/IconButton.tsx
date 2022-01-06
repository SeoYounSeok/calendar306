import React from "react";
import { Colors, IconButton } from 'react-native-paper';
import style from "./style";
import { StyleSheet } from "react-native";

type IconButtonTypes = {
    icon : string,
    onPress : () => {}
}


const Button = ({...props}: IconButtonTypes) => {
    return (
    <IconButton
    icon={props.icon}
    color={Colors.black}
    size={30}
    onPress={props.onPress}
    />
    )
}

const styles = StyleSheet.create({

  });
  

export default Button;

