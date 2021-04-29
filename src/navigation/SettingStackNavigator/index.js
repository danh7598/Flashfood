import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SettingsScreen from '../../screens/SettingsScreen';
import NotificationSettingScreen from '../../screens/SettingsScreen/NotificationSetting/NotificationSettingScreen';

const Stack = createStackNavigator();

const SettingStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={'MainSetting'} component={SettingsScreen} />
            <Stack.Screen name={'NotificationSetting'} component={NotificationSettingScreen} />
        </Stack.Navigator>
    );
};

export default SettingStackNavigator;

const styles = StyleSheet.create({});
