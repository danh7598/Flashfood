import React, { Component } from 'react'
import { Image, ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SkipOrNextButton from '../Onboarding/SkipOrNextButton';

export default class ForgotPassword extends Component {
    render() {
        return (
            <ImageBackground
                source={require('../../assets/backgroundMacOS2.jpg')}
                imageStyle={styles.imageBackground}
                style={styles.imageContainer}>
                <Text style={styles.textHeader}>Forgot Password</Text>
                <View style={styles.textInputContainer}>
                    <Text style={styles.textTitle}>
                        Please enter your email address
                    </Text>
                    <View style={styles.viewTextInput}>
                        <TextInput
                            //value={'Email'}
                            underlineColorAndroid="transparent"
                            autoCorrect={false}
                            placeholder={"Email"}
                            //placeholderTextColor={''}
                            style={styles.textInput} />
                        <MaterialCommunityIcons name="email-outline" size={sizeWidth(7)} color="white" />
                    </View>
                </View>
                <SkipOrNextButton
                    btnWidth={sizeWidth(90)}
                    btnBackgroundColor={'#3366FF'}
                    textFullBtn={"Reset Password"}
                    skipBtn={false} />
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
    },
    imageBackground: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    textHeader: {
        fontSize: sizeFont(6),
        textAlign: 'center',
        color: 'white',
        fontFamily: 'SVN-Gilroy-Medium',
        marginTop: sizeHeight(8)
    },
    textTitle: {
        color: 'white',
        fontSize: sizeFont(4),
    },
    textInputContainer: {
        marginTop: sizeHeight(5),
        alignItems: 'center',
    },
    viewTextInput: {
        marginTop: sizeHeight(2),
        backgroundColor: 'rgba(255,255,255,0.4)',
        height: sizeHeight(7),
        width: sizeWidth(90),
        borderRadius: sizeWidth(2),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: sizeWidth(3),
        paddingHorizontal: sizeWidth(5)
        //opacity: 0.4
    },
    textInput: {
        color: 'white',
        fontSize: sizeFont(4),
        opacity: 1
    },
    
})