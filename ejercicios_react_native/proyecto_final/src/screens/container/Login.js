import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import 'react-native-gesture-handler';
import Spinner from 'react-native-loading-spinner-overlay';
import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    onSubmit: values => {
      // eslint-disable-next-line no-alert
      login(values.email, values.password);
    },
  });
  const [loading, setLoading] = useState();
  const navigation = useNavigation();
  function login(emailUser, passwordUser) {
    //Login exitoso
    setLoading(false);
    navigation.navigate('DrawerNavigation');
  }

  return (
    <ImageBackground
      source={require('../../../assets/background.jpg')}
      style={styles.image}>
      <SafeAreaView style={styles.container}>
        <Image
          source={require('../../../assets/movie-central.png')}
          style={styles.logo}
        />
        <Text style={styles.textByGroupar}>¡Hola! Ingresa aqui:</Text>        
        <View>
          <TextInput
            style={styles.input}
            placeholder="Ingresa tu email"
            placeholderTextColor="white"
            onChangeText={formik.handleChange('email')}
            value={formik.values.email}
          />
          <TextInput
            style={styles.input}
            placeholder="Ingresa tu contraseña"
            placeholderTextColor="white"
            secureTextEntry={true}
            onChangeText={formik.handleChange('password')}
            value={formik.values.password}
          />
          <TouchableOpacity onPress={formik.handleSubmit} style={styles.button}>
            {loading ? (
              <Spinner
                visible={true}
                textContent={'Loading...'}
                textStyle={styles.spinnerTextStyle}
              />
            ) : (
              <Text style={styles.buttonLabel}>Iniciar Sesión</Text>
            )}
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textByGroupar: {
    marginTop: 20,
    fontSize: 18,
    marginBottom: 30
  },
  logo: {
    width: 250,
    height: 300,
    resizeMode: 'contain',
    marginTop: 50,  
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
  logoliteral: {
    width: 250,
    height: 50,
    marginBottom: 20,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  input: {
    marginBottom: 10,
    marginTop: 5,
    width: 300,
    height: 45,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 18,
    backgroundColor: '#B3B4B4',
    color: 'white',
  },
  button: {
    backgroundColor: '#3AA66C',
    borderRadius: 5,
    marginTop: 20,
    width: 150,
  },
  buttonLabel: {
    color: 'white',
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default Login;
