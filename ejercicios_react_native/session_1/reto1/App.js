import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handlePress = () =>{
    if(name && email)
    alert(`Nombre: ${name} y email: ${email}`)
    else
    alert("Por favor diligenciar correctamente todos los datos")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Reto # 1 - Bedu y React Native</Text>
      <Text>Nombre</Text>
      <TextInput style={styles.input} text={name} placeholder="Ingresa tu nombre" onChangeText={setName}/>
      <Text>Email</Text>
      <TextInput style={styles.input} text={email} placeholder="Ingresa tu email" onChangeText={setEmail}/>
      <Button
      style={styles.button}
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
