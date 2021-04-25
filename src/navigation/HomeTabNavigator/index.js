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
const HomeTabStack = createBottomTabNavigator();

const HomeTabNavigator = () => {
    return (
        <HomeTabStack.Navigator
            initialRouteName={'Home'}
            tabBar={props => <Tabbar {...props} />}
            tabBarOptions={{
                // tabStyle: styles.tabStyle,
                style: styles.homeTabStackStyle,
                showLabel: true,
                labelPosition: 'beside-icon',
                labelStyle: styles.textTabbar
            }}
        // screenOptions={({ navigation, route }) => ({
        //     tabBarButton: props =>
        //         <TouchableRipple
        //             style={{ width: 10 }}
        //             {...props} />
        //     ,
        //     tabBarIcon: ({ focused, color }) => {
        //         let icon = '';
        //         switch (route.name) {
        //             case 'Home':
        //                 icon = home_tabbar;
        //                 break;
        //             case 'Filter':
        //                 icon = search_tabbar;
        //                 break;
        //             case 'Cart':
        //                 icon = my_cart_tabbar;
        //                 break;
        //             case 'Favourite':
        //                 icon = favourite_tabbar;
        //                 break;
        //             case 'Notification':
        //                 icon = Notification;
        //                 break;
        //         }
        //         if (focused) {
        //             return (
        //                 <View style={styles.viewTabbarIconFocused}>
        //                     <Image
        //                         style={styles.imgTabbar}
        //                         source={icon} />
        //                     <Text style={styles.textTabbar} >
        //                         {route.name}
        //                     </Text>
        //                 </View>

        //             );
        //         }
        //         return (
        //             <View style={styles.viewTabbarIconOutFocused}>
        //                 <Image
        //                     style={[styles.imgTabbar, { tintColor: '#898B9A' }]}
        //                     source={icon} />
        //             </View>

        //         );
        //     },
        // })}
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
                tabBarVisible: true,
            }} />
        </HomeTabStack.Navigator >
    );
};

export default HomeTabNavigator;

const styles = StyleSheet.create({
    // tabStyle: {
    //     backgroundColor: 'skyblue',
    //     // height: responsiveHeight(10)
    //     //backgroundColor: 'skyblue',
    //     //width: responsiveWidth(10)
    // },
    homeTabStackStyle: {
        height: responsiveHeight(8),
        // width: responsiveWidth(100),
        justifyContent: 'center',
        borderTopLeftRadius: responsiveWidth(6.4),
        borderTopRightRadius: responsiveWidth(6.4),
        // justifyContent: 'space-around',
        // paddingBottom: responsiveWidth(4),
        paddingHorizontal: responsiveWidth(4)
    },
    viewTabbarIconFocused: {
        alignSelf: 'center',
        //marginLeft: responsiveWidth(4),
        width: responsiveWidth(23.73),
        height: responsiveHeight(4.9),
        borderRadius: responsiveWidth(5.3),
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: orangeColor
    },
    imgTabbar: {
        width: responsiveWidth(4.2),
        height: responsiveWidth(4.2),
        tintColor: 'white'
    },
    textTabbar: {
        // backgroundColor: 'tomato',
        marginLeft: responsiveWidth(2.1),
        fontFamily: 'SVN-Gilroy-Bold',
        fontWeight: '700',
        fontSize: responsiveFontSize(1.57),
        color: 'white',

    },
    viewTabbarIconOutFocused: {
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
        width: responsiveWidth(6.4),
        height: responsiveHeight(4.9),
    },

});
