import React, { Component } from 'react'
import {Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <View style={styles.logoView}>
                    <Image style={styles.logoImg} source={{uri: 'https://uifaces.co/our-content/donated/gPZwCbdS.jpg'}}/>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.inputView}>
                        <View style={styles.iconInput}>
                            <MaterialCommunityIcons name='email-outline' size={32} color={'white'}/>
                        </View>
                        <View style={styles.textViewInput}>
                            <Text style={styles.textInput}>
                                Enter your email
                            </Text>
                        </View>
                    </View>
                    <View style={styles.inputView}>
                    <View style={styles.iconInput}>
                    <MaterialIcons name="lock-outline" size={32} color="white" />
                    </View>
                        <View style={styles.textViewInput}>
                        <Text style={styles.textInput}>
                                Enter your password
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.textLoginButton}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#c8d6e5'
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logoView: {
        width: 150,
        height: 150,
    },
    logoImg: {
        width: 150,
        height: 150,
        borderRadius: 75
    },
    inputContainer: {
        flex: 1,
        paddingTop: 24
        //justifyContent: 'space-evenly'
    },
    inputView: {
        flexDirection: 'row',
        backgroundColor: 'gray',
        height: 56,
        borderRadius: 12,
        margin: 15,
        
    },
    iconInput: {
        height: 56,
        width: 56,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textViewInput: {
        justifyContent: 'center'
    },
    textInput: {
        fontSize: 18,
        color: 'white',
        
    },
    footerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginButton: {
        height: 75,
        width: 300,
        borderRadius: 40,
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textLoginButton: {
        fontSize: 32,
        fontWeight: 'bold',
        //color: 'white'
    }
})