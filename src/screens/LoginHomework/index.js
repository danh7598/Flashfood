import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size'
import FormInput from '../RegisterHomework/FormInput'
import HeaderText from '../RegisterHomework/HeaderText'
import LogoComponent from '../RegisterHomework/LogoComponent'
import QuestionSign from '../RegisterHomework/QuestionSign'
import SignButton from '../RegisterHomework/SignButton'
import SocialButton from '../RegisterHomework/SocialButton'

export default class LoginHomework extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LogoComponent />
                <HeaderText
                    textBold={"Let's sign you in"}
                    textLight={"Welcome back You've been missed!"} />
                <View style={styles.viewFormInput}>
                    <FormInput placeholder={'Email address'} />
                    <FormInput placeholder={'Password'} />
                </View>
                <SignButton
                    signText={'Log in'} />
                <TouchableOpacity style={styles.forgotButton}>
                    <Text style={styles.textForgotButton}>
                        Forgot Password?
                        </Text>
                </TouchableOpacity>
                <QuestionSign
                    questionTextButton={'Sign Up'}
                    questionText={"Don't have an account? "} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    forgotButton: {
        //backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: sizeWidth(10)
    },
    textForgotButton: {
        color: '#8FBDD5',
        fontSize: sizeFont(4),
        fontFamily: 'SVN-Gilroy-Bold',
    },
    viewFormInput: {
        paddingHorizontal: sizeWidth(8),
        marginTop: sizeWidth(6)
    }
})