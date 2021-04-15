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
                disabled={number === 1 ? true : false}
                onPress={onPressMinus}>
                <Image
                    source={minus}
                    style={[styles.imgBtn,
                    { tintColor: number === 1 ? '#898B9A' : orangeColor}]} />
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
    onPressPlus: PropTypes.func.isRequired,
    onPressMinus: PropTypes.func.isRequired,
    number: PropTypes.number,
    style: PropTypes.object,
}

QuantityControl.defaultProps = {
    number: 1,
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
        fontSize: sizeFont(5),
        color: blackColor
    }
})
