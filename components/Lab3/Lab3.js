import React, {useState} from 'react';
import { View, Image, ImageBackground, StyleSheet, Dimensions, Text, TouchableOpacity, TextInput } from 'react-native';

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const Lab3 = ({navigation}) =>{
    const [valueStart, setValueStart] = useState("")
    const [valueEnd, setValueEnd] = useState("")

    const [xfunc, setxfunc] = useState([])
    const [yfunc, setyfunc] = useState([])

    const [xInterpol, setxInterpol] = useState([])
    const [yInterpol, setyInterpol] = useState([])

    const [yGrid, setyGrid] = useState([])

    const [mistake, setMistake] = useState([])
    const [mistakegraph, setMistakegraph] = useState([])

    const nodeNumbers = 11
    const k = 2

    const functionVariant = (x) =>{
        return  Math.exp(x)-(2*Math.sin(x))
    }

    const functionInterpolate = () =>{
        let h = (valueEnd - valueStart)/(nodeNumbers*k)
        for (let i=0; i<nodeNumbers*k; i++){
            setxfunc(xfunc.push(parseInt(valueStart)+(h*i)))
            setyfunc(yfunc.push(functionVariant(xfunc[i])))

        }
    }

    const getInterpolatedValue = (x) =>{
        
        let buffer = yGrid.slice()
        for(let i = 0;  i<nodeNumbers-1; i++){
            for(let j=i+1; j<nodeNumbers; j++){
                buffer[j]=((x - xInterpol[i])*buffer[j] - (x - xInterpol[j])*buffer[i])/(xInterpol[j] - xInterpol[i]);
            }
        }
        return buffer[nodeNumbers-1]
    }

    const mainFunction = () =>{
        functionInterpolate()
        let h = (valueEnd - valueStart)/(nodeNumbers-1)
        for (let i = 0; i<nodeNumbers; i++){
            setxInterpol(xInterpol.push(parseInt(valueStart)+(h*i)))
            setyGrid(yGrid.push(functionVariant(xInterpol[i])))
        }

        for (let i=0; i<nodeNumbers; i++){
            setyInterpol(yInterpol.push(getInterpolatedValue(xInterpol[i])))
        }

        for (let i=0; i<nodeNumbers*k; i++){
            setMistake(mistake.push(Math.abs(yfunc[i]-getInterpolatedValue(xfunc[i]))))
        }

        setMistakegraph(mistake)

        navigation.navigate("Lab3DiagramInter", 
                        {functions: {xfunc: xfunc.map((elem)=>{return elem.toFixed(2)}),
                                    yfunc: yfunc.map((elem)=>{return elem.toFixed(2)}),
                                    xInterpol: xInterpol.map((elem)=>{return elem.toFixed(2)}),
                                    yInterpol: yInterpol.map((elem)=>{return elem.toFixed(2)})}}
        )     
    }

    const toMistake =()=>{
        navigation.navigate("Lab3DiagramMistake", 
                {functions: {mistake: mistakegraph}})
        }




    return(
        <ImageBackground source={require('../../assets/lab2Background.jpg')} style={styles.backgroundImage}>
            <View style={styles.body}>
                <Text style={styles.labHeader}>
                    Лабораторна робота №3
                </Text>
                <Image style={styles.image} source={require('../../assets/line.png')} />
                <Text style={styles.labText}>
                    Завдання(24 варіант):
                </Text>
                <Text style={styles.labText}>
                    f(x)=e^x-2sin(x)
                </Text>
                <Text style={styles.labText}>
                   Схема Ейктена
                </Text>
                <Image style={styles.image} source={require('../../assets/line.png')} />
                <Text style={styles.labText}>Введіть межі інтерполяції</Text>
                <View style={styles.inputsContainerInputs}>
                    <View>
                        <TextInput
                            style={styles.inputViewStart}
                            onChangeText = {text => setValueStart(text)}
                            underlineColorAndroid="transparent"
                            value={valueStart}
                        />
                    </View>
                    <TextInput
                        style={styles.inputViewEnd}
                        underlineColorAndroid="transparent"
                        onChangeText = {text => setValueEnd(text)}
                        value={valueEnd}
                    />
                </View>
                <View style={styles.inputsContainerTexts}>
                    <View>
                        <Text style={styles.inputTextStart}>від</Text>
                    </View>
                        <Text style={styles.inputTextEnd}>до</Text>
                </View>
                <TouchableOpacity style={styles.labButton} onPress={mainFunction}>
                    <Text style={styles.buttonText}>Вивести заданий графік</Text>
                    <Text style={styles.buttonText}>та інтерпольований</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.labButton} onPress={toMistake}>
                    <Text style={styles.buttonText}>Вивести графік</Text>
                    <Text style={styles.buttonText}>похибки</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles =  StyleSheet.create({
    backgroundImage:{
        width: deviceWidth,
        height: deviceHeight
    },
    body:{
        flex: 1,
        alignItems: "center"
    },
    labText:{
        marginTop: 5,
        fontSize: 23,
        fontFamily: "MontserratRegular"
    },
    labHeader:{
        marginTop: 40,
        fontSize: 27,
        fontFamily: "MontserratRegular"
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
    inputsContainerTexts:{
        marginTop: 20,
        flexDirection: "row"
    },
    image:{
        marginTop: 30,
        height: 5,
        width: 300
    },
    inputTextEnd:{
        marginLeft: 80,
        fontSize: 25,
        color: "black",
        fontFamily: "MontserratRegular",
        marginTop: 0,

    },
    inputTextStart:{
        marginRight: 80,
        fontSize: 25,
        color: "black",
        fontFamily: "MontserratRegular"

    }
})
export default Lab3
