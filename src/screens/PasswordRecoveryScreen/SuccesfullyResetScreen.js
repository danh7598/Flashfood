import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import LogoAndText from '../OTPAuthenticationScreen/LogoAndText';
import Button from '../LoginScreen/Button';

import { sizeHeight, sizeWidth } from '../../Utils/Size';

import success from '../../assets/success.png';
import { orangeColor } from '../../string/ColorTheme';

export default class SuccesfullyResetScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    onPressContinue = () => {
        alert('Press Continue');
    };

    render() {
        return (
            <View style={styles.container}>
                <LogoAndText
                    style={styles.textLightHeader}
                    textBold={'Congratulations!'}
                    textLight={'You successfully rest your password.\nNow you are good to go'} />
                <Image
                    style={styles.imageCenter}
                    source={success} />
                <Button
                    onPress={this.onPressContinue}
                    style={styles.buttonSend}
                    buttonSign={'Jump into Log In'} />
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
    },
    imageCenter: {
        marginTop: sizeHeight(5),
        width: sizeWidth(70),
        height: sizeHeight(37),
        //backgroundColor: 'skyblue',
        resizeMode: 'contain',
    }
});
