import React, { Component } from 'react'
import { Platform, StyleSheet, Text, KeyboardAvoidingView, View, Image } from 'react-native';
//import LogoComponent from '../Login/LogoComponent';
import FormComponent from '../Login/FormComponent';
// import ButtonSignAndSocial from '../Login/ButtonSignAndSocial';
import { sizeHeight, sizeWidth } from '../../Utils/Size';
import HeaderText from '../Login/HeaderText';
import Button from '../Login/Button';
import QuestionSign from '../Login/QuestionSign';
import { emailNotification } from '../../string/NotificationInput';
import { validateEmailLogin } from '../../Utils/Validate';
import cancel_icon from '../../assets/cancel_icon.png';
import eye from '../../assets/eye.png';
import right_mark_icon from '../../assets/right_mark_icon.png';
import eye_close from '../../assets/eye_close.png';
const orangeColor = '#F96B44'
const grayColor = ''
const blueColor = '#0064C0'
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailValue: '',
            userNameValue: '',
            passwordValue: '',
            notificationEmail: '', //0: dont show noti, 1: show error noti, 2: ok noti
            notificationUserName: '',
            notificationPassword: '',
            hidePassword: true,
            btnShowPassword: eye,
            buttonRightImageEmail: null
        }
    }


    //Function change TextInput email 
    onChangeEmail = (text) => {
        if (text === '') {
            this.setState({
                notificationEmail: '',
                buttonRightImageEmail: null
            })
        } else if (!validateEmailLogin(text)) {
            this.setState({
                emailValue: text,
                notificationEmail: emailNotification[1],
                buttonRightImageEmail: cancel_icon
            })
        } else {
            this.setState({
                emailValue: text,
                notificationEmail: '',
                buttonRightImageEmail: right_mark_icon
            })
        }

    }

    //Function change TextInput password
    onChangePassword = (text) => {
        this.setState({
            passwordValue: text,

        })
    }
    hideAndShowPassword = () => {
        this.setState({
            hidePassword: !this.state.hidePassword,
            btnShowPassword: !this.state.hidePassword ? eye
                : eye_close
        })
    }

    //Function change TextInput username
    onChangeUserName = (text) => {
        this.setState({
            userNameValue: text
        })
    }

    onPressFacebookLogin = () => {
        alert('Press Facebook Login')
    }

    onPressGoogleLogin = () => {
        alert('Press Google Login')
    }

    onPressLogin = () => {
        alert('Press Login')
    }

    onPressQuestionSign = () => {
        alert('Press Question Sign Up')
    }

    render() {
        return (
            <View style={styles.container}>
                {/* Header View bao gồm logo và headerText */}
                <View style={styles.headerView}>
                    <Image style={styles.imgLogo} source={require('../../assets/logo-eatme.png')} />
                    <HeaderText
                        textBold={"Getting Started"}
                        textLight={"Create an account to continue!"} />
                </View>
                <KeyboardAvoidingView
                    behavior='position'
                    keyboardVerticalOffset={sizeHeight(5)}
                    style={styles.formContainer}>
                    <FormComponent
                        nameTextInput={'Email'}
                        placeholder={'Input your email'}
                        keyboardType={'email-address'}
                        onChangeValue={this.onChangeEmail}
                        notification={this.state.notificationEmail}
                        buttonRightImage={this.state.buttonRightImageEmail}
                        borderColor={this.state.buttonRightImageEmail === cancel_icon ? '#F96B44' : null}
                        tintColorRightImage={this.state.buttonRightImageEmail === cancel_icon
                            ? orangeColor : '#27AE60'}
                    />
                    <FormComponent
                        nameTextInput={'Username'}
                        placeholder={'Input your user name'}
                        onChangeValue={this.onChangeUserName}
                    />
                    <FormComponent
                        nameTextInput={'Password'}
                        placeholder={'Input your password'}
                        onChangeValue={this.onChangePassword}
                        secure={this.state.hidePassword}
                        buttonFunction={this.hideAndShowPassword}
                        buttonRightImage={this.state.btnShowPassword}
                    />
                </KeyboardAvoidingView>
                {/* ViewFooterButton bao gồm 3 nút Login, dòng hỏi có account chưa 
        và 2 nút google, facebook */}
                <View style={styles.viewFooterButton}>
                    <View>
                        <Button
                            onPress={this.onPressLogin}
                            buttonSign={"Sign In"} />
                        <QuestionSign
                            onPress={this.onPressQuestionSign}
                            alternativeButtonSign={"Sign Up"}
                            questionSign={"Don't have an account? "} />
                    </View>
                    <View>
                        <Button
                            onPress={this.onPressFacebookLogin}
                            btnBackgroundColor={blueColor}
                            imgSrc={require('../../assets/facebook.png')}
                            buttonSign={"Continue With Facebook"} />
                        <Button
                            onPress={this.onPressGoogleLogin}
                            marginBottom={0}
                            textColor={'#111A2C'}
                            btnBackgroundColor={'#F5F5F8'}
                            imgSrc={require('../../assets/google.png')}
                            buttonSign={"Continue With Google"} />
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginTop: sizeHeight(6)
        //backgroundColor: 'skyblue'
    },
    headerView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: sizeHeight(3),
        //backgroundColor: 'skyblue'
    },
    imgLogo: {
        width: sizeWidth(50),
        height: sizeHeight(8),
        resizeMode: 'contain',
        marginBottom: sizeHeight(3)
        //backgroundColor: 'skyblue',
    },
    formContainer: {
        //backgroundColor: 'cornsilk'
    },
    viewFooterButton: {
        //backgroundColor: 'skyblue',
        flex: 1,
        justifyContent: 'space-between',
        marginTop: sizeHeight(2),
        marginBottom: sizeHeight(2)
    }
})