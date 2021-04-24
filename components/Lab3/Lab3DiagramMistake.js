import React from "react";
import { StyleSheet, View, ImageBackground, Text, Dimensions } from "react-native";
import {
    LineChart,
  } from "react-native-chart-kit";


const Lab3DiagramMistake = ({route}) =>{
    const {functions} = route.params
    console.log(functions.mistake)

    function getMaxOfArray(numArray) {
      return Math.max.apply(null, numArray);
    }

    function getMinOfArray(numArray) {
      return Math.min.apply(null, numArray);
    }

    return (
  <View style={styles.body}>
  <LineChart
    data={{
      labels: ["", "", "", "", "", "", "", ""],
      datasets: [
        {
          data: functions.mistake,
        },
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={Dimensions.get("window").height-100}
    yAxisSuffix=""
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#B9B9B9",
      backgroundGradientFrom: "#B9B9B9",
      backgroundGradientTo: "#B9B9B9",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 0
      },
      propsForDots: {
        r: "3",
        strokeWidth: "1",
        stroke: "#B9B9B9"
      }
    }}
    style={{
        marginTop: 40,
        borderRadius: 16,
    }}
  />
    <View>
      <Text style={styles.buttonText}>Максимальне значення графіку: {getMaxOfArray(functions.mistake)}</Text>
      <Text style={styles.buttonText}>Мінімальне значення графіку: {getMinOfArray(functions.mistake)}</Text>
    </View>
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
    fontSize: 15,
    color: "black",
    fontFamily: "MontserratBold"
  },
});

export default Lab3DiagramMistake