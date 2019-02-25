import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class Category extends Component {
    render() {
        return (
            <View style={{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
                <View style={{ flex: 1 }}>
                    <Image source={this.props.data.pic}
                        style={{ flex: 1, width: 130, height: 130, position:'absolute', }}
                    />

                </View>

                <View style={{opacity:0.5,backgroundColor:'green',height:185}}>
                                        
                   <Text style={{ marginBottom: 10,color:'black',fontSize:10 ,fontWeight:'bold',textAlign:'center'}}>{this.props.data.t1}</Text>
                   <Text style={{ marginBottom: 10,color:'black',fontSize:10 ,textAlign:'center' }}>{this.props.data.t2}</Text>
                   <Text style={{ marginBottom: 10,color:'black',fontSize:10  ,textAlign:'center'}}>{this.props.data.link}</Text>
                                                                          
                </View>
                
            </View>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});