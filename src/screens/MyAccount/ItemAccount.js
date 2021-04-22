import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { blackColor } from '../../string/ColorTheme';

const ItemAccount = ({ title, value }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>{title}</Text>
            <Text
                numberOfLines={1}
                style={[styles.textValue, { color: value === '' ? '#757D85' : blackColor }]}>{value === '' ? 'Not updated' : value}</Text>
        </View>
    );
};

export default ItemAccount;

const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(92),
        height: responsiveHeight(8),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: responsiveWidth(4.2),
        justifyContent: 'space-between'
        //backgroundColor: 'skyblue'
    },
    textTitle: {
        color: '#898B9A',
        fontFamily: 'SVN-Gilroy-Medium',
        fontWeight: '600',
        fontSize: responsiveFontSize(1.83),
    },
    textValue: {
        //backgroundColor: 'skyblue',
        width: responsiveWidth(40),
        width: responsiveWidth(50),
        textAlign: 'right',
        fontFamily: 'SVN-Gilroy-Medium',
        fontWeight: '500',
        fontSize: responsiveFontSize(1.83),
    }
});
