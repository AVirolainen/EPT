import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Dimensions, Image} from 'react-native';


const Working = ({navigation}) =>{
    return(
        <View style={styles.body}>
            <Image style={styles.image} source={require('../assets/7.png')} />
            <Text style={styles.text}>В процесі розробки</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        backgroundColor: "#B9B9B9",
        flex: 1,
        alignItems: "center",
      },
    image:{
        marginTop: 30,
        height: 310,
        width: 300
    },
    text:{
        marginTop: 30,
        fontSize: 30,
        color: "black",
        fontFamily: "MontserratRegular"
    },
})

export default Working