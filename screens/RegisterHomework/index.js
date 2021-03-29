import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { sizeHeight, sizeWidth } from '../../Utils/Size'
import FormInput from './FormInput'
import HeaderText from './HeaderText'
import QuestionSign from './QuestionSign'
import SignButton from './SignButton'
import SocialButton from './SocialButton'

export default class RegisterHomework extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}></View>
                <HeaderText
                    textBold={"Let's log you in"}
                    textLight={"Welcome back You've been missed!"} />
                <View style={styles.viewSocialButton}>
                    <SocialButton
                        source={require('../../assets/google-glass-logo.png')}
                        backgroundColor={'#EA4235'}
                        textButton={'Google'} />
                    <SocialButton
                        source={require('../../assets/facebook_word.png')}
                        backgroundColor={'#1878F3'}
                        textButton={'Facebook'} />
                </View>
                <View style={styles.viewFormInput}>
                    <FormInput placeholder={'Username'} />
                    <FormInput placeholder={'Email address'} />
                    <FormInput placeholder={'Password'} />
                </View>
                <SignButton
                    signText={'Sign Up'} />
                <QuestionSign
                    questionTextButton={'Sign In'}
                    questionText={'Have an account? '}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoContainer: {
        height: sizeHeight(20),
        backgroundColor: 'skyblue'
    },
    viewSocialButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: sizeWidth(8),
        marginTop: sizeWidth(8)
    },
    viewFormInput: {
        paddingHorizontal: sizeWidth(8),
        marginTop: sizeWidth(6)
    }
})