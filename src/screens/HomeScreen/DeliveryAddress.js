import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { blackColor, orangeColor } from '../../string/ColorTheme';
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size';
import arrow_down from '../../assets/arrow_down.png';
const DeliveryAddress = ({ style, textAddress }) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.textDelivery}>DELIVERY TO</Text>
            <View style={styles.viewAddress}>
                <Text style={styles.textAddress}>
                    {textAddress}
                </Text>
                <TouchableOpacity>
                    <Image
                        style={styles.imgArrowDown}
                        source={arrow_down} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default DeliveryAddress;

const styles = StyleSheet.create({
    container: {
        //paddingHorizontal: sizeWidth(4),
        // alignItems: 'flexS',
        //backgroundColor: 'skyblue',
        width: sizeWidth(92)
    },
    textDelivery: {
        fontSize: sizeFont(1.82),
        fontFamily: 'SVN-Gilroy-Bold',
        color: orangeColor,
        lineHeight: sizeHeight(4),

    },
    viewAddress: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    textAddress: {
        fontSize: sizeFont(2.08),
        fontFamily: 'SVN-Gilroy-SemiBold',
        color: blackColor
    },
    imgArrowDown: {
        width: sizeWidth(4),
        height: sizeWidth(4),
        resizeMode: 'contain',
        //backgroundColor: 'skyblue',
        //alignSelf: 'flex-end',
        marginLeft: sizeWidth(3)
    }
});
