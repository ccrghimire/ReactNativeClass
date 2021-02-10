import React from 'react';
import {View, Text, StyleSheet,} from 'react-native';
import {Heading, Title} from './components/typography';


    const App = () => {
  const data = ['Sneha', 'Sunisha', 'Rojina'];
      return (
        <View style={styles.screen}>
          <Heading>John Smith</Heading>
          {
            data.map(a => {
              return (
                <View key={a} style={styles.card}>
                  <Text style={{ color: 'white' }}> <Text style={{ fontWeight: 'bold' }}>{a}</Text> likes your photo</Text>
                </View>
              )
            })
          }
          <Title>Flutter </Title>
          <Text>Description</Text>

        </View >
  )
}

const styles = StyleSheet.create({
screen:{
  flex:1,
  backgroundColor:'pink',
  marginTop: 30,
  padding:20
},
title:{
   fontSize:20,
  fontWeight:'bold',
},
card:{
  width:'100%',
  backgroundColor:'grey',
  marginTop:20,
  padding:10,
}
})
export default App;