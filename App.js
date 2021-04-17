
import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
//import Login from './Login'
import * as Font from 'expo-font';
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import RegisterHomework from './src/screens/RegisterHomework';
import LoginHomework from './src/screens/LoginHomework';
import Onboarding1 from "./src/screens/Onboarding/Onboarding1";
import Onboarding2 from './src/screens/Onboarding/Onboarding2';
import Onboarding3 from './src/screens/Onboarding/Onboarding3';
import ForgotPassword from './src/screens/ForgotPassword';
import ClassifyTransaction from './src/screens/ClassifyTransaction';
import Slider from './src/screens/Onboarding/Slider';
import FoodDetails from './src/screens/FoodDetails';
import OPTAuthentication from './src/screens/OTPAuthentication';
import PasswordRecovery from './src/screens/PasswordRecovery/PasswordRecovery';
import PasswordReset from './src/screens/PasswordRecovery/PasswordReset';
import SuccesfullyReset from './src/screens/PasswordRecovery/SuccesfullyReset';
import Home from './src/screens/Home';
import { sizeHeight } from './src/Utils/Size';
import MyCart from './src/screens/MyCart';
import RiderReview from './src/screens/RiderReview';
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
    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
          {/* thuộc tính translucent giúp làm mờ StatusBar, dẫn đến thấy các component nằm dưới StatusBar
              Chỉnh false để ẩn đi các component nằm dưới statusbar
              Khi translucent false thì StatusBar chuyển thành màu đen, phải để style="light" mới hiện chữ

               */}
          <StatusBar
            style={Platform.OS === 'ios' ? 'auto' : 'light'}
            translucent={false} />
          {/* <Login /> */}
          {/* <LoginHomework /> */}
          {/* <RegisterHomework /> */}
          {/* <Register /> */}
          {/* <Onboarding1 /> */}
          {/* <Slider /> */}
          {/* <Onboarding2/> */}
          {/* <Onboarding3 />/ */}
          {/* <ForgotPassword /> */}
          {/* <ClassifyTransaction /> */}
          {/* <FoodDetails /> */}
          {/* <OPTAuthentication/> */}
          {/* <PasswordRecovery /> */}
          {/* <PasswordReset/> */}
          {/* <SuccesfullyReset /> */}
          {/* <Home/> */}
          {/* <MyCart/> */}
          <RiderReview/>
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
    paddingTop: Platform.OS === 'ios' ? Constants.statusBarHeight - sizeHeight(2) : null,
  },
});
