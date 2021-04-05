import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size'
import minus from '../../assets/minus.png'
import plus from '../../assets/plus.png'
import PropTypes from 'prop-types'
import { blackColor, orangeColor } from '../../string/ColorTheme'
const QuantityControl = ({ number, onPressPlus, onPressMinus, style }) => {
    return (
        <View style={[styles.container, style]}>
            <TouchableOpacity
                onPress={onPressMinus}>
                <Image
                    source={minus}
                    style={styles.imgBtn} />
            </TouchableOpacity>
            <Text style={styles.textNumber}>{number}</Text>
            <TouchableOpacity
                onPress={onPressPlus}>
                <Image
                    style={styles.imgBtn}
                    source={plus} />
            </TouchableOpacity>
        </View>
    )
}

QuantityControl.propTypes = {

}

export default QuantityControl

const styles = StyleSheet.create({
    container: {
        width: sizeWidth(35),
        height: sizeHeight(8),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: sizeWidth(3)
    },
    imgBtn: {
        width: sizeWidth(4),
        height: sizeWidth(4),
        tintColor: orangeColor
    },
    textNumber: {
        fontFamily: 'SVN-Gilroy-Bold',
        fontSize: sizeFont(4),
        color: blackColor
    }
})
