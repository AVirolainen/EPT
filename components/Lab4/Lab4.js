import React, {useState, useEffect} from 'react'
import {derivative, evaluate} from "mathjs"

import { Alert, View, Image, ImageBackground, StyleSheet, Dimensions, Text, TouchableOpacity, TextInput } from 'react-native';

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const Lab4 = ({navigation}) =>{

    const [counted, setCounted] = useState(false)
    const [valueStart, setValueStart] = useState()
    const [valueEnd, setValueEnd] = useState()
    const [expression, setExpression] = useState("log10(x)-(7/((2*x)+6))")
    const [valueZ, setValueZ] = useState()
    const [result, setResult] = useState(0)

    const e = 0.5

    const task = (x) =>{
        console.log((Math.log10(x))-(7/((2*x)+6)))
        return((Math.log10(x))-(7/((2*x)+6)))
    }

    const toDerivative = (expression)=>{
        return(derivative(expression, 'x'))
    }


    const countValue = () =>{

        if (task(valueStart)*task(valueEnd)>0 || valueStart<0 || valueEnd<0 ){
            setResult("NaN (введіть інші межі)")
        }
        else{
            let tempvalueA = valueStart
            let tempvalueB = valueEnd
            let tempvalueZ = valueZ

            let k=0

            while((Math.abs(tempvalueB-tempvalueA)>=e)){

                const temp = (tempvalueB-tempvalueA)/2

                let firstDerivative = toDerivative(expression)
                let secondDerivative = toDerivative(firstDerivative)

                if(((firstDerivative.evaluate({x: temp}))*(secondDerivative.evaluate({x: temp})))<0){
                    tempvalueZ = tempvalueA
                    tempvalueA = tempvalueB
                    tempvalueB = tempvalueZ
                }


                let tempexprA = tempvalueA-((task(tempvalueA)*(tempvalueB-tempvalueA))/(task(tempvalueB)-task(tempvalueA)))
                let tempexprB = tempvalueB-(task(tempvalueB)/firstDerivative.evaluate({x: tempvalueB}))

                tempvalueA = tempexprA
                tempvalueB = tempexprB
                
                k+=1
            }
            setCounted(true)
            setResult((tempvalueA+tempvalueB)/2)

            
        }
    }
    let graphicButton
    let resultText
    if(counted){
        resultText =<View>
                        <Text style={styles.labText}>
                            Корінь рівняння:
                        </Text>
                        <Text style={styles.labText}>
                        {result}
                        </Text>
                    </View>

        graphicButton = <TouchableOpacity style={styles.labButton} onPress={()=>{navigation.navigate("Lab4Diagram")}}>
                          <Text style={styles.buttonText}>Вивести графік</Text>
                        </TouchableOpacity>
    }

    return(
        <ImageBackground source={require('../../assets/lab2Background.jpg')} style={styles.backgroundImage}>
            <View style={styles.body}>
                <Text style={styles.labHeader}>
                        Лабораторна робота №4
                </Text>
                <Text style={styles.labText}>
                    Завдання(24 варіант):
                </Text>
                <Image style={styles.imageLine} source={require('../../assets/line.png')} />
                    <Image style={styles.image} source={require('../../assets/task.png')} />
                <Image style={styles.imageLine} source={require('../../assets/line.png')} />
                <Text style={styles.labText}>
                    Комбінований метод
                </Text>
                <Text style={styles.labText}>Введіть межі</Text>
                <View style={styles.inputsContainerInputs}>
                    <View>
                        <TextInput
                            style={styles.inputViewStart}
                            onChangeText = {text => setValueStart(text)}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <TextInput
                            style={styles.inputViewEnd}
                            underlineColorAndroid="transparent"
                            onChangeText = {text => setValueEnd(text)}
                    />
                </View>

                <TouchableOpacity style={styles.labButton} onPress={countValue}>
                    <Text style={styles.buttonText}>Обрахувати значення</Text>
                </TouchableOpacity>
                {resultText}
                {graphicButton}
            
            </View>
        </ImageBackground>
    )

}

const styles = StyleSheet.create({
    backgroundImage:{
        width: deviceWidth,
        height: deviceHeight
    },
    image:{
        marginVertical: 10,
        height: 100,
        width: 300
    },
    imageLine:{
        marginVertical: 5,
        height: 5,
        width: 300
    },
    body:{
        flex: 1,
        alignItems: "center"
    },
    labHeader:{
        marginTop: 40,
        fontSize: 25,
        fontFamily: "MontserratBold"
    },
    labText:{
        marginTop: 5,
        fontSize: 23,
        fontFamily: "MontserratRegular"
    },
    inputViewStart:{
        marginRight: 160, 
        textAlign: 'center',
        height: 40, 
        width: 40,
        borderColor: 'gray', 
        borderBottomWidth: 1,
        
        fontSize: 27,
        color: "black",
        fontFamily: "MontserratRegular"
    },
    inputViewEnd:{
        height: 40, 
        width: 40,
        borderColor: 'gray',
        textAlign: 'center', 
        borderBottomWidth: 1,
        
        fontSize: 27,
        color: "black",
        fontFamily: "MontserratRegular"
    },
    inputsContainerInputs:{
        marginTop: 10,
        flexDirection: "row"
    },
    labButton:{
        width: 250,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        padding: 10,
        borderColor: "#818181",
        backgroundColor: "#B9B9B9",
        borderWidth: 2,
        marginTop: 20
    },
    buttonText:{
        fontSize: 15,
        color: "black",
        fontFamily: "MontserratRegular"
    },
})

export default Lab4 