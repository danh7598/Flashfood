import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import background from '../../assets/background_successpayment.png';
import success from '../../assets/icon_success.png';
import { blackColor } from '../../string/ColorTheme';
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size';
import Button from '../LoginScreen/Button';
const SuccessfullyPayment = () => {
    return (
        <ImageBackground
            style={styles.background}
            imageStyle={styles.imgBackground}
            source={background}>
            <View style={styles.viewGroupCenter}>
                <Image
                    style={styles.imgSuccess}
                    source={success} />
                <Text style={styles.textBold}>Congratulations!</Text>
                <Text style={styles.textLight}>You successfully maked a payment, enjoy our service!</Text>
            </View>
            <Button
                onPress={() => { }}
                style={styles.btnDone}
                buttonSign={"Done"}
            />
        </ImageBackground>
    );
};

export default SuccessfullyPayment;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
    },
    imgBackground: {
        resizeMode: 'stretch',
    },
    viewGroupCenter: {
        marginTop: sizeHeight(26.97),
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgSuccess: {
        width: sizeHeight(18.47),
        height: sizeHeight(18.47)
    },
    textBold: {
        marginTop: sizeHeight(4.92),
        fontFamily: 'SVN-Gilroy-Bold',
        fontSize: sizeFont(3.125),
        color: blackColor
    },
    textLight: {
        marginTop: sizeHeight(1.97),
        width: sizeWidth(60.8),
        lineHeight: sizeHeight(2.95),
        textAlign: 'center',
        fontFamily: 'SVN-Gilroy-Medium',
        fontWeight: '500',
        fontSize: sizeFont(1.83),
        color: '#525C67'
    },
    btnDone: {
        width: sizeWidth(92),
        position: 'absolute',
        bottom: sizeHeight(3.94)
    }
});
