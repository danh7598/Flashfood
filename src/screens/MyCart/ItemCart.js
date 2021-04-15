import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import QuantityControl from '../FoodDetails/QuantityControl';
import { blackColor, grayColor, orangeColor } from '../../string/ColorTheme';
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size';
const ItemCart = ({image, name, price, quantity, onPressPlus, onPressMinus}) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.imgMain}
                source={image} />
            <View style={styles.viewText}>
                <Text style={styles.textName}>
                    {name}
                </Text>
                <Text style={styles.textPrice}>
                    ${price * quantity}
                </Text>
            </View>
            <QuantityControl
                onPressPlus={onPressPlus}
                onPressMinus={onPressMinus}
                number={quantity}
                style={styles.quantityView} />
        </View>
    )
}

export default ItemCart

const styles = StyleSheet.create({
    container: {
        backgroundColor: grayColor,
        alignItems: 'center',
        width: sizeWidth(92),
        height: sizeHeight(10),
        flexDirection: 'row',
        marginBottom: sizeHeight(3),
        borderRadius: sizeWidth(3)
    },
    imgMain: {
        width: sizeWidth(20),
        height: sizeHeight(8),
        resizeMode: 'contain',
        marginLeft: sizeWidth(4)
        //backgroundColor: 'tomato'
    },
    viewText: {
        //backgroundColor: 'skyblue',
        width: sizeWidth(30),
        marginLeft: sizeWidth(3)
    },  
    textName: {
        fontFamily: 'SVN-Gilroy-Medium',
        fontSize: sizeFont(4),
        color: blackColor,
        lineHeight: sizeHeight(2.5)
    },
    textPrice: {
        fontFamily: 'SVN-Gilroy-Bold',
        fontSize: sizeFont(4),
        color: orangeColor,
        lineHeight: sizeHeight(2.5)
    },
    quantityView: {
        backgroundColor: 'white',
        width: sizeWidth(28),
        height: sizeHeight(6),
        position: 'absolute',
        right: sizeWidth(4)
    }
})
