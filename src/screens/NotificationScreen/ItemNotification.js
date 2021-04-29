import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { blackColor, orangeColor, trueGreenColor } from '../../string/ColorTheme';
import { sizeHeight, sizeWidth } from '../../Utils/Size';
import three_dots from '../../assets/three-dots.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TouchableRipple } from 'react-native-paper';
const ItemNotification = ({ kind, title, description, imageSource, time, status, shipper }) => {
    let a = 23;
    return (

        <View style={styles.container}>
            <View style={styles.viewGroupLeft}>
                <View style={styles.viewImage}>
                    <Image
                        style={styles.imgMain}
                        source={imageSource} />
                </View>
                <View style={styles.viewText}>
                    {status ?
                        <Text style={styles.textTitle}>
                            <Text style={[styles.textTitle, { color: trueGreenColor }]}>
                                {status}
                            </Text> - {title}
                        </Text>
                        : <Text style={styles.textTitle}>{title}</Text>}
                    {shipper ?
                        <Text style={styles.textDescription}>
                            <Text style={styles.textShipper}>
                                {shipper}
                            </Text> has delivered your order <Text style={styles.textShipper}>
                                {title}.
                            </Text> Thanks for your order and stay with us
                        </Text>
                        : <Text style={styles.textDescription}>{description}</Text>}
                    <Text style={styles.textTime}>{time} ago</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.btnMenu}>
                <Image
                    style={styles.imgMenu}
                    source={three_dots}
                />
            </TouchableOpacity>
        </View>

    );
};

export default ItemNotification;

const styles = StyleSheet.create({
    container: {
        height: sizeHeight(13.54),
        width: sizeWidth(92),
        backgroundColor: '#FBFBFB',
        // backgroundColor: 'skyblue',
        // margin: sizeWidth(4),
        paddingHorizontal: sizeWidth(4.2),
        borderRadius: sizeWidth(2.13),
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'rgba(245, 245, 248, 1)'
    },
    viewGroupLeft: {
        flexDirection: 'row',
        // alignItems: 'center',

    },
    viewImage: {
        alignSelf: 'center',
        width: sizeHeight(7.63),
        height: sizeHeight(7.63),
        backgroundColor: orangeColor,
        borderRadius: sizeWidth(2.13),
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgMain: {
        width: sizeHeight(4.92),
        height: sizeHeight(4.92),
        resizeMode: 'contain'
    },
    viewText: {
        width: sizeWidth(56),
        alignSelf: 'center',
        // height: sizeHeight(10),
        // flex: 1,
        // backgroundColor: 'cornsilk',
        marginLeft: sizeWidth(3.2)
    },
    textTitle: {
        fontFamily: 'SVN-Gilroy-Medium',
        fontWeight: '500',
        color: blackColor,
        fontSize: responsiveFontSize(1.83) //14px
    },
    textDescription: {
        color: '#757D85',
        fontFamily: 'SVN-Gilroy-Regular',
        fontWeight: '400',
        //lineHeight: sizeHeight(2.21),
        fontSize: responsiveFontSize(1.56) //12px
    },
    textShipper: {
        color: blackColor,
        fontFamily: 'SVN-Gilroy-Medium',
        fontWeight: '500',
        //lineHeight: sizeHeight(2.21),
        fontSize: responsiveFontSize(1.56) //12px
    },
    textTime: {
        color: blackColor,
        fontFamily: 'SVN-Gilroy-Regular',
        fontWeight: '400',
        fontSize: responsiveFontSize(1.30) //12px
    },
    btnMenu: {
        marginTop: sizeHeight(3)
    },
    imgMenu: {
        width: sizeWidth(4.2),
        height: sizeWidth(4.2)
    }
});
