import React, {Component} from 'react';
import {View,Text, StyleSheet, Dimensions} from 'react-native';
import {InputContainer} from './InputContainer'

const {width, height} = Dimensions.get('window');

export default class Main extends Component{
    render(){
            return(
                <View style={styles.main}>
                    <InputContainer></InputContainer>
                </View>
            );
    }
}

const styles = StyleSheet.create({
    main:{
        flex: 9,
        width: width,
        height: height,
        backgroundColor: 'pink',
    },
});