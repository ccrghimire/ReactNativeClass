import React from 'react';
import { StyleSheet, Text, View, Button,ActivityIndicator, Image } from 'react-native';
import {CustomButton, CustomButton2, CustomButton3, CustomButton4} from './components/buttons';

export default function App() {
const clickHandler =()=>{
  console.log('Button clicked')
}

  return (
    <View style={styles.container}>
      <Text>Buttons</Text>
      <View style={{ width: "80%" }}>
        <Button title="click me" onpress={clickHandler} />
      </View>
      <View style={{ width: "80%" }}>
        <Button title="click me" color="red" onpress={clickHandler} />
      </View>
      <View style={{ width: "80%", marginBottom: 40 }}>
        <Button title="click me" color="blue" disabled onpress={clickHandler} />
      </View>
      <CustomButton
        color="red"
        textColor="white"
        title="TouchableOpacity"
        onButtonPlaceCustomEventHandler={clickHandler}
      />
      <Text>Custom Button</Text>
      <CustomButton2
        color="blue"
        textColor="white"
        title="TouchableHighlight"
        onButtonPlaceCustomEventHandler={clickHandler}
      />
      <Text>Custom Button</Text>
      <CustomButton3
        color="red"
        textColor="white"
        title="TouchableHighlight"
        onButtonPlaceCustomEventHandler={clickHandler}
      />
      <Text>Custom Button</Text>
      <CustomButton4
        color="red"
        textColor="white"
        title="TouchableHighlight"
        onButtonPlaceCustomEventHandler={clickHandler}
      />
      <Text>Custom Button</Text>
      <ActivityIndicator color="red" size="large" />
      <Image style={styles.image} source={{uri:"https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png"}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: "center",
  },
    Image:{
    width: 100,
    height: 100,
    borderRadius:50,
    resizeMode:'cover'
    }
});
