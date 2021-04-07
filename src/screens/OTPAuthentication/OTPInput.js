import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { blackColor, grayColor } from '../../string/ColorTheme'
import { sizeFont, sizeWidth } from '../../Utils/Size'

const OTPInput = ({ value, onChangeValue, backFocus, forwardFocus }) => {
    // console.log(backFocus)
    return (
        <TextInput
            value={value}
            maxLength={1}
            keyboardType={'numeric'}
            onChangeText={(text) => onChangeValue(text, value, backFocus, forwardFocus)}
            style={styles.textInputOPT}>
        </TextInput>
    )
}

export default OTPInput

const styles = StyleSheet.create({
    textInputOPT: {
        width: sizeWidth(15),
        height: sizeWidth(15),
        backgroundColor: grayColor,
        borderRadius: sizeWidth(3),
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderWidth: 0.5,
        borderColor: '#CFD0D7',
        fontFamily: 'SVN-Gilroy-Bold',
        fontSize: sizeFont(5),
        color: blackColor
    }
})
