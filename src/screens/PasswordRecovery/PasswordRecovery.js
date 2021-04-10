import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import FormComponent from '../Login/FormComponent'
import LogoAndText from '../OTPAuthentication/LogoAndText'
import Button from '../Login/Button'
import cancel_icon from '../../assets/cancel_icon.png'
import right_mark_icon from '../../assets/right_mark_icon.png'
import { sizeHeight, sizeWidth } from '../../Utils/Size'
import { validateEmailLogin } from '../../Utils/Validate'
import { orangeColor } from '../../string/ColorTheme'
export default class PasswordRecovery extends Component {
    constructor(props) {
        super(props)

        this.state = {
            emailValue: '',
            notificationEmail: 0,
            notificationEmailMessage: ''
        }
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
        } else if (!validateEmailLogin(text)) {
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

    //Clear email input by right button
    clearText = () => {
        this.setState({
            emailValue: '',
            notificationEmail: false,
            notificationEmailMessage: ''
        })
    }

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
                        borderColor={this.state.notificationEmail === 1 ? '#F96B44' : null}
                        notification={this.state.notificationEmailMessage}
                        buttonRightImage={this.state.notificationEmail === 1 ? cancel_icon
                            : this.state.notificationEmail === 2 ? right_mark_icon
                                : null}
                        tintColorRightImage={this.state.notificationEmail === 1 ? orangeColor
                            : this.state.notificationEmail === 2 ? '#27AE60'
                                : null}
                        buttonFunction={this.state.notificationEmail !== 2 ? this.clearText : null} />
                </View>
                <Button
                    style={styles.buttonSend}
                    buttonSign={'Send Email'} />
            </View>
        )
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
})
