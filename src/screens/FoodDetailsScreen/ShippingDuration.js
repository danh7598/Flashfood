import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size';
import clock from '../../assets/clock.png';
import { blackColor } from '../../string/ColorTheme';

const ShippingDuration = ({ textDuration }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.imgClock}
                source={clock} />
            <Text style={styles.textDuration}>{textDuration}</Text>
        </View>
    );
};

export default ShippingDuration;

const styles = StyleSheet.create({
    container: {
        width: sizeWidth(18),
        height: sizeHeight(4),
        //backgroundColor: 'skyblue',
        flexDirection: 'row',
        alignItems: 'center',
        //paddingHorizontal: sizeWidth(2),
        justifyContent: 'space-between',
        marginLeft: sizeWidth(5)
    },
    imgClock: {
        width: sizeWidth(4),
        height: sizeWidth(4)
    },
    textDuration: {
        color: blackColor,
        fontFamily: 'SVN-Gilroy-Bold',
        fontSize: sizeFont(1.5625),
    }
});
