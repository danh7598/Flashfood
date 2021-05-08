import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import FormComponent from '../LoginScreen/FormComponent';
import LogoAndText from '../OTPAuthenticationScreen/LogoAndText';
import Button from '../LoginScreen/Button';
import cancel_icon from '../../assets/cancel_icon.png';
import right_mark_icon from '../../assets/right_mark_icon.png';
import { sizeHeight, sizeWidth } from '../../Utils/Size';
import { validateEmailLogin } from '../../Utils/Validate';
import { orangeColor, trueGreenColor } from '../../string/ColorTheme';
import { emailNotification } from '../../string/NotificationInput';
import { forgotPasswordByEmail } from '../../Utils/api';
export default class PasswordRecoveryScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emailValue: '',
            notificationEmail: '',

        };
    }

    //Function onChangeText on TextInput email
    onChangeEmail = (text) => {
        this.setState({
            emailValue: text
        });
        if (text === '') {
            this.setState({
                notificationEmail: ''
            });
        } else if (!validateEmailLogin(text)) {
            this.setState({
                notificationEmail: 2
            });
        } else {
            this.setState({
                notificationEmail: 3,
            });
        }
    };

    //Clear email input by right button
    clearText = () => {
        this.setState({
            emailValue: '',
            notificationEmail: '',
        });
    };

    onPressSendEmail = () => {
        this.setState({ loading: true }, async () => {
            try {
                const response = await forgotPasswordByEmail(this.state.emailValue);
                if (response.success) {
                    alert(response.message);
                    this.props.navigation.navigate('OTPAuthentication');
                } else {
                    alert(response.message);
                }
            } catch (e) {
                console.log(e);
            }

        });

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
                </View>
                <Button
                    onPress={this.onPressSendEmail}
                    style={styles.buttonSend}
                    buttonSign={'Send Email'} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
