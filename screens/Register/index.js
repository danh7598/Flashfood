import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import LogoComponent from '../Login/LogoComponent';
import FormComponent from '../Login/FormComponent';
import ButtonSignAndSocial from '../Login/ButtonSignAndSocial';
export default class Register extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LogoComponent
                    textBold={'Getting Started'}
                    textLight={'Create an account to continue!'} />
                <FormComponent
                    name={'Email'} />
                <FormComponent
                    name={'Username'} />
                <FormComponent
                    name={'Password'} />
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
    }
})