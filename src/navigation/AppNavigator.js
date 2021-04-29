import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import Onboarding1Screen from "../screens/OnboardingScreen/Onboarding1Screen";
import Onboarding2Screen from '../screens/OnboardingScreen/Onboarding2Screen';
import Onboarding3Screen from '../screens/OnboardingScreen/Onboarding3Screen';
import MyCartScreen from '../screens/MyCartScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import MyCouponScreen from '../screens/MyCouponScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import EditMyAccountScreen from '../screens/MyAccountScreen/EditMyAccountScreen';
import HomeTabNavigator from './HomeTabNavigator';
import MainDrawerNavigation from './MainDrawerNavigation';


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
            <OnboardingStack.Screen name={'Onboarding1'} component={Onboarding1Screen} />
            <OnboardingStack.Screen name={'Onboarding2'} component={Onboarding2Screen} />
            <OnboardingStack.Screen name={'Onboarding3'} component={Onboarding3Screen} />
        </OnboardingStack.Navigator>
    );
};


const MainStackNavigator = () => {
    return (
        <MainStack.Navigator
            initialRouteName={'HomeDrawer'}
            headerMode={'none'}>
            <MainStack.Screen name={'Onboarding'} component={Onboarding} />
            <MainStack.Screen name={'HomeDrawer'} component={MainDrawerNavigation} />
            {/* <MainStack.Screen name={'HomeDrawer'} component={MainDrawerNavigation} /> */}
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





const AppNavigator = () => {
    return (
        <NavigationContainer
            theme={MyTheme}
        >
            <MainStackNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;

const styles = StyleSheet.create({

});

