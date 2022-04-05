import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/container/Home';
import MovieDetails from '../sections/components/movieDetails';

const Stack = createStackNavigator();

export default function NavigationHome() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeNavigation"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={MovieDetails}
        options={{
          headerShown: true,
          title: "Detalles de la película"
        }}
      />
    </Stack.Navigator>
  );
}
