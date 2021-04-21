
import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
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
import OrderHistory from './src/screens/OrderHistory';
import MyCoupon from './src/screens/MyCoupon';

const OnboardingStack = createStackNavigator();
const MainStack = createStackNavigator();

//Chỉnh background cho navigationContainer
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};


const Onboarding = () => {
  return (
    <OnboardingStack.Navigator headerMode={'none'}>
      <OnboardingStack.Screen name={'Onboarding1'} component={Onboarding1} />
      <OnboardingStack.Screen name={'Onboarding2'} component={Onboarding2} />
      <OnboardingStack.Screen name={'Onboarding3'} component={Onboarding3} />
    </OnboardingStack.Navigator>
  );
};
const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      initialRouteName={'MyCoupon'}
      headerMode={'none'}>
      <MainStack.Screen name={'Onboarding'} component={Onboarding} />
      <MainStack.Screen name={'Home'} component={Home} />
      <MainStack.Screen name={'Login'} component={Login} />
      <MainStack.Screen name={'Register'} component={Register} />
      <MainStack.Screen name={'MyCart'} component={MyCart} />
      <MainStack.Screen name={'OrderHistory'} component={OrderHistory} />
      <MainStack.Screen name={'MyCoupon'} component={MyCoupon} />


    </MainStack.Navigator>
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
          <NavigationContainer theme={MyTheme}>
            {/* thuộc tính translucent giúp làm mờ StatusBar, dẫn đến thấy các component nằm dưới StatusBar
              Chỉnh false để ẩn đi các component nằm dưới statusbar
              Khi translucent false thì StatusBar chuyển thành màu đen, phải để style="light" mới hiện chữ
             */}
            <MainStackNavigator />
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
    // backgroundColor: '#E5E5E5',
  },
});
