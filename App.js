
import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View, LogBox, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { Provider } from 'react-redux';
import { store } from './src/redux/AppRedux';
import firebase from 'firebase/app';
import * as Font from 'expo-font';
import AppNavigator from './src/navigation/AppNavigator';


const firebaseConfig = {
  apiKey: "AIzaSyCX9Iy_oXU69u8dKwmcynRGzDyw_GJ7tto",
  authDomain: "flashfood-d6f53.firebaseapp.com",
  projectId: "flashfood-d6f53",
  storageBucket: "flashfood-d6f53.appspot.com",
  messagingSenderId: "605149532808",
  appId: "1:605149532808:web:eb5a6817a9d3c0369f053d",
  measurementId: "G-RPFX5RRRHB"
};
// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoad: false
    };
  }
  async loadFonts() {
    await Font.loadAsync({
      'SVN-Gilroy-Regular': require('./src/assets/fonts/SVN-Gilroy-Regular.otf'),
      'SVN-Gilroy-Medium': require('./src/assets/fonts/SVN-Gilroy-Medium.otf'),
      'SVN-Gilroy-SemiBold': require('./src/assets/fonts/SVN-Gilroy-SemiBold.otf'),
      'SVN-Gilroy-Bold': require('./src/assets/fonts/SVN-Gilroy-Bold.otf'),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }


  render() {
    // console.log(Constants.statusBarHeight,);
    if (this.state.fontsLoaded) {
      return (
        <Provider store={store}>
          <SafeAreaView style={styles.container}>
            {/* thuộc tính translucent giúp làm mờ StatusBar, dẫn đến thấy các component nằm dưới StatusBar
              Chỉnh false để ẩn đi các component nằm dưới statusbar
              Khi translucent false thì StatusBar chuyển thành màu đen, phải để style="light" mới hiện chữ
             */}
            <StatusBar style={'auto'} transparent={true} />
            <AppNavigator />
          </SafeAreaView>
        </Provider>


      );
    } else {
      return null;
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == 'android' ? Constants.statusBarHeight : 0,
    // backgroundColor: '#E5E5E5',
  },

});
