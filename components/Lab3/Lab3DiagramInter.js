import React from "react";
import { StyleSheet, View, ImageBackground, Text, Dimensions } from "react-native";
import {LineChart} from "react-native-chart-kit";


const Lab3DiagramInter = ({route}) =>{
    const {functions} = route.params
    const xtemp = functions.xfunc.filter(((_, i)=>{return i % 5 == 0 ;}))
    const xIntertemp = functions.xInterpol.filter(((_, i)=>{return i % 3 == 0 ;}))
    return (
    <View style={styles.body}>
    <LineChart
        data={{
        labels: xtemp,
        datasets: [
            {
            data: functions.yfunc
            },
        ]
        }}
        width={Dimensions.get("window").width} 
        height={Dimensions.get("window").height/2-100}
        yAxisSuffix=""
        yAxisInterval={2} 
        chartConfig={{
        backgroundColor: "#B9B9B9",
        backgroundGradientFrom: "#B9B9B9",
        backgroundGradientTo: "#B9B9B9",
        decimalPlaces: 2, 
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
            borderRadius: 0
        },
        propsForDots: {
            r: "6",
            strokeWidth: "1",
            stroke: "#B9B9B9"
        }
        }}
        style={{
        marginTop: 40,
        
        }}
    />
    <Text style={styles.buttonText}>Графік за умовою</Text>

    <LineChart
        data={{
        labels: xIntertemp,
        datasets: [
            {
            data: functions.yInterpol
            },
        ]
        }}
        width={Dimensions.get("window").width} 
        height={Dimensions.get("window").height/2-100}
        yAxisSuffix=""
        yAxisInterval={2} 
        chartConfig={{
        backgroundColor: "#B9B9B9",
        backgroundGradientFrom: "#B9B9B9",
        backgroundGradientTo: "#B9B9B9",
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
            borderRadius: 0
        },
        propsForDots: {
            r: "6",
            strokeWidth: "1",
            stroke: "#B9B9B9"
        }
        }}
        style={{
            marginVertical: 8,
            borderRadius: 16,
        
        
        }}
    />

    <Text style={styles.buttonText}>Інтерпольований графік</Text>
    </View>
  
        
    );
}

const styles = StyleSheet.create({
  body:{
    backgroundColor: "#B9B9B9",
    flex: 1,
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1f3f4"
  },
  backgroundImage:{
    width: 1000,
    height: 1000
  },
  buttonText:{
    fontSize: 20,
    color: "black",
    fontFamily: "MontserratBold"
  },
});

export default Lab3DiagramInter