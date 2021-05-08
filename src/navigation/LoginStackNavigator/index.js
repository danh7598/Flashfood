import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from '../../screens/LoginScreen';
import OPTAuthenticationScreen from '../../screens/OTPAuthenticationScreen';
import PasswordRecoveryScreen from '../../screens/PasswordRecoveryScreen/PasswordRecoveryScreen';
import PasswordResetScreen from '../../screens/PasswordRecoveryScreen/PasswordResetScreen';
import SuccesfullyResetScreen from '../../screens/PasswordRecoveryScreen/SuccesfullyResetScreen';
import RegisterScreen from '../../screens/RegisterScreen';

const Stack = createStackNavigator();

const LoginStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={'Login'}
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name={'Login'} component={LoginScreen} />
            <Stack.Screen name={'Register'} component={RegisterScreen} />
            <Stack.Screen name={'PasswordRecovery'} component={PasswordRecoveryScreen} />
            <Stack.Screen name={'PasswordReset'} component={PasswordResetScreen} />
            <Stack.Screen name={'ResetSuccess'} component={SuccesfullyResetScreen} />
            <Stack.Screen name={'OTPAuthentication'} component={OPTAuthenticationScreen} />
        </Stack.Navigator>
    );
};

export default LoginStackNavigator;

const styles = StyleSheet.create({});
