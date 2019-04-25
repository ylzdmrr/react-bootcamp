import React,{Component} from 'react';
import {View, Text, StyleSheet,Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export class Header extends Component{
    render(){
        return(
            <View style={style.container}>
                <Text style={style.title}>TODO LIST APP</Text>
            </View>
        );
    }
}
const style = StyleSheet.create({
    container:{
        flex: 1,
        width: width,
        backgroundColor: 'white',
    },
    title:{
        paddingTop: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 26,
    },
});