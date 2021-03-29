import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
//import Login from './Login'
import * as Font from 'expo-font';
import Login from './screens/Login'
import Register from './screens/Register'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoad: false
    };
  }
  async loadFonts() {
    await Font.loadAsync({
      'SVN-Gilroy-Regular': require('./assets/fonts/SVN-Gilroy-Regular.otf'),
      'SVN-Gilroy-Medium': require('./assets/fonts/SVN-Gilroy-Medium.otf'),
      'SVN-Gilroy-SemiBold': require('./assets/fonts/SVN-Gilroy-SemiBold.otf'),
      'SVN-Gilroy-Bold': require('./assets/fonts/SVN-Gilroy-Bold.otf'),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <SafeAreaView style={styles.container}>
          {/* <StatusBar style={'dark'}/> */}
          <Login />
          {/* <Register/> */}
        </SafeAreaView>
      );
    } else {
      return null;
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
