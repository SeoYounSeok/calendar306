/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {createStore} from 'redux';
import {Provider as ReduxProvider} from 'react-redux';
import rootReducer from './src/reducers';

const store = createStore(rootReducer);

const App = () => {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </ReduxProvider>
  );
};
export default App;
