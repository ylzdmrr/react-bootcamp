/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Main from './components/Main';
import {Header} from './components/Header';

export default class App extends Component{
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header style={styles.header}></Header>
        <Main style={styles.main}></Main>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  main:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  header:{
    justifyContent: 'center',
    alignItems: 'center',
  },
});
