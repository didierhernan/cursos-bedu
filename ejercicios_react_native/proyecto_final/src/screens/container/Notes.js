import {Text, View, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import React, {Component, useState} from 'react';
import {Formik} from 'formik';

const Notes = props => {
  const [notes, setNotes] = useState([])

  return (
    <View style={styles.top}>
      <Text style={styles.title}>Notas</Text>
      <Formik
        initialValues={{notes: ''}}
        onChange={values => handleSubmit(values.notes)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <TextInput
              placeholder="Escribe tus notas aqui..."
              value={values.notes}
              onChangeText={handleChange('notes')}
              onBlur={handleBlur('notes')}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#44546b',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'right'
  },
  top: {
    borderBottomWidth: 2,
    borderBottomColor: '#111111',
    padding: 10,
    backgroundColor: 'white',
  },  
})

export default Notes;
