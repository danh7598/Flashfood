import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { blackColor } from '../../string/ColorTheme';
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size';
import Button from '../LoginScreen/Button';

const TotalAndOrder = ({ subtotal, fee, }) => {
    return (
        <View style={styles.container}>
            <View style={styles.textRow}>
                <Text style={styles.textSubtotal}>
                    Subtotal
                    </Text>
                <Text style={styles.textNumberSubtotal}>
                    $ {subtotal}
                </Text>
            </View>
            <View style={styles.textRow}>
                <Text style={styles.textSubtotal}>
                    Shipping fee
                </Text>
                <Text style={styles.textNumberSubtotal}>
                    $ {fee.toFixed(2)}
                </Text>
            </View>
            <View style={styles.viewLine} />
            <View style={styles.viewTotal}>
                <Text style={styles.textTotal}>
                    Total
                </Text>
                <Text style={styles.textNumberTotal}>
                    $ {(subtotal - fee).toFixed(2)}
                </Text>
            </View>
            <Button
                onPress={() => alert("Press finish")}
                buttonSign={'Place your Order'}
                style={styles.buttonPayment} />
        </View>
    );
};

export default TotalAndOrder;

const styles = StyleSheet.create({
    container: {
        height: sizeHeight(30),
        borderTopLeftRadius: sizeWidth(8),
        borderTopRightRadius: sizeWidth(8),
        position: 'absolute',
        bottom: 0,
        width: sizeWidth(100),
        //marginBottom: sizeHeight(2),
        // borderWidth: 0.5,
        // borderColor: '#898B9A',
        paddingTop: sizeHeight(2),
        backgroundColor: 'white',
        // shadowColor: '#000000',
        // shadowOffset: {
        //     width: 0,
        //     height: -2
        // },
        // shadowRadius: 20,
        // shadowOpacity: 1.0,
        elevation: 10,


        //backgroundColor: 'skyblue'
    },
    textRow: {
        paddingHorizontal: sizeWidth(6.4),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'tomato',
        // marginTop: 2,
    },
    textSubtotal: {
        fontSize: responsiveFontSize(1.83),
        fontFamily: 'SVN-Gilroy-SemiBold',
        fontWeight: '600',
        lineHeight: sizeHeight(2.05),
        color: blackColor
    },
    textNumberSubtotal: {
        fontSize: responsiveFontSize(2.09),
        fontFamily: 'SVN-Gilroy-Bold',
        fontWeight: '700',
        // lineHeight: sizeHeight(2.5),
        color: blackColor
    },
    viewLine: {
        width: sizeWidth(100),
        position: 'absolute',
        bottom: sizeHeight(20),
        height: 0.5,
        backgroundColor: 'rgba(137, 139, 154, 1)'
    },
    buttonPayment: {
        width: sizeWidth(92),
        position: 'absolute',
        bottom: sizeHeight(3)
        //alignSelf: 'flex-end'
    },
    viewTotal: {
        paddingHorizontal: sizeWidth(6.4),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: sizeHeight(14),
        height: sizeHeight(5),
        //backgroundColor: 'skyblue',
        width: sizeWidth(100)


        //backgroundColor: 'tomato'
    },
    textTotal: {
        fontSize: responsiveFontSize(2.09),
        fontFamily: 'SVN-Gilroy-Bold',
        // lineHeight: sizeHeight(2.5),
        color: blackColor
    },
    textNumberTotal: {
        fontSize: responsiveFontSize(2.61),
        fontFamily: 'SVN-Gilroy-Bold',
        color: blackColor
    },
});
