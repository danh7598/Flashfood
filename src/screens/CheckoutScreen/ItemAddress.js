import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { blackColor } from '../../string/ColorTheme';
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size';
import location from '../../assets/location_checkout.png';
const ItemAddress = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Delivery Address</Text>
            <TouchableOpacity style={styles.viewBoxText}>
                <Image
                    style={styles.imgLocation}
                    source={location}
                />
                <Text
                    numberOfLines={1}
                    style={styles.textAdress}>300 Post Street San Francisco, CA</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ItemAddress;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: sizeWidth(4),
        marginTop: sizeHeight(2.95)
    },
    textTitle: {
        fontSize: sizeFont(2.09),
        fontFamily: 'SVN-Gilroy-SemiBold',
        color: blackColor
    },
    viewBoxText: {
        marginTop: sizeHeight(1.97),
        flexDirection: 'row',
        height: sizeHeight(8.12),
        alignItems: 'center',
        borderColor: 'rgba(245, 245, 248, 1)',
        borderRadius: sizeWidth(2.13),
        borderWidth: 1,
        paddingHorizontal: sizeWidth(4.2)
    },
    imgLocation: {
        width: sizeHeight(3.94),
        height: sizeHeight(3.94)
    },
    textAdress: {
        width: sizeWidth(70),
        // backgroundColor: 'skyblue',
        fontSize: sizeFont(1.83),
        fontFamily: 'SVN-Gilroy-SemiBold',
        color: blackColor,
        marginLeft: sizeWidth(4.2)
    }
});
