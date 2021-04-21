import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import coupon_view from '../../assets/coupon-view.png';
const ItemCoupon = ({ name, value, imageSource, status }) => {
    return (

        <ImageBackground
            source={coupon_view}
            imageStyle={styles.backgroundStyle}
            style={styles.container}>
            <Image
                style={styles.imgLogo}
                source={imageSource} />
            <Text>

            </Text>
        </ImageBackground>

    );
};

export default ItemCoupon;

const styles = StyleSheet.create({
    container: {
        marginTop: responsiveHeight(1.97),
        width: responsiveWidth(92),  //Đặt width và height của style và imageStyle như nhau
        height: responsiveHeight(15),
        marginLeft: responsiveWidth(4),
        //backgroundColor: 'skyblue',
        //borderRadius: responsiveWidth(2.4),
        flexDirection: 'row',
        alignItems: 'center'
    },
    backgroundStyle: {
        width: responsiveWidth(92),
        height: responsiveHeight(15),
        resizeMode: 'stretch'
    },
    imgLogo: {
        marginLeft: responsiveWidth(8.26),
        width: responsiveWidth(21.86),
        height: responsiveWidth(21.86)
    }
});
