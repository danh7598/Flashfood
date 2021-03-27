import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView
} from 'react-native';
import LogoComponent from './LogoComponent';
import FormComponent from './FormComponent';
import SaveAndForgotComponent from './SaveAndForgotComponent';
import ButtonSignAndSocial from './ButtonSignAndSocial';

const orangeColor = '#F96B44'
const grayColor = ''
const blueColor = ''

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      switchValue: false,
      emailValue: '',
      notificationEmail: 0, //0: dont show noti, 1: show error noti, 2: ok noti
      notificationEmailMessage: '',
      hidePassword: true,

    })
  }

  //Function change value Switch
  changeSwitchState = () => {
    this.setState({
      switchValue: !this.state.switchValue
    })
  }
  //Validate email regex
  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  //Function onChangeText on TextInput email
  onChangeEmail = (text) => {
    this.setState({
      emailValue: text
    })
    if (text === '') {
      this.setState({
        notificationEmailMessage: '',
        notificationEmail: 0
      })
    } else if (!this.validateEmail(text)) {
      this.setState({
        notificationEmailMessage: 'Incorrect email, try again',
        notificationEmail: 1
      })
    } else {
      this.setState({
        notificationEmailMessage: '',
        notificationEmail: 2
      })
    }
  }
  onChangePassword = (text) => {

  }
  hideAndShowPassword = () => {
    this.setState({
      hidePassword: !this.state.hidePassword
    })
  }
  //Clear email input by right button
  clearText = () => {
    this.setState({
      emailValue: '',
      notificationEmail: false,
      notificationEmailMessage: ''
    })
  }
  //On press the forgot button
  onPressForgot = () => {
    alert('Forgot password')
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LogoComponent
          textBold={"Let's Sign You In"}
          textLight={"Welcome back, you've been missed!"}
        />
        <View style={styles.loginFormContainer}>
          <FormComponent
            name={'Email'}
            kind={'email-address'}
            onChangeValue={this.onChangeEmail}
            valueInput={this.state.emailValue}
            placeholder={'Input your email'}
            borderColor={this.state.notificationEmail === 1 ? '#F96B44' : null}
            notification={this.state.notificationEmailMessage}
            buttonRightImage={this.state.notificationEmail === 1 ? require('../../assets/x-mark.png')
              : this.state.notificationEmail === 2 ? require('../../assets/check-mark.png')
                : null}
            tintColorRightImage={this.state.notificationEmail === 1 ? orangeColor
              : this.state.notificationEmail === 2 ? '#27AE60'
                : null}
            buttonFunction={this.clearText} />
          <FormComponent
            name={'Password'}
            secure={this.state.hidePassword}
            placeholder={'Input your password'}
            onChangeValue={this.onChangePassword}
            buttonFunction={this.hideAndShowPassword}
            buttonRightImage={require('../../assets/view.png')} />
          <SaveAndForgotComponent
            switchValue={this.state.switchValue}
            onPressSwitch={this.changeSwitchState}
            onPressForgot={this.onPressForgot} />
        </View>
        <ButtonSignAndSocial
          buttonSign={'Sign In'}
          questionSign={"Don't have account? "}
          alternativeButtonSign={'Sign Up'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginFormContainer: {
    //backgroundColor: 'cornsilk',
    flex: 1
  },
  formComponentView: {
    height: 72,
    marginHorizontal: 16,
    //backgroundColor: 'skyblue',
    marginTop: 24,

  },
  viewNameFormAndNoti: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  textNameForm: {
    color: '#525C67',
    fontSize: 14,
  },
  textFormNoti: {
    fontSize: 14,
    color: '#F96B44',
  },
  viewTextInput: {
    //borderWidth: 1,
    //borderColor: '#F96B44',
    height: 48,
    borderRadius: 10,
    backgroundColor: '#F5F5F8',
    //alignItems: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    fontSize: 14,
    width: 300,
    //fontFamily: ''
    //backgroundColor: 'cornsilk',
  },
  imgRight: {
    width: 16,
    height: 16,
  },
  viewSaveAndForgot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 16,
    //backgroundColor: 'green'
  },
  buttonContainer: {
    flex: 1,
    //backgroundColor: 'skyblue'
    //alignItems: 'center' 
  },
  loginButton: {
    height: 56,
    marginHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#F96B44',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16
  },
  socialLoginButton: {
    height: 48,
    marginHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#F96B44',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  imgSocial: {
    width: 16,
    height: 16,
    marginRight: 8
  }
});
