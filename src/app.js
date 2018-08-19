import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyA31bc8_gEWf663rLc6l8fTGPwBpw5okAQ',
    authDomain: 'authentication-1461e.firebaseapp.com',
    databaseURL: 'https://authentication-1461e.firebaseio.com',
    projectId: 'authentication-1461e',
    storageBucket: 'authentication-1461e.appspot.com',
    messagingSenderId: '740956378278'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ flexDirection: 'row', paddingTop: 10 }}>
            <Button onPress={() => firebase.auth().signOut()}>
              Logout
            </Button>
        </View>);
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
