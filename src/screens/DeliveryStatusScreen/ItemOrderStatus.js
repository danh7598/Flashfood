import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size';
import check from '../../assets/check.png';
import { blackColor, orangeColor } from '../../string/ColorTheme';
const ItemOrderStatus = ({ title, description }) => {

    return (
        <View style={styles.container}>
            <View style={styles.viewCircle}>
                <Image
                    style={styles.imgCheck}
                    source={check} />
            </View>
            <View style={styles.viewText}>
                <Text style={styles.textTitle}>{title}</Text>
                <Text style={styles.textDescription}>{description}</Text>
            </View>
        </View>
    );
};

export default ItemOrderStatus;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // marginTop: sizeHeight(1.97),
        alignItems: 'center',
        // height: sizeHeight(3.94),
        paddingHorizontal: sizeWidth(6.4),
        // backgroundColor: 'skyblue'
    },
    viewCircle: {
        width: sizeHeight(3.94),
        height: sizeHeight(3.94),
        borderRadius: sizeHeight(3.94) / 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: orangeColor
    },
    imgCheck: {
        width: sizeHeight(1.97),
        height: sizeHeight(1.97),
        tintColor: 'white'
    },
    viewText: {
        marginLeft: sizeWidth(4.2)
    },
    textTitle: {
        fontSize: sizeFont(1.5625),
        fontFamily: 'SVN-Gilroy-SemiBold',
        color: blackColor
    },
    textDescription: {
        fontSize: sizeFont(1.5625),
        fontFamily: 'SVN-Gilroy-Regular',
        color: '#898B9A'
    }
});
