import React, { Component } from 'react'
import { Platform, StyleSheet, Text, KeyboardAvoidingView, View, Image } from 'react-native';
//import LogoComponent from '../Login/LogoComponent';
import FormComponent from '../Login/FormComponent';
// import ButtonSignAndSocial from '../Login/ButtonSignAndSocial';
import { sizeHeight, sizeWidth } from '../../Utils/Size';
import HeaderText from '../Login/HeaderText';
import Button from '../Login/Button';
import QuestionSign from '../Login/QuestionSign';

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
            notificationEmail: ['This email is already taken', 'Incorrect email, Try again'], //0: dont show noti, 1: show error noti, 2: ok noti
            notificationUserName: ['This user name is already taken',],
            notificationPassword: ['Password must be 9 characters'],
            hidePassword: true,
            btnShowPassword: require('../../assets/eye.png')
        }
    }


    //Function change TextInput email 
    onChangeEmail = (text) => {
        this.setState({
            emailValue: text,

        })

    }

    //Function change TextInput password
    onChangePassword = (text) => {
        this.setState({
            passwordValue: text
        })
    }
    hideAndShowPassword = () => {
        this.setState({
            hidePassword: !this.state.hidePassword,
            btnShowPassword: !this.state.hidePassword ? require('../../assets/eye.png')
                : require('../../assets/eye_close.png')
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