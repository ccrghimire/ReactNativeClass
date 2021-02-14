import React from 'react';
import {StyleSheet, View, Text,Image, } from 'react-native';
import { MaterialIcons, Ionicons,Octicons,Foundation,FontAwesome5   } from '@expo/vector-icons';

const TyCircle=props=>{
    return(
        <View style={{...styles.tyCircle,backgroundColor:props.color}}>
            <MaterialIcons name={props.icon} size={24} color="blue" />
        </View>
    )
}
const TopBar = props =>{
    return(
        <View style={styles.topbar}>
            <TyCircle icon="segment" color='#EFF1FF' />
            <View style={styles.tyCircle}>
            <Ionicons name="notifications-outline" size={24} color="blue" />
             <Image style={styles.image}source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Convex_lens_%28magnifying_glass%29_and_upside-down_image.jpg/341px-Convex_lens_%28magnifying_glass%29_and_upside-down_image.jpg"}}/>
             </View>      
         </View>
    )
}
const TyCard=props=>{
    return(
        <View style={{...styles.tyCard,backgroundColor:props.color}}>
           <Octicons name={props.icon} size={24} color="black"  /> 
           <Text style={styles.title}>{props.title}</Text>
            </View>
    )
}

const TransCard =props=>{
    return(
        <View style={{...styles.transCard, backgroundColor:props.color}}>
            <FontAwesome5 name={props.icon} size={28} color="white" />
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.amount}>{props.amount}</Text>

        </View>
    )
}

const Home= props=>{
    return(
        <View style={styles.screen}>
            <View style={styles.container}>
            <View style={styles.circle}>
                <TopBar />
                </View>
                <Text style={styles.welcomeHeading}>Welcome Back</Text>
                <Text style={styles.mint}>Creative Mints</Text>
            </View>
            <View style={styles.tyCards}>
                <TyCard color="grey" icon="search"  title="Search" />
            </View>
           
            <View style={styles.transCards}>
                <TransCard color='#01CD88' icon="dollar-sign" title="Transactions" amount="7 items"/>
                <TransCard color='#FF5949' icon="piggy-bank" title="Budget" amount="4 items"/>
            </View>
            <View style={styles.transCards}>
                <TransCard color='#01CD88' icon="star" title="Recommendation" amount="6 items"/>
                <TransCard color='#FF5949' icon="credit-card" title="Credit Cards" amount="3 items"/>
            </View>
            

        </View>
        
    )
}







const styles = StyleSheet.create({
screen:{
    flex:1,
    backgroundColor:'white',
},
container:{
   paddingHorizontal:40,
   marginVertical:40,
},

topbar:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'white',
    marginTop:30,
    fontWeight:'bold',
    },
    circle:{
        
    },
    tyCircle:{
    height:50,
    width:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:50,
    },
    welcomeHeading:{
    marginTop:20,
    fontSize:30,
    color:'#9EA6C4',
},
mint:{
    marginTop:10,
    fontSize:40,
    color:'#082752',
    fontWeight:'bold',
},
image:{
    width:50,
    height:50,
    borderRadius:50,
    resizeMode:'cover',
},
    tyCard:{
        width: "90%",
        height: 50,
        marginTop:2,
        borderRadius: 10,
        padding: 20,
        justifyContent:'center',
        
      },    
    tyCards:{
        justifyContent:'space-between',
        marginTop:4,
        padding:40,
        flexDirection:'row'
    },
    title:{
        color:"black", 
        fontSize:16,
    },
    transCard:{
        width: "48%",
        height: 130,
        borderRadius: 20,
        padding: 20,
        justifyContent:'center'
      }, 
      transCards:{
        flexDirection:'row',
        justifyContent:'space-around',
        padding: 35,
      },
      amount:{
        marginVertical:6,
        color:'black',
        fontSize:15,  
      },
      
})
export default Home;