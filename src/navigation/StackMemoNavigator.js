import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Memo from '../screens/Memo';
import MemoDetail from '../screens/MemoDetail';

const Stack = createStackNavigator();

const StackMemoNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MemoMain"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        cardOverlayEnabled: false,
        presentation: 'modal',
      }}>
      <Stack.Screen name="MemoMain" component={Memo} />
      <Stack.Screen name="MemoDetail" component={MemoDetail} />
    </Stack.Navigator>
  );
};

export default StackMemoNavigator;
