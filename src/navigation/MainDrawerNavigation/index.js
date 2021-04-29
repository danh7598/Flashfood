import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeTabNavigator from '../HomeTabNavigator';
import MyCouponScreen from '../../screens/MyCouponScreen';
import { orangeColor } from '../../string/ColorTheme';
import CustomDrawerContainer from './CustomDrawerContainer';
import MyWalletScreen from '../../screens/MyWalletScreen';
import NotificationScreen from '../../screens/NotificationScreen';
import MyFavouriteScreen from '../../screens/MyFavouriteScreen';
import TrackOrderScreen from '../../screens/TrackOrderScreen';

import InviteFriendScreen from '../../screens/InviteFriendScreen';
import HelpScreen from '../../screens/HelpScreen';
import SettingStackNavigator from '../SettingStackNavigator';

const Drawer = createDrawerNavigator();

const MainDrawerNavigation = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={props => <CustomDrawerContainer {...props} />}
        // overlayColor={'transparent'}
        >
            <Drawer.Screen name="Home" component={HomeTabNavigator} />
            <Drawer.Screen name="My Wallet" component={MyWalletScreen} />
            <Drawer.Screen name="Notifications" component={NotificationScreen} />
            <Drawer.Screen name="My Favourite" component={MyFavouriteScreen} />
            <Drawer.Screen name="Track Your Order" component={TrackOrderScreen} />
            <Drawer.Screen name="Coupons" component={MyCouponScreen} />
            <Drawer.Screen name="Settings" component={SettingStackNavigator} />
            <Drawer.Screen name="Invite a Friend" component={InviteFriendScreen} />
            <Drawer.Screen name="Help Center" component={HelpScreen} />


        </Drawer.Navigator>
    );
};

export default MainDrawerNavigation;

const styles = StyleSheet.create({});
