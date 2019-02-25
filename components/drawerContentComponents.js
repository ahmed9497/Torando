import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { Text, View, StyleSheet, ImageBackground ,Image, ScrollView  } from 'react-native'
import { white } from 'ansi-colors';
import { Icon } from 'react-native-elements'
export default class drawerContentComponents extends Component {

    navigateToScreen = ( route ) =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    })

  render() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Image style={{width: 270, height: 150}}
                source={require('../assets/tornado.jpg')}

                />
                
            </View>
            <View style={styles.screenContainer}>
                <View style={styles.screen}>
                
                    <Icon size={24} name="home" type="material-community" color='black' />
                    <Text style={{marginLeft:10}} onPress={this.navigateToScreen('Home')}>Home</Text>
                
                </View>
                <View style={styles.screen}>
                    <Icon
                        name='people'
                        type='material'
                        color='black'
                    />
                    <Text  style={{marginLeft:10}} onPress={this.navigateToScreen('AboutUs')}>About Us</Text>
                </View>
                <View style={styles.screen}>
                <Icon size={24} name="phone" type="font-awesome" color='black' />
                    <Text  style={{marginLeft:10}}onPress={this.navigateToScreen('Services')}>Services</Text>
                </View>
                <View style={styles.screen}>
                    
                <Icon size={24} name="folder" type="font-awesome" color='black' /> 
                    <Text  style={{marginLeft:10}} onPress={this.navigateToScreen('Portfolio')}>Portfolio</Text>
                </View>

                <View style={styles.screen}>
                   
                <Icon size={24} name="format-quote-open" type="material-community" color='black' />
                    <Text  style={{marginLeft:10}} onPress={this.navigateToScreen('Testimonials')}>Testimonials</Text>
                </View>
                <View style={styles.screen}>
                <Icon size={24} name="blogger" type="material-community" color='black' />
                    <Text  style={{marginLeft:10}} onPress={this.navigateToScreen('Blog')}>Blog</Text>
                </View>
                <View style={styles.screen}>
                <Icon size={24} name="sc-telegram" type="evilicon" color='black' />
                    <Text  style={{marginLeft:10}} onPress={this.navigateToScreen('RequestAQuota')}>Request A Quote</Text>
                </View>
                <View style={styles.screen}>
                <Icon size={24} name="phone" type="material-community" color='black' />
                    <Text  style={{marginLeft:10}} onPress={this.navigateToScreen('ContactUs')}>Contact Us</Text>
                </View>
            </View>
        </ScrollView>
    
    )
  }
}

const styles = StyleSheet.create({
    container: {
        // alignItems: 'center',
        flex:1
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