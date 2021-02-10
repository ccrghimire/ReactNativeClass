import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.test}>Conversation</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.test}>Conversation</Text>
        <Text style={styles.test}>Conversation1</Text>
        <Text style={styles.test}>Conversation2</Text>
        <Text style={styles.test}>Conversation3</Text>
      </View>
      <View style={styles.view3}>
        <View style={styles.footerContainer}>
          <View>
            <Text style={styles.test}>A</Text>
          </View>
          <View>
            <Text style={styles.test}>B</Text>
          </View>
        </View>
        <View style={styles.footerContainer}>
          <View>
            <Text style={styles.test}>C</Text>
          </View>
          <View >
            <Text style={styles.test}>D</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',
    
        
  },
  view1:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f00',
    
  },
  view2:{
    flex:6,
    backgroundColor:'#0f0',
    alignItems:'flex-end',
    justifyContent:'flex-end',
  },
  view3:{
    flex:3,
    backgroundColor:'#00f',
    justifyContent:'space-between',
  },
  test:{
  fontSize:34,
  fontWeight:'bold',
  color:"#fff",
   
  },
  footerContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
  }
});
