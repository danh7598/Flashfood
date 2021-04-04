import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { sizeHeight, sizeWidth } from '../../Utils/Size'
import minus from '../../assets/minus.png'
import plus from '../../assets/plus.png'
const QuantityControl = ({ number, backgroundColor }) => {
    return (
        <View style={[styles.container, { backgroundColor: backgroundColor }]}>
            <TouchableOpacity>
                <Image
                    source={minus}
                    style={styles.imgBtn} />
            </TouchableOpacity>
            <Text>{number}</Text>
            <TouchableOpacity>
                <Image
                    style={styles.imgBtn}
                    source={plus} />
            </TouchableOpacity>
        </View>
    )
}

export default QuantityControl

const styles = StyleSheet.create({
    container: {
        width: sizeWidth(35),
        height: sizeHeight(8),
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgBtn: {
        width: sizeWidth(5),
        height: sizeWidth(5),
    }
})
