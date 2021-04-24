import React from "react";
import { StyleSheet, View, ImageBackground, Text, Dimensions } from "react-native";
import {LineChart} from "react-native-chart-kit";

[1, 2, 3, 4, 5, 6, 7]

const Lab4Diagram = () =>{
    return (
    <View style={styles.body}>
    <LineChart
        data={{
        labels:[1, 2, 3, 4, 5, 6, 7]
        ,
        datasets: [
            {
            data: [ 
                (Math.log10(1))-(7/((2*1)+6)), 
                (Math.log10(2))-(7/((2*2)+6)), 
                (Math.log10(3))-(7/((2*3)+6)),
                (Math.log10(4))-(7/((2*4)+6)),
                (Math.log10(5))-(7/((2*5)+6)),
                (Math.log10(6))-(7/((2*6)+6))]
            },
        ]
        }}
        width={Dimensions.get("window").width} 
        height={Dimensions.get("window").height-140}
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
            marginTop: 20,
            borderRadius: 0
        
        }}
    />
    <Text style={styles.buttonText}>Графік функції</Text>
    <Text style={styles.labText}>З графіку бачимо,</Text>
    <Text style={styles.labText}>що корінь знайдено правильно</Text>
    </View>
  
        
    );
}

const styles = StyleSheet.create({
  body:{
    backgroundColor: "#B9B9B9",
    flex: 1,
    alignItems: "center",
  },
  labText:{
    fontSize: 20,
    fontFamily: "MontserratRegular"
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

export default Lab4Diagram