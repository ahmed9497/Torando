import React, { Component } from 'react'
import { Text,
    View,
    StyleSheet,
    ImageBackground,Button,
    Dimensions,
    Image,TextInput,
    ScrollView} from 'react-native'
 import { Card, SocialIcon} from 'react-native-elements';

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    const users = [
      {
         t1: 'Naresco Contracting L.L.C',
         t2 : 'HTML, Jquery, CSS, PHP, Responsive',
         link: 'www.naresco.ae',
         pic: '../assets/p35.jpg'
      },

      {
         t1: 'Al DARMAKY',
         t2 : 'HTML, Jquery, CSS, PHP, Responsive',
         link: 'http://www.aldarmakyuae.com/',
         pic: '../assets/p36.jpg'
      },
      {
         t1: 'Legend Group',
         t2 : 'HTML, Jquery, CSS, PHP, Responsive',
         link: 'http://www.legendpg.com/',
         pic: '../assets/p37.jpg'
      },
      {
         t1: 'Beauty Arabia',
         t2 : 'HTML, Jquery, CSS, PHP, Responsive',
         link: 'http://www.bbeautyarabia.com/category/makeup-2/',
         pic: '../assets/p35.jpg'
      },
      
     ]






    return (
      <ScrollView>

         <Text style={[styles.aboutText,{textAlign:'center',color:'green'}]}> Responsive Website </Text>

          <ScrollView horizontal={true}>

              {

                  users.map((data,index)=>{ 

                    return (

                        <Card   containerStyle={{width:'50%',height:'80%',marginBottom:50,padding:0}} 
                        //  image={require('../assets/p35.jpg')}
                        >
                          <Image
                          source={require('../assets/p35.jpg')}
                          style={{ width: 160, height: 170 ,position:'absolute'}}
                        />
                          <View style={{opacity:0.5,backgroundColor:'green',justifyContent:'center'}}>
                            
                            <Text style={{ marginBottom: 10,color:'white',fontSize:18 ,textAlign:'center'}}>{data.t1}</Text>
                            <Text style={{ marginBottom: 10,color:'white',fontSize:18 ,textAlign:'center' }}>{data.t2}</Text>
                            <Text style={{ marginBottom: 10,color:'white',fontSize:18  ,textAlign:'center'}}>{data.t3}</Text>


                          </View>
                        </Card>
                    )    
                   })      

              }



          </ScrollView>












      </ScrollView>
    );
  }
}



const styles = StyleSheet.create({
  container: {
      // alignItems: 'center',
      flex:1
  },
  aboutText: {
    fontSize: 25,
    color: "blue",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
    marginTop: 5
  },
  headerContainer: {
      height: 150,
  },
  headerText: {
      color: '#fff8f8',
  },
  screenContainer: {
     
      alignContent: 'center',
      // alignItems:'flex-start'
      padding: 10,
      // margin:30
  },
  screenStyle: {
      height: 30,
      marginTop: 2,
      flexDirection: 'row',
      alignItems: 'center'
  },
  screenTextStyle:{
      fontSize: 20,
      marginLeft: 20
  },
  screen:{
      // backgroundColor:'skyblue'
      margin :10,
      flexDirection:'row',
      //justifyContent:'space-evenly',
      // alignItems:'flex-start'
  }

});