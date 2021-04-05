import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { orangeColor } from '../../string/ColorTheme'
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size'

const ButtonBuyNow = ({ textButton, price, onPress, style }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, style]}>
            <Text style={styles.textButton}>{textButton}</Text>
            <Text style={styles.textButton}>{price}</Text>
        </TouchableOpacity>
    )
}

export default ButtonBuyNow

const styles = StyleSheet.create({
    container: {
        backgroundColor: orangeColor,
        marginLeft: sizeWidth(4),
        marginRight: sizeWidth(4),
        width: sizeWidth(53), //Bao gồm sizeWidth(8) 2 bên padding, sizeWidth(35) của nút QuantityControl, và khoảng marginLeft sizeWidth(4) nữa
        height: sizeHeight(8),
        borderRadius: sizeWidth(3),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: sizeWidth(5)
    },
    textButton: {
        fontFamily: 'SVN-Gilroy-Bold',
        color: 'white',
        fontSize: sizeFont(4)

    }
})
