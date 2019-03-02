import React, { Component } from 'react';
import { View, Alert, Button ,StyleSheet } from 'react-native';
import Mailer from 'react-native-mail';
import { sendEmail } from './send-email';
import qs from 'qs';
import { Linking } from 'react-native';
export default class mail extends Component {
  
constructor(props){
    super(props);
    this.state = {
        m : 'test@gmail.com'
    };
  
}
    
  handleEmail = () => {
    Mailer.mail({
      subject: 'need help',
      recipients: ['support@example.com'],
      ccRecipients: ['supportCC@example.com'],
      bccRecipients: ['supportBCC@example.com'],
      body: '<b>A Bold Body</b>',
      isHTML: true,
      attachment: {
        path: '',  // The absolute path of the file from which to read data.
        type: '',   // Mime Type: jpg, png, doc, ppt, html, pdf, csv
        name: '',   // Optional: Custom filename for attachment
      }
    }, (error, event) => {
      Alert.alert(
        error,
        event,
        [
          {text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
          {text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response')}
        ],
        { cancelable: true }
      )
    });
  }

  

  sendEmail=()=> {
  

    let url = `mailto:${'sales@tornado.ae'}`;

    // Create email link query
    const query = qs.stringify({
        subject: '',
        body: "",
       
    });

    if (query.length) {
        url += `?${query}`;
    }

    // check if we can use this link
    const canOpen =  Linking.canOpenURL(url);

    if (!canOpen) {
        throw new Error('Provided URL can not be handled');
    }

    return Linking.openURL(url);
}




  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.sendEmail}
          title="Email Me"
          color="#841584"
          accessabilityLabel="Purple Email Me Button"
        />
      </View>
    );
  }
}

const styles =StyleSheet.create({


    container:{
        flex:1
    }
})