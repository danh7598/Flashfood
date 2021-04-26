import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { blackColor, orangeColor } from '../../string/ColorTheme';
import { sizeHeight, sizeWidth } from '../../Utils/Size';

const ItemSettings = ({ imageSource, title, onPress }) => {
    return (
        <TouchableRipple
            onPress={onPress}>
            <View style={styles.container}>
                <Image
                    style={styles.img}
                    source={imageSource} />
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableRipple>

    );
};

export default ItemSettings;

const styles = StyleSheet.create({
    container: {
        height: sizeHeight(7.88),
        paddingHorizontal: sizeWidth(4.2),
        flexDirection: 'row',
        marginTop: 1,
        // backgroundColor: 'skyblue',
        alignItems: 'center'
    },
    img: {
        width: sizeWidth(4.2),
        height: sizeWidth(4.2),
        tintColor: orangeColor
    },
    text: {
        marginLeft: sizeWidth(4.2),
        fontSize: responsiveFontSize(1.83),
        fontFamily: 'SVN-Gilroy-Medium',
        fontWeight: '500',
        color: blackColor
    }
});
