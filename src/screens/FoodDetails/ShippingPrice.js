import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size'
import dollar from '../../assets/dollar.png';
import { blackColor } from '../../string/ColorTheme'
const ShippingPrice = ({ textPrice }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.imgDollar}
                source={dollar} />
            <Text style={styles.textPrice}>{textPrice}</Text>
        </View>
    )
}

export default ShippingPrice

const styles = StyleSheet.create({
    container: {
        width: sizeWidth(28),
        height: sizeHeight(4),
        //backgroundColor: 'skyblue',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: sizeWidth(5)
    },
    imgDollar: {
        width: sizeWidth(4),
        //backgroundColor: 'skyblue',
        height: sizeWidth(4),
        resizeMode: 'contain',
    },
    textPrice: {
        color: blackColor,
        fontFamily: 'SVN-Gilroy-Bold',
        fontSize: sizeFont(3.5),
    }
})
