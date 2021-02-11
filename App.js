import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.test}>Calculator display </Text>
      </View>
            <View style={styles.view2}>
        <View style={styles.footerContainer}>
          <View>
            <Text style={styles.test}>1</Text>
          </View>
          <View>
            <Text style={styles.test}>2</Text>
          </View>
          <View>
            <Text style={styles.test}>3</Text>
          </View>
          <View>
            <Text style={styles.test}>#</Text>
          </View>
        </View>
        <View style={styles.footerContainer}>
          <View>
            <Text style={styles.test}>4</Text>
          </View>
          <View >
            <Text style={styles.test}>5</Text>
          </View>
          <View>
            <Text style={styles.test}>6</Text>
          </View>
          <View>
            <Text style={styles.test}>=</Text>
          </View>
        </View>
        <View style={styles.footerContainer}>
          <View>
            <Text style={styles.test}>7</Text>
          </View>
          <View>
            <Text style={styles.test}>8</Text>
          </View>
          <View>
            <Text style={styles.test}>9</Text>
          </View>
          <View>
            <Text style={styles.test}>.</Text>
          </View>
          </View>
      </View>
      </View>
    )};


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',
          
  },

  view1:{
    flex:2,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    
  },
   view2:{
    flex:3,
    backgroundColor:'grey',
    justifyContent:'space-around',
    
  },

  test:{
  fontSize:34,
  fontWeight:'bold',
  color:"black",
   
  },
  footerContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
  }
});