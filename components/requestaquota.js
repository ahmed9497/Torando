import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,TextInput,
  ScrollView,Button,TouchableOpacity,
} from "react-native";
import { Icon, Card ,CheckBox } from "react-native-elements";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Footer from "./footer";


export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked:true
    };
  }








  render() {
    return (
      <ScrollView>

          <View>

            <ImageBackground
                source={require("../assets/companyProfile.jpg")}
                style={{ height:hp('40%'),width: wp('100%') }}
              >
              <Text style={{textAlign:'center',color:'white', fontSize: 40,fontWeight:'800',marginTop:hp('2%')}}>Request a Free Quote</Text>
              <Text style={{textAlign:'center',color:'white', fontSize: 20,fontWeight:'900',marginTop:hp('10%')}}>We work with you to document the scope of a project, how the project is to be implemented and the final deliverable and costs.</Text>

            </ImageBackground>  


            </View>

          <View>
          <View style={{backgroundColor:'#B9B9B9',height:2,padding:10,margin:20}}/>      
          <Text style={{textAlign:'center',color:'black', fontSize: 40,fontWeight:'800',marginTop:hp('2%')}}>Request a Free Quote</Text>
          <Text style={{textAlign:'center',color:'gray', fontSize: 15,fontWeight:'normal'}}>If you are interested in receiving more information about the Website Development available at tornado.aem, please complete the form below with accurate information and you will be contacted to review the details of your project.</Text>

          </View> 

          <Card containerStyle={{backgroundColor:'#455a64',marginBottom:10}}>

          <TextInput style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Company Name(If Any)"
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
                placeholder="Your Name"
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
                placeholder="Address"
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
                placeholder="Email Address"
                placeholderTextColor = "#ffffff"
                selectionColor="#fff"
                keyboardType='email-address'
                onChangeText = {
                  (text) =>{
                    this.setState({cnic:text});
                  }    
                }            
            />    
          <TextInput style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Phone Number"
                placeholderTextColor = "#ffffff"
                selectionColor="#fff"
                onChangeText = {
                  (text) =>{
                    this.setState({cnic:text});
                  }    
                }            
            />  

            <View style={styles.rouw}>
                
                <Text style={{}}>Does your Company have an existing web site
                </Text> 

                <View style={styles.row}>
                    
                      <Text style={{}}>Yes</Text>

                      <CheckBox
                        center
                        // title='Yes'
                        checkedColor='black'
                        checked={this.state.checked}
                        containerStyle={{margin:0,padding:0}}
                        
                      />
                      
                </View>

                <View style={styles.row}>
                    
                      <Text style={{marginRight:5}}>No</Text>

                      <CheckBox
                        center
                        // title='Yes'
                        checked={this.state.checked}
                        containerStyle={{margin:0,padding:0}}
                        checkedColor='black'
                        
                      />

                </View>


                   

            </View>     

            <TextInput style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="If yes, what is the URL?"
                placeholderTextColor = "#ffffff"
                selectionColor="#fff"
                onChangeText = {
                  (text) =>{
                    this.setState({cnic:text});
                  }    
                }            
            />   

            <Text style={{}}>Services of Interest:</Text>

               <View style={styles.row}>
                    
                      <Text style={{marginRight:5}}>Website Designing</Text>

                      <CheckBox
                        center
                        // title='Yes'
                        checked={this.state.checked}
                        containerStyle={{margin:0,padding:0}}
                        checkedColor='black'
                        
                      />

                </View>     
               <View style={styles.row}>
                    
                      <Text style={{marginRight:5}}>Application Development</Text>

                      <CheckBox
                        center
                        // title='Yes'
                        checked={this.state.checked}
                        containerStyle={{margin:0,padding:0}}
                        checkedColor='black'
                        
                      />

                </View>     
               <View style={styles.row}>
                    
                      <Text style={{marginRight:5}}>Website Maintanance</Text>

                      <CheckBox
                        center
                        // title='Yes'
                        checked={this.state.checked}
                        containerStyle={{margin:0,padding:0}}
                        checkedColor='black'
                        
                      />

                </View>     
               <View style={styles.row}>
                    
                      <Text style={{marginRight:5}}>E Commerce Solutions</Text>

                      <CheckBox
                        center
                        // title='Yes'
                        checked={this.state.checked}
                        containerStyle={{margin:0,padding:0}}
                        checkedColor='black'
                        
                      />

                </View>     
               <View style={styles.row}>
                    
                      <Text style={{marginRight:5}}>Payment Gateway</Text>

                      <CheckBox
                        center
                        // title='Yes'
                        checked={this.state.checked}
                        containerStyle={{margin:0,padding:0}}
                        checkedColor='black'
                        
                      />

                </View>     
               <View style={styles.row}>
                    
                      <Text style={{marginRight:5}}>SSL Certificate</Text>

                      <CheckBox
                        center
                        // title='Yes'
                        checked={this.state.checked}
                        containerStyle={{margin:0,padding:0}}
                        checkedColor='black'
                        
                      />

                </View>     
               <View style={styles.row}>
                    
                      <Text style={{marginRight:5}}>Corporate Multimedia Presentation</Text>

                      <CheckBox
                        center
                        // title='Yes'
                        checked={this.state.checked}
                        containerStyle={{margin:0,padding:0}}
                        checkedColor='black'
                        onPress={() => this.setState({checked: !this.state.checked})}
                        
                      />

                </View> 

                <TextInput  multiline={true} style={{height:100,width:wp('80%'),backgroundColor:'rgba(255, 255,255,0.2)',
      
                paddingHorizontal:16,
                fontSize:16,
                color:'#ffffff',
                marginVertical: 10}} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Project Description"
                placeholderTextColor = "#ffffff"
                selectionColor="#fff"
                onChangeText = {
                  (text) =>{
                    this.setState({cnic:text});
                  }    
                }            
            /> 




                <View style={styles.rouw}>
                
                <Text style={{}}>How would you want us to contact you?

                </Text> 


                <View style={styles.row}>
                    
                      <Text style={{}}>Phone</Text>

                      <CheckBox
                        center
                        // title='Yes'
                        checkedColor='black'
                        checked={this.state.checked}
                        containerStyle={{margin:0,padding:0}}
                        
                      />
                      
                </View>

                <View style={styles.row}>
                    
                      <Text style={{}}>Email</Text>

                      <CheckBox
                        center
                        // title='Yes'
                        checked={this.state.checked}
                        containerStyle={{margin:0,padding:0}}
                        checkedColor='black'
                        
                      />

                </View>

                <TextInput style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="what is the best time to contact you"
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
                placeholder="Products in your catalog"
                placeholderTextColor = "#ffffff"
                selectionColor="#fff"
                onChangeText = {
                  (text) =>{
                    this.setState({cnic:text});
                  }    
                }            
            /> 
            <Text style={{}}>Please provide the addresses of Web Sites that you want to serve as a model of your web site</Text>   
            
            <TextInput style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="http://www.mydomain.com"
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
                placeholder="http://www.mydomain.com"
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
                placeholder="http://www.mydomain.com"
                placeholderTextColor = "#ffffff"
                selectionColor="#fff"
                onChangeText = {
                  (text) =>{
                    this.setState({cnic:text});
                  }    
                }            
            /> 

            </View>

          <View style={{flexDirection:'row',alignContent:'center'}}>      
          <TouchableOpacity style={styles.button}
            onPress={this.onRegister}>
            
            <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.button}
            onPress={this.onRegister}>
            
            <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity> 
          </View>

          </Card> 

        <Footer/>


      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container : {
      flexGrow: 1,
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor:'#455a64'
    },
   row:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
    inputBox: {
      width:wp('80%'),
      backgroundColor:'rgba(255, 255,255,0.2)',
      borderRadius: 25,
      paddingHorizontal:16,
      fontSize:16,
      color:'#ffffff',
      marginVertical: 10
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