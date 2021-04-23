import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import FormComponent from '../LoginScreen/FormComponent';
import LogoAndText from '../OTPAuthenticationScreen/LogoAndText';
import Button from '../LoginScreen/Button';

import { sizeHeight, sizeWidth } from '../../Utils/Size';
import eye from '../../assets/eye.png';
import eye_close from '../../assets/eye_close.png';
import { orangeColor } from '../../string/ColorTheme';

export default class PasswordResetScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            passwordValue: '',
            passwordValueConfirm: '',
            notificationPassword: 0,
            hidePassword: true,
            btnShowPassword: require('../../assets/eye.png')
        };
    }

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

    onPressReset = () => {
        alert('Press Reset Password');
    };

    render() {
        return (
            <View style={styles.container}>
                <LogoAndText
                    style={styles.textLightHeader}
                    textBold={'Password Recovery'}
                    textLight={'Please enter your email address to recover your password'} />
                <View style={styles.viewInput}>
                    <FormComponent
                        nameTextInput={'New Password'}
                        secure={this.state.hidePassword}
                        placeholder={'Input your password'}
                        valueInput={this.state.passwordValue}
                        onChangeValue={this.onChangePassword}
                        buttonFunction={this.hideAndShowPassword}
                        buttonRightImage={this.state.btnShowPassword} />
                    <FormComponent
                        nameTextInput={'Confirm Password'}
                        secure={this.state.hidePassword}
                        placeholder={'Input your password'}
                        valueInput={this.state.passwordValueConfirm}
                        onChangeValue={this.onChangePassword}
                        buttonFunction={this.hideAndShowPassword}
                        buttonRightImage={this.state.btnShowPassword} />
                </View>
                <Button
                    onPress={this.onPressReset}
                    style={styles.buttonSend}
                    buttonSign={'Reset Password'} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    viewInput: {
        marginTop: sizeHeight(2),
    },
    textLightHeader: {
        lineHeight: sizeHeight(3),
        width: sizeWidth(80),

    },
    buttonSend: {
        position: 'absolute',
        bottom: sizeHeight(4),
        width: sizeWidth(92)
    }
});
