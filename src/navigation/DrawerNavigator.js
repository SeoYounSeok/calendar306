import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Calendar from '../screens/Calendar';
import Memo from '../screens/Memo';
import Schedule from '../screens/Schedule';
import DrawerContent from '../screens/DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Calendar"
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Calendar"
        component={Calendar}
        options={{drawerLabel: 'calendar', headerShown: false}}
      />
      <Drawer.Screen
        name="Memo"
        component={Memo}
        options={{drawerLabel: 'Memo', headerShown: false}}
      />
      <Drawer.Screen
        name="Schedule"
        component={Schedule}
        options={{drawerLabel: 'Schedule', headerShown: false}}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
