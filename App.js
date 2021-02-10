import React from 'react';
import {StyleSheet, View, Text,} from 'react-native';

const App = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={{ fontSize: 40, color: '#444' }}>JS</Text>
      </View>
      <Text style={{ fontSize: 30, color: '#D56EFE', marginTop: 30, }}>John Smiths</Text>
      <Text>UI/UX Designer</Text>
      <Text style={{ marginTop: 30, }}>Basically, no, they define different types of activities. Copywriters’ main goal is creating texts that sell something, be it products, services, tools, intellectual and creative stuff, etc. UX writers’ task is creating texts that support and enhance users communication with interfaces, let them clearly understand what’s going on and lighten the negative experience in case of errors or problems of interaction.</Text>
      <View style={styles.cards}>
        <Text style={{ fontSize: 40, color: '#522E76',textAlign:20, }}>250 </Text>
      </View>
    
    </View>

  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 50,
    padding: 30,
  },
  card: {
    width: '20%',
    height: 75,
    borderRadius: 100,
    marginTop: 40,
    borderColor: '#CE69FF',
    alignItems: 'center',
    borderWidth: 5,
  },
  cards:{
    width:'20%',
    fontSize:24,
    marginTop:120,
    borderRadius:5,



  }
})

export default App;