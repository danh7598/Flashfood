import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import coupon_view from '../../assets/coupon-view.png';
import { blackColor } from '../../string/ColorTheme';
const ItemCoupon = ({ name, value, imageSource, status, date }) => {
    return (
        <ImageBackground
            source={coupon_view}
            imageStyle={styles.backgroundStyle}
            style={styles.container}>
            <Image
                style={styles.imgLogo}
                source={imageSource} />
            <View style={styles.viewText}>
                <Text style={styles.textName}>
                    {name}
                </Text>
                <Text style={styles.textValue}>
                    {value} Off
                </Text>
                <Text style={styles.textStatus}>
                    {status === "valid" ? "Valid until " + date : "Used on " + date}
                </Text>
            </View>

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
    },
    viewText: {
        marginLeft: responsiveWidth(15)
    },
    textName: {
        fontFamily: 'SVN-Gilroy-Medium',
        fontWeight: '500',
        fontSize: responsiveFontSize(1.57),
        color: '#525C67',
    },
    textValue: {
        color: blackColor,
        fontWeight: '700',
        fontFamily: 'SVN-Gilroy-Bold',
        fontSize: responsiveFontSize(3.137),
        marginTop: responsiveHeight(0.49)
    },
    textStatus: {
        color: '#757D85',
        fontFamily: 'SVN-Gilroy-Regular',
        fontWeight: '400',
        fontSize: responsiveFontSize(1.57),
        marginTop: responsiveHeight(0.49)
    }
});
