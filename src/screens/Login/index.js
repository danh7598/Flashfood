import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Dimensions
} from 'react-native';
import FormComponent from './FormComponent';
import SaveAndForgotComponent from './SaveAndForgotComponent';
import HeaderText from './HeaderText';
import Button from './Button';
import QuestionSign from './QuestionSign';
import { sizeHeight, sizeWidth } from '../../Utils/Size';

const orangeColor = '#F96B44'
const grayColor = ''
const blueColor = '#0064C0'


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      switchValue: false,
      emailValue: '',
      passwordValue: '',
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
    this.setState({
      passwordValue: text
    })
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
            textBold={"Let's Sign You In"}
            textLight={"Welcome back, you've been missed!"} />
        </View>

        {/* loginFormContainer bao gồm các textInput để Login */}
        <View style={styles.loginFormContainer}>
          <FormComponent
            nameTextInput={'Email'}
            keyboardType={'email-address'}
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
            nameTextInput={'Password'}
            secure={this.state.hidePassword}
            placeholder={'Input your password'}
            valueInput={this.state.passwordValue}
            onChangeValue={this.onChangePassword}
            buttonFunction={this.hideAndShowPassword}
            buttonRightImage={require('../../assets/view.png')} />
        </View>

        {/* SaveAndForgotComponent chứa view bao gồm switch Save password và forgot password cùng 1 hàng */}
        <SaveAndForgotComponent
          switchValue={this.state.switchValue}
          onPressSwitch={this.changeSwitchState}
          onPressForgot={this.onPressForgot} />
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
              textColor={'#111A2C'}
              btnBackgroundColor={'#F5F5F8'}
              imgSrc={require('../../assets/google.png')}
              buttonSign={"Continue With Google"} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  headerView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: sizeHeight(4),
    //backgroundColor: 'skyblue'
  },
  imgLogo: {
    width: sizeWidth(50),
    height: sizeHeight(8),
    resizeMode: 'contain',
    marginBottom: sizeHeight(3)
    //backgroundColor: 'skyblue',
  },
  loginFormContainer: {
    //backgroundColor: 'cornsilk',
    //height: sizeHeight(30),
    marginBottom: sizeHeight(1),
  },
  viewFooterButton: {
    //backgroundColor: 'skyblue',
    flex: 1,
    justifyContent: 'space-between',
    marginTop: sizeHeight(3),
    marginBottom: sizeHeight(2)
  }
});
