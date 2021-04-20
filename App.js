
import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import Login from './Login'
import * as Font from 'expo-font';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
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
import SplitMoneyHomeWork from './src/screens/SplitMoneyHomework';

const Stack = createStackNavigator();

StackNavigator = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name={'Onboarding1'} component={Onboarding1} />
      <Stack.Screen name={'Onboarding2'} component={Onboarding2} />
      <Stack.Screen name={'Onboarding3'} component={Onboarding3} />
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'Register'} component={Register} />


    </Stack.Navigator>
  );
};


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
        <View style={styles.container}>
          <StatusBar style={'auto'} transparent={true} />
          <NavigationContainer>
            {/* thuộc tính translucent giúp làm mờ StatusBar, dẫn đến thấy các component nằm dưới StatusBar
              Chỉnh false để ẩn đi các component nằm dưới statusbar
              Khi translucent false thì StatusBar chuyển thành màu đen, phải để style="light" mới hiện chữ
             */}
            <StackNavigator />
            {/* <HomeStack /> */}
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
            {/* <Home /> */}
            {/* <MyCart/> */}
            {/* <RiderReview /> */}
            {/* <SplitMoneyHomeWork /> */}
          </NavigationContainer>
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
    paddingTop: Constants.statusBarHeight,
  },
});
