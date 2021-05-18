import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Dimensions, TextInput, Image, Alert } from 'react-native';

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

function isInt(n) {
    return n % 1 === 0;
 }

const Lab2 = ({navigation}) =>{
    const [nValue, setNValue] = useState()
    const [results, setResults] = useState()
    const [isCalculated, setIsCalculated] = useState(false)
    const [timeExec, setTimeExec] = useState(0)
    
    const handleCalculating = ()=>{
        let time = performance.now();

        let s = Math.floor(Math.sqrt(nValue))+1
        
        let k = 1
        let flag = true
        while(flag){
            let temp = ((s+k)**2)-nValue
            if(isInt(Math.sqrt(temp))){
                flag = false
                setResults([Math.sqrt(temp), s+k])
                setIsCalculated(true)
            }
            k+=1
        }

        time = performance.now() - time
        console.log(time/1000)
        if (time/1000 > 1){
            createTwoButtonAlert(time/1000)
        }

    }
    const createTwoButtonAlert = (a) => {Alert.alert(
      "Помилка. Час виконання: "+a,
      
    );}

    let resultText
    let resultExample
    let img
    if(isCalculated){
        resultExample = <Text style={styles.labText}>n = (A²)-(B²)</Text>
        resultText  = <Text style={styles.labText}>{nValue} = {results[1]}²-{results[0]}²</Text>
        img = <Image style={styles.image} source={require('./../assets/ferma.jpg')} />
    }


    return(
        <ImageBackground source={require('./../assets/lab2Background.jpg')} style={styles.backgroundImage}>
            <View style={styles.body}>
                <Text style={styles.labHeader}>Завдання</Text>
                <Text style={styles.labText}>Факторизація числа</Text>
                <Text style={styles.labText}>методом Ферма</Text>
                <View style={styles.inputsContainerInputs}>
                    <Text style={styles.labText}>Введіть число n</Text>
                </View>
                <TextInput
                        style={styles.inputViewStart}
                        onChangeText = {text => setNValue(text)}
                        underlineColorAndroid="transparent"
                        value={nValue}
                    />
                <TouchableOpacity style={styles.labButton} onPress={handleCalculating}>
                    <Text style={styles.buttonText}>Знайти значення</Text>
                    <Text style={styles.buttonText}>A та B</Text>
                </TouchableOpacity> 
                {resultExample}
                {resultText}
                {img}
                

            </View>
        </ImageBackground>
    )}

const styles =  StyleSheet.create({
    backgroundImage:{
        width: deviceWidth,
        height: deviceHeight
    },
    image:{
        marginVertical: 10,
        height: 200,
        width: 300
    },
    body:{
        flex: 1,
        alignItems: "center"
    },
    labText:{
        marginTop: 10,
        fontSize: 28,
        fontFamily: "MontserratRegular"
    },
    labHeader:{
        marginTop: 50,
        fontSize: 28,
        fontFamily: "MontserratBold"
    },
    labButton:{
        marginTop: 20, 
        width: 200,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        padding: 10,
        borderColor: "#818181",
        backgroundColor: "#B9B9B9",
        borderWidth: 2,
    },
    labGraphics:{
        width: 200,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        padding: 10,
        borderColor: "#818181",
        backgroundColor: "#B9B9B9",
        borderWidth: 2,
    },
    buttonText:{
        fontSize: 15,
        color: "black",
        fontFamily: "MontserratRegular"
    },
    array:{
        fontSize: 25,
        marginTop: 10
    },
    inputViewStart:{
        
        textAlign: 'center',
        height: 40, 
        width: 120,
        borderColor: 'gray', 
        borderBottomWidth: 1,
        
        fontSize: 27,
        color: "black",
        fontFamily: "MontserratRegular",

        
    },
    inputsContainerInputs:{
        marginTop: 10,
        flexDirection: "row"
    },
})
export default Lab2