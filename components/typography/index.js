import React from 'react';
import {Text} from 'react-native';

const Heading =(props)=>{
    return <Text style={{fontSize:24,fontWeight:'bold',color:'#444'}}>{props.children}</Text>
    }
    const Title =(props)=>{
      return <Text style={{fontSize:16,fontWeight:'bold',color:'#444'}}>{props.children}</Text>
      }

      export{Heading, Title} 