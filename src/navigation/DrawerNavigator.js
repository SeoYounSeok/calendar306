import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Calendar from '../screens/Calendar';
import Memo from '../screens/Memo';
import Schedule from '../screens/Schedule';
import DrawerContent from '../screens/DrawerContent';
import Login from '../screens/Login';
import Register from '../screens/Register';
import StackMemoNavigator from './StackMemoNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Login"
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Calendar"
        component={Calendar}
        options={{drawerLabel: 'calendar', headerShown: false}}
      />
      <Drawer.Screen
        name="StackMemoNavigator"
        component={StackMemoNavigator}
        options={{drawerLabel: 'StackMemoNavigator', headerShown: false}}
      />
      <Drawer.Screen
        name="Schedule"
        component={Schedule}
        options={{drawerLabel: 'Schedule', headerShown: false}}
      />
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{drawerLabel: 'Login', headerShown: false}}
      />

      <Drawer.Screen
        name="Register"
        component={Register}
        options={{drawerLabel: 'Register', headerShown: false}}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
