import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, PixelRatio } from 'react-native';

import { blackColor } from '../../string/ColorTheme';
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size';

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
        width: sizeWidth(92),
        height: sizeHeight(8),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: sizeWidth(4.2),
        justifyContent: 'space-between'
        //backgroundColor: 'skyblue'
    },
    textTitle: {
        color: '#898B9A',
        fontFamily: 'SVN-Gilroy-Medium',
        fontWeight: '600',
        fontSize: sizeFont(1.83), //fontSize 14px
        // fontSize: PixelRatio.getPixelSizeForLayoutSize(14)
    },
    textValue: {
        //backgroundColor: 'skyblue',
        width: sizeWidth(50),
        textAlign: 'right',
        fontFamily: 'SVN-Gilroy-Medium',
        fontWeight: '500',
        fontSize: sizeFont(1.83), //fontSize 14px
        // fontSize: PixelRatio.getPixelSizeForLayoutSize(14)
    }
});
