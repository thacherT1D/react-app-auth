import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyA31bc8_gEWf663rLc6l8fTGPwBpw5okAQ',
    authDomain: 'authentication-1461e.firebaseapp.com',
    databaseURL: 'https://authentication-1461e.firebaseio.com',
    projectId: 'authentication-1461e',
    storageBucket: 'authentication-1461e.appspot.com',
    messagingSenderId: '740956378278'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
