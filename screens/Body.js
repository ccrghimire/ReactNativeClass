import React from 'react';
import {StyleSheet,View, Text} from 'react-native';
import { MaterialIcons,FontAwesome5 } from '@expo/vector-icons';

const TopBar = props => {
    return (
      <View style={styles.topbar}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="white" />
          <MaterialIcons name="notifications-none" size={24} color="white" />
      </View>
    )
  }
  const TyCard =props=>{
      return(
          <View style={{...styles.tyCard, backgroundColor:props.color}}>
                <FontAwesome5 name={props.icon} size={50} color="#F2A717" />
                <Text style={styles.amount}>{props.amount} </Text>
                <Text style={styles.title}>{props.title}</Text>
          </View>
      )
  }
  const CustomButton = props => {
    return <View style={{...styles.button, backgroundColor:props.bgc}}>
      <Text style={{color:props.color}}>{ props.title }</Text>
    </View>
  }
  const TransactionCard=props=>{
      return (
          <View style={styles.transaction}>
              <View style={styles.tranLeft}>
                  <View style={{ ...styles.iconContainer, backgroundColor: props.color }}>
                      <MaterialIcons name={props.icon} size={30} color='#fff' />
                  </View>
                  <View>
                      <Text style={styles.transactionTitle}>{props.title}</Text>
                      <Text style={styles.transactionSubTitle}>{props.subtitle}</Text>
                  </View>
              </View>
              <View style={styles.tranRight}>
                  <Text>{props.amount}</Text>
              </View>
          </View>
           
            
      )
  }


const Body= props => {
 return(
     <View style={styles.screen}>
        <View style={styles.container}>
            <TopBar />
                <Text style={styles.balanceHeading}>Your Balance</Text>
                <Text style={styles.balance}>$547000.00</Text>
            <View style={styles.tyCards}>
                <TyCard color='#C4F2FF' icon="dollar" title="Expenses" amount="$5000" />
                <TyCard color='#FFE6D7' icon="piggy-bank" title="Spend on Goals" amount="$4500" />
            </View>
        </View>
        <View style={styles.transactionContainer}>
            <View style={{...styles.container, marginTop:15}}>
                <View style={styles.titleBar}>
                    <Text style={styles.amount}>Transactions</Text>
                    <CustomButton title="View All" color="blue" bgc="#ECF1FF"/>
                </View>
                <View style={styles.transactions}>
            <TransactionCard icon='local-car-wash' title="Car Purchase" subtitle="Auto Loan" amount="$250" color="#56d289"/>
            <TransactionCard icon='home' title="House Purchase" subtitle="Airbnb Home" amount="$2250" color="#3b58b8"/>
            <TransactionCard icon='emoji-transportation' title="Transport" subtitle="Uber Pathao" amount="$250" color="#00FF00"/>
            <TransactionCard icon='motorcycle' title="Purchase" subtitle="Showroom" amount="$2500" color="#FF0000"/>
            <TransactionCard icon='connected-tv' title="Purchase" subtitle="TV Showroom" amount="$1250" color="#0000FF"/>
            <TransactionCard icon='king-bed' title="Houseware" subtitle="Furniture" amount="$1200" color="#00FF00"/>
          </View>
            </View>

        </View>
    </View>
 )
}


const styles = StyleSheet.create({
screen:{
    flex:1,
    backgroundColor:'#2F26D9',
},
container: {
   paddingHorizontal:40,
   marginVertical:40,
    
},
balanceHeading:{
    marginTop:20,
    fontSize:20,
    color:'#8181E3',
},
balance:{
    marginTop:20,
    fontSize:25,
    color:'#D2D4E0', 
    fontWeight:'bold',
},
topbar:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#2F26D9',
    margin:10,
    },
    tyCard:{
        width: "48%",
        height: 180,
        borderRadius: 10,
        padding: 20,
        justifyContent:'center'
      },  
    tyCards:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:40,
},
amount:{
    marginVertical:6,
    fontWeight: 'bold',
    color:'#000',
    fontSize:20,
},
title:{
    color:'#777' 
},transactionContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopEndRadius:40,
    borderTopLeftRadius:40,
},
titleBar: {
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  transactions: {
    
},
transaction: {    
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginVertical:10
},
tranLeft: {
  flexDirection: 'row',
  alignItems:'center'
},
tranRight:{},
iconContainer: {
  width: 50,
  height: 50,
  borderRadius:30,
  backgroundColor: 'red',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight:20
},
transactionTitle: {
  fontWeight: 'bold',
  fontSize:13
},
transactionSubTitle: {
  color:'#444',
  fontSize:12
}
});

export default Body;
