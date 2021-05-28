import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Dimensions} from 'react-native';


let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

const LabMain = ({navigation}) =>{
    return(
        <View>
            <ImageBackground source={require('../assets/mainBackground.jpg')} style={styles.backgroundImage}>
                <View style={styles.header}>
                    <Text style={styles.name}>Методи оптимізації</Text>
                    <Text style={styles.name}>та планування</Text>
                    <Text style={styles.name}>експерименту</Text>
                </View>
                <View style={styles.body}>
                
                <TouchableOpacity style={styles.labButton} 
                                onPress={() => navigation.navigate('Lab2')}>
                    <Text style={styles.buttonText}>Лабораторна робота</Text>
                    <Text style={styles.buttonText}>№3_1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.labButton}
                                onPress={() => navigation.navigate('Working')}>
                    <Text style={styles.buttonText}>Лабораторна робота</Text>
                    <Text style={styles.buttonText}>№3_2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.labButton}
                                onPress={() => navigation.navigate('Lab3')}>
                    <Text style={styles.buttonText}>Лабораторна робота</Text>
                    <Text style={styles.buttonText}>№3_3</Text>
                </TouchableOpacity>
                    
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flex: 1,
        minHeight: 150,
        backgroundColor: "#F96331",
        alignItems: "center",
        justifyContent: "center"
    },
    body:{
        flex: 1,
        alignItems: 'center',
        // backgroundColor: "#EB5E30",
        minHeight: 1140,
    },
    name:{
        color: "#FFFFFE",
        fontSize: 28,
        fontFamily: "MontserratRegular"
        
    },
    labButton:{
        marginTop: 20, 
        width: 200,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        padding: 10,
        backgroundColor: "#ED6E43",
    },
    buttonText:{
        fontSize: 15,
        color: "white",
        fontFamily: "MontserratRegular"
    },
    backgroundImage:{

        width: deviceWidth,
        height: deviceHeight
    },
    label:{
        color: "#FFFFFE",
        fontSize: 28,
        fontFamily: "MontserratRegular",
        justifyContent: "flex-end",
        alignItems: 'flex-end',
    }
})

export default LabMain