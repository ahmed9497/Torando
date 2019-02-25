import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground ,Image, ScrollView  } from 'react-native'
import { Icon, Button } from 'react-native-elements'

export default class home extends Component {
constructor(props){
    super(props);
}
static navigationOptions = {
    
  };

  render() {
   // const navigate= 
    return (
      <View>
       {/* <Image source={require('../assets/companyProfile.jpg')} style={{width: '100%', height: '60%'}} />
        */}
       <View style={{justifyContent:'center',alignItems:'center'}}>
         <Text style={{fontSize:25,color:'blue',}}>Home Page</Text> 
         <Button title="click me" onPress={()=>this.props.navigation.navigate('Testimonials')}/>
       </View> 

      
      </View>
    )
  }
}
