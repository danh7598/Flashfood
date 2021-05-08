import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding1Screen from '../../screens/OnboardingScreen/Onboarding1Screen';
import Onboarding2Screen from '../../screens/OnboardingScreen/Onboarding2Screen';
import Onboarding3Screen from '../../screens/OnboardingScreen/Onboarding3Screen';

const Stack = createStackNavigator();

const OnboardingStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={'Onboarding1'} component={Onboarding1Screen} />
            <Stack.Screen name={'Onboarding2'} component={Onboarding2Screen} />
            <Stack.Screen name={'Onboarding3'} component={Onboarding3Screen} />
        </Stack.Navigator>
    );
};

export default OnboardingStackNavigator;

const styles = StyleSheet.create({});
