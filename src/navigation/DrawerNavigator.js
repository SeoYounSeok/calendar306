import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Calendar from '../screens/Calendar';
import Memo from '../screens/Memo';

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
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
