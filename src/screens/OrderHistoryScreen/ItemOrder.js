import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveScreenFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { blackColor, grayColor, orangeColor, trueGreenColor } from '../../string/ColorTheme';
import Button from '../LoginScreen/Button';

const getStatusColor = (status) => {
    switch (status) {
        case 'Order delivered': {
            return trueGreenColor;
        }
        case 'Order Cancel': {
            return 'red';
        }
        case 'Food on the way': {
            return '#FFA133';
        }
    }

};

const ItemOrder = ({ sourceImage, name, price,
    time, quantity, status,
    buttonRightText, buttonLeftText, onPressButtonRight,
    onPressButtonLeft, id }) => {
    return (
        <View style={styles.container}>
            <View style={styles.viewInfo}>
                <View style={styles.viewImg}>
                    <Image
                        source={sourceImage}
                        style={styles.imgLogo} />
                </View>
                <View style={styles.viewText}>
                    <View style={styles.viewNameAndPrice}>
                        <Text style={styles.textName}>{name}</Text>
                        {price ? <Text style={styles.textPrice}>${price}</Text>
                            : <Text style={styles.textPrice}>#{id}</Text>}
                    </View>
                    <View style={styles.viewDateAndQuantity}>
                        {price && <Text style={styles.textTime}>{time}</Text>}
                        {price && <View style={styles.elipseBetweenTime} />}
                        <Text style={styles.textTime}>{quantity == 1 ? quantity + ' item' : quantity + ' items'}</Text>
                    </View>
                    <View style={styles.viewStatus}>
                        <View style={[styles.pointStatus, { backgroundColor: getStatusColor(status) }]} />
                        <Text style={[styles.textStatus, { color: getStatusColor(status) }]}>{status}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.viewButton}>
                <Button
                    onPress={onPressButtonLeft}
                    textStyle={styles.textButton}
                    style={styles.button}
                    buttonSign={buttonLeftText} />
                <Button
                    onPress={onPressButtonRight}
                    textStyle={[styles.textButton, { color: orangeColor }]}
                    style={[styles.button, { backgroundColor: 'rgba(255, 108, 68, 0.1)' }]}
                    buttonSign={buttonRightText} />
            </View>
        </View>
    );
};

export default ItemOrder;

const styles = StyleSheet.create({
    container: {
        height: responsiveHeight(18.71),
        width: responsiveWidth(92),
        paddingHorizontal: responsiveWidth(4.2),
        paddingVertical: responsiveHeight(1.97),
        backgroundColor: grayColor,
        borderRadius: responsiveWidth(4.2),
        marginHorizontal: responsiveWidth(4)
    },
    viewInfo: {
        flexDirection: 'row',
        //backgroundColor: 'tomato'
    },
    viewImg: {
        backgroundColor: 'white',
        borderRadius: responsiveWidth(3.2),
        width: responsiveWidth(15.46),
        height: responsiveWidth(15.46),
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgLogo: {
        width: responsiveWidth(9.6),
        height: responsiveHeight(4.43)
    },
    viewText: {
        flex: 1,
    },
    viewNameAndPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        //backgroundColor: 'skyblue',
        marginLeft: responsiveWidth(4.2)
    },
    textName: {
        fontSize: responsiveScreenFontSize(2.09),
        color: blackColor,
        fontWeight: '600',
        fontFamily: 'SVN-Gilroy-Bold'
    },
    textPrice: {
        fontSize: responsiveScreenFontSize(2.09),
        color: orangeColor,
        fontWeight: '600',
        fontFamily: 'SVN-Gilroy-Bold'
    },
    viewDateAndQuantity: {
        //backgroundColor: 'tomato',
        flexDirection: 'row',
        marginTop: responsiveHeight(0.49),
        marginLeft: responsiveWidth(4.2),
        alignItems: 'center'
    },
    viewStatus: {
        //backgroundColor: 'tomato',
        flexDirection: 'row',
        marginTop: responsiveHeight(0.73),
        marginLeft: responsiveWidth(4.2),
        alignItems: 'center'
    },
    textTime: {
        fontFamily: 'SVN-Gilroy-Regular',
        fontWeight: '400',
        fontSize: responsiveFontSize(1.57),
        color: '#898B9A'
    },
    elipseBetweenTime: {
        height: responsiveWidth(1.06),
        width: responsiveWidth(1.06),
        backgroundColor: '#898B9A',
        borderRadius: responsiveWidth(0.53),
        marginHorizontal: responsiveWidth(2.13)
    },
    pointStatus: {
        width: responsiveWidth(1.86),
        height: responsiveWidth(1.86),
        borderRadius: responsiveWidth(1),
        marginRight: responsiveWidth(2.13),
        marginTop: responsiveHeight(0.3)
    },
    textStatus: {
        fontFamily: 'SVN-Gilroy-Regular',
        fontWeight: '500',
        fontSize: responsiveFontSize(1.57),
        //backgroundColor: 'skyblue'
    },
    viewButton: {
        flexDirection: 'row',
        // backgroundColor: 'skyblue',
        paddingTop: responsiveHeight(1.5)
        //alignItems: 'flex-end'
    },
    button: {
        alignSelf: 'flex-end',
        flex: 1,
        height: responsiveHeight(4.67)
    },
    textButton: {
        fontFamily: 'SVN-Gilroy-Medium',
        fontWeight: '600',
        fontSize: responsiveFontSize(1.57),
    }

});
