
import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View, Platform, Image, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { NavigationContainer, DefaultTheme, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//import Login from './Login'
import * as Font from 'expo-font';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import RegisterHomework from './src/screens/RegisterHomework';
import LoginHomework from './src/screens/LoginHomework';
import Onboarding1Screen from "./src/screens/OnboardingScreen/Onboarding1Screen";
import Onboarding2Screen from './src/screens/OnboardingScreen/Onboarding2Screen';
import Onboarding3Screen from './src/screens/OnboardingScreen/Onboarding3Screen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import ClassifyTransaction from './src/screens/ClassifyTransaction';
import FoodDetailsScreen from './src/screens/FoodDetailsScreen';
import OPTAuthenticationScreen from './src/screens/OTPAuthenticationScreen';
import PasswordRecoveryScreen from './src/screens/PasswordRecoveryScreen/PasswordRecoveryScreen';
import PasswordResetScreen from './src/screens/PasswordRecoveryScreen/PasswordResetScreen';
import SuccesfullyResetScreen from './src/screens/PasswordRecoveryScreen/SuccesfullyResetScreen';
import HomeScreen from './src/screens/HomeScreen';
import { sizeHeight } from './src/Utils/Size';
import MyCartScreen from './src/screens/MyCartScreen';
import RiderReviewScreen from './src/screens/RiderReviewScreen';
import SplitMoneyHomeWork from './src/screens/SplitMoneyHomework';
import OrderHistoryScreen from './src/screens/OrderHistoryScreen';
import MyCouponScreen from './src/screens/MyCouponScreen';
import MyAccountScreen from './src/screens/MyAccountScreen';
import EditMyAccountScreen from './src/screens/MyAccountScreen/EditMyAccountScreen';
import FilterScreen from './src/screens/FilterScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import MyFavouriteScreen from './src/screens/MyFavouriteScreen';
import { responsiveFontSize, responsiveHeight, responsiveScreenFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { orangeColor } from './src/string/ColorTheme';
import home_tabbar from './src/assets/home-tabbar.png';
import my_cart_tabbar from './src/assets/my-cart-tabbar.png';
import notification_tabbar from './src/assets/notification-tabbar.png';
import search_tabbar from './src/assets/search-tabbar.png';
import favourite_tabbar from './src/assets/favourite-tabbar.png';
const OnboardingStack = createStackNavigator();
const MainStack = createStackNavigator();
const HomeTabStack = createMaterialBottomTabNavigator();
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
      <OnboardingStack.Screen name={'Onboarding1'} component={Onboarding1Screen} />
      <OnboardingStack.Screen name={'Onboarding2'} component={Onboarding2Screen} />
      <OnboardingStack.Screen name={'Onboarding3'} component={Onboarding3Screen} />
    </OnboardingStack.Navigator>
  );
};

const HomeTabNavigator = () => {
  return (
    <HomeTabStack.Navigator
      barStyle={styles.homeTabStackStyle}
      activeColor={orangeColor}
      inactiveColor={'#898B9A'}
      labeled={false}
      screenOptions={({ navigation, route }) => ({
        tabBarIcon: ({ focused, color }) => {
          if (focused)
            return (
              <View style={styles.viewTabbarIconFocused}>
                <Image
                  style={styles.imgTabbar}
                  source={require('./src/assets/home-tabbar.png')} />
                <Text style={styles.textTabbar}>
                  {route.name}
                </Text>
              </View>
            );
          return (
            <Image
              style={[styles.imgTabbar, { tintColor: '#898B9A' }]}
              source={require('./src/assets/home-tabbar.png')} />
          );
        },
      })}
    >
      <HomeTabStack.Screen name={'Home'} component={HomeScreen} />
      <HomeTabStack.Screen name={'Filter'} component={FilterScreen} />
      <HomeTabStack.Screen name={'MyCart'} component={MyCartScreen} />
      <HomeTabStack.Screen name={'MyFavourite'} component={MyFavouriteScreen} />
      <HomeTabStack.Screen name={'Notification'} component={NotificationScreen} />
    </HomeTabStack.Navigator>
  );
};

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      initialRouteName={'HomeTabStack'}
      headerMode={'none'}>
      <MainStack.Screen name={'Onboarding'} component={Onboarding} />
      <MainStack.Screen name={'HomeTabStack'} component={HomeTabNavigator} />
      <MainStack.Screen name={'Login'} component={LoginScreen} />
      <MainStack.Screen name={'Register'} component={RegisterScreen} />
      <MainStack.Screen name={'MyCart'} component={MyCartScreen} />
      <MainStack.Screen name={'OrderHistory'} component={OrderHistoryScreen} />
      <MainStack.Screen name={'MyCoupon'} component={MyCouponScreen} />
      <MainStack.Screen name={'MyAccount'} component={MyAccountScreen} />
      <MainStack.Screen name={'EditMyAccount'} component={EditMyAccountScreen} />
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
  homeTabStackStyle: {
    backgroundColor: 'white',
    //paddingHorizontal: responsiveWidth(4)
  },
  viewTabbarIconFocused: {
    marginLeft: responsiveWidth(4),
    width: responsiveWidth(23.73),
    height: responsiveHeight(4.9),
    borderRadius: responsiveWidth(5.3),
    paddingLeft: responsiveWidth(4.2),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: orangeColor
  },
  imgTabbar: {
    width: responsiveWidth(4.2),
    height: responsiveWidth(4.2),
    // tintColor: orangeColor
  },
  textTabbar: {
    marginLeft: responsiveWidth(2.1),
    marginTop: responsiveHeight(0.5),
    fontFamily: 'SVN-Gilroy-Bold',
    fontWeight: '700',
    fontSize: responsiveFontSize(1.57),
    color: 'white'
  }
});
