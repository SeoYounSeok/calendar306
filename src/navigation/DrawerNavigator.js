import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Calendar from '../screens/Calendar';
import Memo from '../screens/Memo';
import Schedule from '../screens/Schedule';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Calendar">
      <Drawer.Screen
        name="Calendar"
        component={Calendar}
        options={{drawerLabel: 'calendar'}}
      />
      <Drawer.Screen
        name="Memo"
        component={Memo}
        options={{drawerLabel: 'Memo'}}
      />
      <Drawer.Screen
        name="Schedule"
        component={Schedule}
        options={{drawerLabel: 'Schedule'}}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
