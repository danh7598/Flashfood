
import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
//import Login from './Login'
import * as Font from 'expo-font';
import Login from './screens/Login'
import Register from './screens/Register'
import RegisterHomework from './screens/RegisterHomework';
import LoginHomework from './screens/LoginHomework';
import Onboarding1 from "./screens/Onboarding/Onboarding1";
import Onboarding2 from './screens/Onboarding/Onboarding2';
import Onboarding3 from './screens/Onboarding/Onboarding3';
import ForgotPassword from './screens/ForgotPassword';
import ClassifyTransaction from './screens/ClassifyTransaction';
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
        <View style={styles.container}>
          {/* thuộc tính translucent giúp làm mờ StatusBar, dẫn đến thấy các component nằm dưới StatusBar
              Chỉnh false để ẩn đi các component nằm dưới statusbar
              Khi translucent false thì StatusBar chuyển thành màu đen, phải để style="light" mới hiện chữ

               */}
          <StatusBar style="light" translucent={false} />
          {/* <Login /> */}
          {/* <LoginHomework /> */}
          {/* <RegisterHomework /> */}
          {/* <Register /> */}
          {/* <Onboarding1 /> */}
          {/* <Onboarding2/> */}
          {/* <Onboarding3 /> */}
          {/* <ForgotPassword /> */}
          <ClassifyTransaction />
        </View>
      );
    } else {
      return null;
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: Constants.statusBarHeight,
  },
});
