import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyCartScreen from '../screens/MyCartScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import MyCouponScreen from '../screens/MyCouponScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import EditMyAccountScreen from '../screens/MyAccountScreen/EditMyAccountScreen';
import MainDrawerNavigation from './MainDrawerNavigation';
import FoodDetailsScreen from '../screens/FoodDetailsScreen';
import OnboardingStackNavigator from './OnBoardingStackNavigator';
import LoginStackNavigator from './LoginStackNavigator';


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




const MainStackNavigator = () => {
    return (
        <MainStack.Navigator
            initialRouteName={'Onboarding'}
            headerMode={'none'}>
            <MainStack.Screen name={'Onboarding'} component={OnboardingStackNavigator} />
            <MainStack.Screen name={'HomeDrawer'} component={MainDrawerNavigation} />
            <MainStack.Screen name={'FoodDetails'} component={FoodDetailsScreen} />
            <MainStack.Screen name={'LoginStack'} component={LoginStackNavigator} />
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

