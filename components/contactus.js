import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,TextInput,
  Dimensions,
  Image,
  ScrollView
} from "react-native";
import { Divider, Card , ListItem, Button  } from "react-native-elements";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons   from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Footer from "./footer";


export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  
  render() {
    const Headlist = [
      {
        title: 'Appointments',
        icon: 'map-marker-radius',
        subtitle:'Office # S-07, R22 France Cluster, International City, Dubai, United Arab Emirates.'
        
      },
      {
        title: 'Postal Address:',
        icon: 'checkbook',
        subtitle:'P.O. Box 114420, Dubai, U.A.E.'
      },
      {
        title: 'Telephone:',
        icon: 'phone',
        subtitle:'+971 4 4509840 (4 Lines)'
      },
      {
        title: 'Fax:',
        icon: 'printer',
        subtitle:'+971 4 5515275'
      },
      {
        title: 'Email:',
        icon: 'at',
        subtitle:'sales@tornado.ae'
      },
      {
        title: 'Website:',
        icon: 'web',
        subtitle:'www.tornado.ae'
      },
     
    ]

    const dhabilist = [
      {
        title: 'Appointments',
        icon: 'map-marker-radius',
        subtitle:'Office # 24(Side A), Floor # 8, Gift Collection Building, Hamdan Street, Abu Dhabi - UAE.'
        
      },
      {
        title: 'Postal Address:',
        icon: 'checkbook',
        subtitle:'P.O.Box: 28562'
      },
      {
        title: 'Telephone:',
        icon: 'phone',
        subtitle:'+971-2-6777425'
      },
      {
        title: 'Fax:',
        icon: 'printer',
        subtitle:'+971-2-6777431'
      },
      {
        title: 'Email:',
        icon: 'at',
        subtitle:'sales@tornado.ae'
      },
      {
        title: 'Website:',
        icon: 'web',
        subtitle:'www.tornado.ae'
      },
     
    ]




    return (
      <ScrollView style={{backgroundColor:'#d7d7d7'}}>

              <Image
                style={{ width: wp('100%'), height: hp('30%') ,borderRadius:50}}
                source={require('../assets/headoffice.jpg')}
              />
              <Text style={{textAlign:'center',fontSize:30,}}>HEAD OFFICE</Text>
              
        {
          Headlist.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              titleStyle={{color:'black'}}
              leftIcon={<Icon  name = {item.icon} size={24} color='black'/>}
              subtitle={item.subtitle}
              bottomDivider={true}
            />
            
            
          ))
        }


              <Image
                style={{ width: wp('100%'), height: hp('30%') ,borderRadius:50}}
                source={require('../assets/abudhabioffice.jpg')}
              />
              <Text style={{textAlign:'center',fontSize:30,}}>BRANCH OFFICE</Text>
              
        {
          dhabilist.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              titleStyle={{color:'black'}}
              leftIcon={<Icon  name = {item.icon} size={24} color='black'/>}
              subtitle={item.subtitle}
              bottomDivider={true}

            />
          ))
        }

        <Text style={{textAlign:'center',fontSize:30,}}>CONTACT FORM</Text>
        <Text style={{textAlign:'center',fontSize:15,}}>Please fill out the form below to contact us and we promise to get back to you as soon as possible.</Text>
              
        <TextInput style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder='Company Name'
                placeholderTextColor = "#ffffff"
                selectionColor="#fff"
                onChangeText = {
                  (text) =>{
                    this.setState({cnic:text});
                  }    
                }            
            />  
       
        <TextInput style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder='Contact Person'
                placeholderTextColor = "#ffffff"
                selectionColor="#fff"
                onChangeText = {
                  (text) =>{
                    this.setState({cnic:text});
                  }    
                }            
            />  
        <TextInput style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder='Telephone'
                placeholderTextColor = "#ffffff"
                selectionColor="#fff"
                onChangeText = {
                  (text) =>{
                    this.setState({cnic:text});
                  }    
                }            
            />  
        <TextInput style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder='Mobile'
                placeholderTextColor = "#ffffff"
                selectionColor="#fff"
                onChangeText = {
                  (text) =>{
                    this.setState({cnic:text});
                  }    
                }            
            />  
        <TextInput style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder='Email'
                keyboardType='email-address'
                placeholderTextColor = "#ffffff"
                selectionColor="#fff"
                
                onChangeText = {
                  (text) =>{
                    this.setState({cnic:text});
                  }    
                }            
            />  

        <Button title="Submit"/>    


      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  inputBox: {
    width:wp('80%'),
    backgroundColor:'gray',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10,
    alignSelf: 'center',
  },
  button: {
    width:100,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13,
      margin:2
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
})