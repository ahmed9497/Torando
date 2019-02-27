import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView
} from "react-native";
import { Icon, Card , ListItem  } from "react-native-elements";
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
        icon: 'location_on',
        subtitle:'Office # S-07, R22 France Cluster, International City, Dubai, United Arab Emirates.'
      },
      {
        title: 'Postal Address:',
        icon: 'flight-takeoff',
        subtitle:'P.O. Box 114420, Dubai, U.A.E.'
      },
      {
        title: 'Telephone:',
        icon: 'Phone',
        subtitle:'+971 4 4509840 (4 Lines)'
      },
      {
        title: 'Fax:',
        icon: 'Fax',
        subtitle:'+971 4 5515275'
      },
      {
        title: 'Email:',
        icon: 'flight-takeoff',
        subtitle:'sales@tornado.ae'
      },
      {
        title: 'Website:',
        icon: 'flight-takeoff',
        subtitle:'www.tornado.ae'
      },
     
    ]




    return (
      <ScrollView>

              <Image
                style={{ width: wp('100%'), height: hp('30%') ,borderRadius:50}}
                source={require('../assets/headoffice.jpg')}
              />
              <Text>HEAD OFFICE</Text>
              
        {
          Headlist.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={<Icon  name = {item.icon} type='material-community' color='black'/>}
              subtitle={item.subtitle}

            />
          ))
        }


      </ScrollView>
    );
  }
}
