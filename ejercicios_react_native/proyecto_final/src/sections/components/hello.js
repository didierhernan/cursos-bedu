import {StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import { Image, Text } from 'react-native-elements';

export default class Hello extends Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.box}>
            <Image style={styles.profileImage} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
            <Text style={styles.name}>Bienvenido{"\n"}John Doe</Text>
          </View>
          </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      padding:5,
    },
    box: {
      flexDirection:'row',
      alignItems: 'center',
    },
    profileImage:{
      width:100,
      height:100,
      borderRadius: 50,
      marginLeft:20,
      borderWidth: 5,
      borderColor: "#CED3D6"
    },
    name:{
        flex: 1,
        flexDirection:'column',
      fontSize:14,
      fontWeight: 'bold',
      padding:30
    }
  });
