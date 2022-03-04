import { StatusBar } from 'expo-status-bar';
import { Button, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <Text style={styles.text}>
          Generando pruebas
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollview:{
    backgroundColor: "gray",
    marginHorizontal: 20,
    marginVertical: 20
  }
});
