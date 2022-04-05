import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import { Image } from 'react-native-elements';
import store from '../../store/store';

const Profile = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.profile}>Perfil</Text>
        <Image style={styles.profileImage} source={{uri: store.getState().user.photo}}/>
            <Text style={styles.name}>Nombre: {store.getState().user.name}</Text>
            <Text style={styles.name}>Email: {store.getState().user.emailUser}</Text>        
      </View>
    );
}

export default Profile

const styles = StyleSheet.create({
  profile:{
    fontSize:20,
    paddingBottom:20,
    paddingTop:10,
    fontWeight:'bold'
  },
  container:{
    padding:5,
    alignItems:'center'
  },
  profileImage:{
    width:200,
    height:200,
    borderRadius: 10,
    marginLeft:20,
    borderWidth: 5,
    borderColor: "#CED3D6"
  },
  name:{
    flexDirection:'column',
    fontSize:14,
    fontWeight: 'bold',
    padding:10
  }
});
