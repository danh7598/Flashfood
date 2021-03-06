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
  Dimensions,
  ScrollView
} from 'react-native';
import FormComponent from './FormComponent';
import SaveAndForgotComponent from './SaveAndForgotComponent';
import HeaderText from './HeaderText';
import Button from './Button';
import QuestionSign from './QuestionSign';
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size';
import { validateEmailLogin } from '../../Utils/Validate';
import { blackColor, blueColor, orangeColor, trueGreenColor } from '../../string/ColorTheme';
import right_mark_icon from '../../assets/right_mark_icon.png';
import cancel_icon from '../../assets/cancel_icon.png';
import logo_eatme from '../../assets/logo-eatme.png';
import LogoAndText from '../OTPAuthenticationScreen/LogoAndText';
import eye from '../../assets/eye.png';
import eye_close from '../../assets/eye_close.png';
import { emailNotification } from '../../string/NotificationInput';
import { loginWithEmailAndPassword } from '../../Utils/api';
import { connect } from 'react-redux';

import firebase from 'firebase/app';
import "firebase/auth";
import { actionLogin, actionSetloading } from '../../redux/Authentication/AuthenticationActions';
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      switchValue: false,
      emailValue: '',
      passwordValue: '',
      notificationEmail: 0, //0: dont show noti, 1: show error noti, 2: ok noti
      hidePassword: true,
      btnShowPassword: eye,
      bodyLogin: ''

    });
  }


  //Function change value Switch
  changeSwitchState = () => {
    this.setState({
      switchValue: !this.state.switchValue
    });
  };


  //Function onChangeText on TextInput email
  onChangeEmail = (text) => {
    this.setState({
      emailValue: text
    });
    if (text === '') {
      this.setState({
        notificationEmail: 0 //Chưa chỉnh sửa gì
      });
    } else if (!validateEmailLogin(text)) {
      this.setState({
        notificationEmail: 2 //Sai cú pháp email
      });
    } else {
      this.setState({
        notificationEmail: 3 //Đúng cú pháp email
      });
    }
  };
  onChangePassword = (text) => {
    this.setState({
      passwordValue: text
    });
  };

  hideAndShowPassword = () => {
    this.setState({
      hidePassword: !this.state.hidePassword,
      btnShowPassword: !this.state.hidePassword ? eye : eye_close
    });
  };
  //Clear email input by right button
  clearText = () => {
    this.setState({
      emailValue: '',
      notificationEmail: 0,
    });
  };
  //On press the forgot button
  onPressForgot = () => {
    this.props.navigation.navigate('PasswordRecovery');
  };

  onPressFacebookLogin = () => {
    alert('Press Facebook Login');
  };

  onPressGoogleLogin = () => {
    alert('Press Google Login');
  };


  onPressLogin = () => {
    this.props.setLoading(true);
    this.props.loginWithEmailAndPassword({ email: this.state.emailValue, password: this.state.passwordValue });
    // this.setState({ loading: true }, () => {
    //   let email = this.state.emailValue;
    //   let password = this.state.passwordValue;

    // });
  };

  //Using API
  // onPressLogin = () => {
  //   this.setState({ loading: true }, async () => {
  //     try {
  //       const loginInfo = await loginWithEmailAndPassword(this.state.emailValue,
  //         this.state.passwordValue);
  //       console.log(loginInfo);
  //       if (!loginInfo.ok) {
  //         this.setState({
  //           loading: false,
  //           bodyLogin: 'Login Failed',
  //           passwordValue: ''
  //         });
  //       } else {
  //         this.setState({
  //           loading: false,
  //           bodyLogin: 'Login Successfully'
  //         }, () => {
  //           this.props.navigation.navigate('Home');
  //         });
  //       }
  //       alert(this.state.bodyLogin);


  //     }
  //     catch (e) {
  //       this.setState({
  //         loading: false
  //       }, () => {
  //         console.log(e);
  //       });
  //     }
  //   });
  // };

  onPressQuestionSign = () => {
    this.props.navigation.navigate('Register');
  };

  componentDidMount = () => {

  };


  render() {
    // console.log(emailNotification)
    // console.log(this.props.userCredential);
    if (this.props.userCredential) {
      this.props.navigation.navigate('HomeDrawer');
    }
    return (
      <View style={styles.container}>
        {/* Header View bao gồm logo và headerText */}
        <LogoAndText
          textBold={"Let's Sign You In"}
          textLight={"Welcome back, you've been missed!"} />

        {/* loginFormContainer bao gồm các textInput để Login */}
        <View style={styles.loginFormContainer}>
          <FormComponent
            nameTextInput={'Email'}
            keyboardType={'email-address'}
            onChangeValue={this.onChangeEmail}
            valueInput={this.state.emailValue}
            placeholder={'Input your email'}
            borderColor={this.state.notificationEmail === 2 ? orangeColor : null}
            notification={emailNotification[this.state.notificationEmail]}
            buttonRightImage={this.state.notificationEmail === 2 ? cancel_icon
              : this.state.notificationEmail === 3 ? right_mark_icon
                : null}
            tintColorRightImage={this.state.notificationEmail === 2 ? orangeColor
              : this.state.notificationEmail === 3 ? trueGreenColor
                : null}
            buttonFunction={this.state.notificationEmail !== 2 ? this.clearText : null} />
          <FormComponent
            nameTextInput={'Password'}
            secure={this.state.hidePassword}
            placeholder={'Input your password'}
            valueInput={this.state.passwordValue}
            onChangeValue={this.onChangePassword}
            buttonFunction={this.hideAndShowPassword}
            buttonRightImage={this.state.btnShowPassword} />
        </View>

        {/* SaveAndForgotComponent chứa view bao gồm switch Save password và forgot password cùng 1 hàng */}
        <SaveAndForgotComponent
          switchValue={this.state.switchValue}
          onPressSwitch={this.changeSwitchState}
          onPressForgot={this.onPressForgot} />

        {/* ViewFooterButton bao gồm 3 nút Login, dòng hỏi có account chưa 
        và 2 nút google, facebook */}
        <View style={styles.viewFooterButton}>
          <View>
            <Button
              isLoading={this.props.loading}
              onPress={this.onPressLogin}
              textStyle={styles.btnSignIn}
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
              textStyle={styles.btnFacebook}
              imgSrc={require('../../assets/facebook.png')}
              buttonSign={"Continue With Facebook"} />
            <Button
              onPress={this.onPressGoogleLogin}
              textStyle={styles.btnGoogle}
              btnBackgroundColor={'#F5F5F8'}
              imgSrc={require('../../assets/google.png')}
              buttonSign={"Continue With Google"} />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.authenticationReducer.loading,
    userCredential: state.authenticationReducer.userCredential
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoading: (state) => {
      dispatch(actionSetloading(state));
    },
    loginWithEmailAndPassword: (info) => {
      dispatch(actionLogin(info));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

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
    marginBottom: sizeHeight(4)
  },
  btnSignIn: {
    color: 'white'
  },
  btnFacebook: {
    fontSize: sizeFont(1.83),
    color: 'white',
  },
  btnGoogle: {
    fontSize: sizeFont(1.83),
    color: blackColor
  }
});
