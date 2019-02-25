import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground ,Image, ScrollView  } from 'react-native'
import { Icon } from 'react-native-elements'

export default class home extends Component {
constructor(props){
    super(props);
}
static navigationOptions = {
    
  };

  render() {
    return (
      <View>
       {/* <Image source={require('../assets/companyProfile.jpg')} style={{width: '100%', height: '60%'}} />
        */}
       <View style={{justifyContent:'center',alignItems:'center'}}>
         <Text style={{fontSize:25,color:'blue',}}>Home Page</Text> 
       </View> 

      
      </View>
    )
  }
}
