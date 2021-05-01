import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import FilterScreen from '../../screens/FilterScreen';
import MyFavouriteScreen from '../../screens/MyFavouriteScreen';
import MyCartScreen from '../../screens/MyCartScreen';
import NotificationScreen from '../../screens/NotificationScreen';
import home_tabbar from '../../assets/home-tabbar.png';
import my_cart_tabbar from '../../assets/my-cart-tabbar.png';
import Notification from '../../assets/notification-tabbar.png';
import search_tabbar from '../../assets/search-tabbar.png';
import favourite_tabbar from '../../assets/favourite-tabbar.png';
import { grayColor, orangeColor } from '../../string/ColorTheme';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { TouchableRipple } from 'react-native-paper';
import Tabbar from './Tabbar';
import { sizeHeight } from '../../Utils/Size';
const HomeTabStack = createBottomTabNavigator();

const HomeTabNavigator = () => {
    return (
        <HomeTabStack.Navigator
            initialRouteName={'Home'}
            backBehavior={'initialRoute'}
            tabBar={props => <Tabbar {...props} />}
        >
            <HomeTabStack.Screen name={'Home'} component={HomeScreen} />
            <HomeTabStack.Screen name={'Filter'} component={FilterScreen} options={{
                tabBarVisible: true,
            }} />
            <HomeTabStack.Screen name={'Cart'} component={MyCartScreen} options={{
                tabBarVisible: false,
            }} />
            <HomeTabStack.Screen name={'Favourite'} component={MyFavouriteScreen} options={{
                tabBarVisible: false,
            }} />
            <HomeTabStack.Screen name={'Notification'} component={NotificationScreen} options={{
                tabBarVisible: false,
            }} />
        </HomeTabStack.Navigator >
    );
};

export default HomeTabNavigator;

const styles = StyleSheet.create({
    scenceContainer: {

    }

});
