import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddNewCardScreen from '../../screens/AddNewCardScreen';
import MyCardScreen from '../../screens/MyCardScreen';

const Stack = createStackNavigator();

const CardStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={'My Card'} component={MyCardScreen} />
            <Stack.Screen name={'AddNewCard'} component={AddNewCardScreen} />
        </Stack.Navigator>
    );
};

export default CardStackNavigator;

const styles = StyleSheet.create({});
