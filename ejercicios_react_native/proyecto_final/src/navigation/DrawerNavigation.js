import React from 'react';
import Store from '../store/store';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import NavigationTab from './NavigationTab';
import Profile from '../screens/container/Profile';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Hello from '../sections/components/hello';
import { userActions } from '../actions/UserActions';
import { connect } from 'react-redux';
import store from '../store/store';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  function CustomDrawerContent(props) {
    const navigation = useNavigation();
    const handleClose = () => {
      store.dispatch(userActions.logout())
      navigation.navigate('Login');
    };

    return (
      <DrawerContentScrollView {...props}>
        <Hello
          name={Store.getState().user.name}
          photo={Store.getState().user.photo}/>
        <DrawerItemList {...props} />
        <DrawerItem
          name="logout"
          label="Cerrar Sesión"
          onPress={handleClose}
          icon = {()=>(<Icon name="times-circle" size={20} style={styles.drawerInActive} />)}
        />
      </DrawerContentScrollView>
    );
  }

  return (
    <Drawer.Navigator
      initialRouteName="Movies"
      drawerContent={props => <CustomDrawerContent {...props} />}>
        
      <Drawer.Screen
        name="Movies"
        component={NavigationTab}
        options={{
          title: 'Tu app de pelis',
          drawerIcon: ({focused}) => (
            <Icon
              name="film"
              style={[focused ? styles.drawerActive : styles.drawerInActive]}
              size={20}

            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Perfil',
          drawerIcon: ({focused}) => (
          <Icon 
            name="user" size={20} style={[focused ? styles.drawerActive : styles.drawerInActive]} />),
        }}
      />
    </Drawer.Navigator>

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

// export default DrawerNavigator;

function mapState(state){
  const {user} = state;
  return {user}
}

const actionCreators = {
  logoutAction: userActions.logout
}

export default connect(mapState, actionCreators)(DrawerNavigator)