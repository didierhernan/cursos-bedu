import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createSwitchNavigator} from '@react-navigation/compat';
import Loading from './src/sections/components/loading';
import Login from './src/screens/container/Login';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import {Provider} from 'react-redux';
import { makeServer } from './src/mocks/mockAPIService';
import store from './src/store/store';

makeServer()

function App(props) {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SwitchNavigator />
      </NavigationContainer>
    </Provider>
  );
}
const SwitchNavigator = createSwitchNavigator(
  {
    Loading: {screen: Loading},
    DrawerNavigation: DrawerNavigation,
    Login: Login,
  },
  {
    initialRouteName: 'Login',
  },
);
export default App;
