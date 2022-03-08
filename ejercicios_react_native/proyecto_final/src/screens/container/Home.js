import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Header from '../../sections/components/header'

const Home = props =>{

    const handleClose = () =>{
        alert("Tocando texto");
    }

    return (
        <View>
            <Header/>
            <TouchableOpacity
                onPress={handleClose}
                styles={styles.button}>
                <Text styles={styles.button}>Cerrar sesion</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#e350a8',
        borderRadius: 5,
    }
})

export default Home;