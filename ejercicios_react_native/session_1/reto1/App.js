import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, } from 'react-native';

export default function App() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const image = {uri:'https://app.bedu.org/assets/images/logo-bedu-black@3x.svg'}

  const handlePress = () =>{
    if(name && email)
      alert(`Nombre: ${name} y email: ${email}`)
    else
      alert("Por favor diligenciar correctamente todos los datos")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={image} style={styles.logo}/>
      <Text style={styles.title}>Reto # 1 - Bedu y React Native</Text>
      <Text style={styles.subTitle}>Nombre</Text>
      <TextInput style={styles.input} text={name} placeholder="Ingresa tu nombre" onChangeText={setName}/>
      <Text style={styles.subTitle}>Email</Text>
      <TextInput style={styles.input} text={email} placeholder="Ingresa tu email" onChangeText={setEmail}/>
      <Button
        color="red"
        title="Mostrar Resultado"
        onPress={handlePress}
      />
      <StatusBar style="auto" />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddffcc',
    alignItems: 'center',
    justifyContent: 'center',
    margin:10
  },
  title: {
    padding: 10,
    fontSize: 18,
    fontWeight: "bold"
  },
  subTitle:{
    fontStyle: 'italic'
  },
  input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,  
  },  
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
  },

});
