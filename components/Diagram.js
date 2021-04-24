import React from "react";
import { StyleSheet, View, ImageBackground, Text, Dimensions } from "react-native";
import {
    LineChart,
  } from "react-native-chart-kit";


const Diagram = ({route}) =>{
  const { dataList, } = route.params;
  console.log(dataList)
    return (
  <View style={styles.body}>
  <LineChart
    data={{
      labels: ["100", "200", "300", "400", "500", "600", "700", "800"],
      datasets: [
        {
          data: dataList
        },
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={Dimensions.get("window").height/2-50}
    yAxisSuffix="m"
    yAxisInterval={2} // optional, defaults to 1
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
        r: "6",
        strokeWidth: "1",
        stroke: "#B9B9B9"
      }
    }}
    style={{
    marginTop: 40,
    
    }}
  />

<LineChart
    data={{
      labels: ["1000", "2000", "3000", "4000", "5000", "6000", "7000", "8000"],
      datasets: [
        {
          data: [1, 4, 9, 16, 25, 36, 49, 64 ]
        },
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={Dimensions.get("window").height/2-50}
    yAxisInterval={2} // optional, defaults to 1
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
        r: "6",
        strokeWidth: "1",
        stroke: "#B9B9B9"
      }
    }}
  />
  <Text style={styles.buttonText}>Сортування вставками (Оn²)</Text>
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

export default Diagram