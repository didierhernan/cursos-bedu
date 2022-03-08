import React from "react";
import { View, Image, StyleSheet, SafeAreaView } from "react-native";

function Header (props){
    return (
        <View>
            <SafeAreaView>
                <View style={StyleSheet.container}>
                <Image 
                    source={require('../../../assets/bedu.png')}
                    style={StyleSheet.logo}/>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    logo:{
        width: 80,
        height: 26,
        resizeMode: 'contain'
    },
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
    }
})

export default Header