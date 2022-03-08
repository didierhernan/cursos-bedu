import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Header from '../../sections/components/header'

const Home = props =>{
    return (
        <View>
            <Header></Header>
            <Text>Hola mundo</Text>
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