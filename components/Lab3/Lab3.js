import React, {useState} from 'react';
import { View, Image, ImageBackground, StyleSheet, Dimensions, Text, TouchableOpacity, TextInput } from 'react-native';

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const Lab3 = ({navigation}) =>{
    const [valueA, setValueA] = useState("")
    const [valueB, setValueB] = useState("")
    const [valueC, setValueC] = useState("")
    const [valueD, setValueD] = useState("")
    const [valueY, setValueY] = useState("")

    const [answers, setAnswers] = useState([])

    const [calculated, setCalculated] = useState(false)


    const nodeNumbers = 11
    const k = 2

    const getRndInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min) ) + min;
    }

    const shuffle = (a) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    const solve = () =>{
        const temp = Math.ceil(valueY/6)

        let array = [[], [], [], [], [], [], [], [], [], []]

        for(let i=0; i<10; i++){
            for(let j=0; j<4; j++){
                let randomValue = getRndInteger(0, temp)
                array[i].push(randomValue)
            }
        }

        let delta = array.map((item)=>{
            return(Math.abs(valueY-(valueA*item[0]+valueB*item[1]+valueC*item[2]+valueD*item[3])))
        }) 

        let koef = delta.reduce((a, b)=>((1/a)+b))
        console.log(array)
        console.log(delta)
        console.log(koef)

        let probabilities = delta.map((item)=>{
            return(((1/item)/koef))
        }) 
        console.log(probabilities)

        let answers = delta.filter(item => item == 0)
        if(answers.length > 0){
            let index = delta.indexOf(0)
            console.log("*********")
            console.log(array[index])
        }
        else{
            let temp_sorted = [...probabilities].sort(function(a, b){return b-a})
            let tempvalue1 = probabilities.indexOf(temp_sorted[0])
            console.log("------------")
            let tempvalue2 = probabilities.indexOf(temp_sorted[1])

            let tempArray = array[tempvalue1].concat(array[tempvalue2])
            console.log(tempArray)
           
            let flag = true
            while(flag){
                let tempAnswers = [...tempArray]

                tempAnswers = tempAnswers.sort(() => Math.random() - 0.5).slice(4)
                console.log(tempAnswers)
                let check = valueA*tempAnswers[0]+valueB*tempAnswers[1]+valueC*tempAnswers[2]+valueD*tempAnswers[3]
                if(check == valueY){
                    console.log(tempAnswers)
                    setAnswers(answers.concat(tempAnswers))
                    setCalculated(true)
                    flag = false

                }
                
            }
            
        }
    }

    let answer
    if(calculated){
        answer = <View style={styles.body}>
                    <Text style={styles.labText}>
                        Корені рівняння:
                    </Text>
                    <Text style={styles.labText}>
                        x1 = {answers[0]}
                    </Text>
                    <Text style={styles.labText}>
                        x2 = {answers[1]}
                    </Text>
                    <Text style={styles.labText}>
                        x3 = {answers[2]}
                    </Text>
                    <Text style={styles.labText}>
                        x4 = {answers[3]}
                    </Text>
                </View>
    }      

    return(
        <ImageBackground source={require('../../assets/lab2Background.jpg')} style={styles.backgroundImage}>
            <View style={styles.body}>
                <Text style={styles.labHeader}>
                    Лабораторна робота №3_3
                </Text>
                <Image style={styles.image} source={require('../../assets/line.png')} />
                <Text style={styles.labText}>
                    Дослідження
                </Text>
                <Text style={styles.labText}>
                    генетичного алгоритму
                </Text>
                <Image style={styles.image} source={require('../../assets/line.png')} />
                <Text style={styles.labText}>Введіть значення коефіцієнтів</Text>
                <View style={styles.matrix}>
                    <TextInput
                        style={styles.inputView}
                        onChangeText = {item => setValueA(item)}
                        underlineColorAndroid="transparent"
                    />
                    <Text style={styles.labText}>*x1+</Text>
                    <TextInput
                        style={styles.inputView}
                        onChangeText = {item => setValueB(item)}
                        underlineColorAndroid="transparent"
                    />
                    <Text style={styles.labText}>*x2+</Text>
                    <TextInput
                        style={styles.inputView}
                        onChangeText = {item => setValueC(item)}
                        underlineColorAndroid="transparent"
                    />
                    <Text style={styles.labText}>*x3=</Text>
                    <TextInput
                        style={styles.inputView}
                        onChangeText = {item => setValueD(item)}
                        underlineColorAndroid="transparent"
                    />
                    <Text style={styles.labText}>*x4=</Text>
                    <TextInput
                        style={styles.inputView}
                        onChangeText = {item => setValueY(item)}
                        underlineColorAndroid="transparent"
                    />
                </View>

                <TouchableOpacity style={styles.labButton} onPress={solve}>
                    <Text style={styles.buttonText}>Обрахувати</Text>
                </TouchableOpacity> 
                {answer}

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

    },
    matrix:{
 
        flexDirection: "row",
    },
    imageLine:{
        marginVertical: 15,
        height: 5,
        width: 300
    },
    inputView:{
        textAlign: 'center',
        height: 40,
        width: 40,
        borderColor: 'gray',
        borderBottomWidth: 1,
 
        fontSize: 27,
        color: "black",
        fontFamily: "MontserratRegular"
    },


})
export default Lab3
