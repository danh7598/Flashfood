import React, { Component } from 'react'
import { Platform, StyleSheet, Text, KeyboardAvoidingView, View } from 'react-native';
import LogoComponent from '../Login/LogoComponent';
import FormComponent from '../Login/FormComponent';
import ButtonSignAndSocial from '../Login/ButtonSignAndSocial';
export default class Register extends Component {
    render() {
        
        return (
            <View style={styles.container}>
                <LogoComponent
                    textBold={'Getting Started'}
                    textLight={'Create an account to continue!'}
                />
                <KeyboardAvoidingView
                    behavior='position'
                    keyboardVerticalOffset={40}
                    style={styles.formContainer}>
                    <FormComponent
                        name={'Email'} />
                    <FormComponent
                        name={'Username'} />
                    <FormComponent
                        name={'Password'} />
                </KeyboardAvoidingView>
                <ButtonSignAndSocial
                    buttonSign={'Sign Up'}
                    questionSign={'Already have an account? '}
                    alternativeButtonSign={'Sign In'} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    formContainer: {
        marginBottom: 32
    }
})