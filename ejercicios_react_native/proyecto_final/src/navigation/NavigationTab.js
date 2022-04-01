import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import NavigationHome from './NavigationHome';
import Notes from '../screens/container/Notes';
import Favorites from '../screens/container/Favorites';
import FriendsScreen from '../screens/container/FriendsScreen'
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
const TabLayout = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      }}>
      {/* Tab-HomeScreen */}
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: false,
          tabBarLabel: 'Favoritos',
          tabBarIcon: (focused) => (
            <Icon name="star" size={23} style={[focused ? styles.drawerActive : styles.drawerInActive]} /> //color={color}
          ),
          tabBarBadge:3,
        }}
      />
      {/* Tab-SearchScreen */}
      {/* <Tab.Screen
        name="Friends"
        component={FriendsScreen}
        options={{
          tabBarLabel: 'Friends',
          tabBarIcon: (focused,color, size) => (
            <Icon name="star" size={23} style={[focused ? styles.drawerActive : styles.drawerInActive]} /> //color={color}
          ),
        }}
      /> */}
      {/* Tab-DealsScreen */}
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: () => renderHomeMenu(),
        }}
        component={NavigationHome}
      />
      {/* Tab-ProfileScreen */}
      <Tab.Screen
        name="Notes"
        component={Notes}
        options={{
          headerShown: false,
          tabBarLabel: 'Notas',
          tabBarIcon: (focused,color, size) => (
            <Icon name="sticky-note" size={23} style={[focused ? styles.drawerActive : styles.drawerInActive]} /> //color={color}
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = {
  drawerActive: {
    color: '#21726B',
  },
  drawerInActive: {
    color: '#aeaeae',
  },
};

export default TabLayout;

function renderHomeMenu() {
  return (
    <Image
      style={{
        width: 45,
        height: 45,
        top: -15,
        marginLeft: 10,
        marginRight: 10,
      }}
      source={require('../../assets/movies.png')}
    />
  );
}
