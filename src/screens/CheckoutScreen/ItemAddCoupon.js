import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { blackColor, orangeColor } from '../../string/ColorTheme';
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size';
import discount from '../../assets/Discount.png';
const ItemAddCoupon = () => {
    const [couponVal, setCouponVal] = useState("");
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Add Coupon</Text>
            <View style={styles.viewBoxText}>
                <TextInput
                    value={couponVal}
                    onChangeText={(text) => setCouponVal(text)}
                    autoCapitalize={'characters'}
                    placeholder={'Coupon Code'}
                    style={styles.textAdress} />
                <TouchableOpacity style={styles.viewDiscountImg}>
                    <Image
                        style={styles.imgCoupon}
                        source={discount}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ItemAddCoupon;

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
    viewDiscountImg: {
        position: 'absolute',
        width: sizeWidth(16),
        height: sizeHeight(8.12),
        backgroundColor: orangeColor,
        borderTopRightRadius: sizeWidth(2.13),
        borderBottomRightRadius: sizeWidth(2.13),
        alignItems: 'center',
        justifyContent: 'center',
        right: 0
    },
    imgCoupon: {
        width: sizeHeight(3.94),
        height: sizeHeight(3.94)
    },
    textAdress: {
        width: sizeWidth(65),
        // marginRight: sizeWidth(18),
        // backgroundColor: 'skyblue',
        fontSize: sizeFont(1.83),
        fontFamily: 'SVN-Gilroy-Medium',
        fontWeight: '500',
        color: "#525C67",
    }
});
