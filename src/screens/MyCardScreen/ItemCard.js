import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { blackColor, orangeColor } from '../../string/ColorTheme';
import { sizeHeight, sizeWidth, sizeFont } from '../../Utils/Size';

const ItemCard = ({ isSelected, title, imageSource, onSelect }) => {
    // console.log(sizeFont(2.09));
    return (
        <TouchableOpacity onPress={onSelect}>
            <View style={[styles.container, { borderColor: isSelected ? orangeColor : 'rgba(245, 245, 248, 1)' }]}>
                <View style={styles.viewGroupLeft}>
                    <View style={styles.viewImage}>
                        <Image
                            style={styles.image}
                            source={imageSource}
                        />
                    </View>
                    <Text style={styles.textTitle}>{title}</Text>
                </View>
                {isSelected
                    ? <View style={styles.viewSelect}>
                        <View style={styles.pointSelect} />
                    </View>
                    : <View style={styles.viewNotSelected} />
                }
            </View>
        </TouchableOpacity>
    );
};

export default ItemCard;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: sizeWidth(4.2),
        height: sizeHeight(8.86),
        width: sizeWidth(92),
        borderRadius: sizeWidth(2.13),
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: 'skyblue',
        // marginTop: 80,
        alignSelf: 'center'
    },
    viewGroupLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewImage: {
        height: sizeHeight(4.92),
        width: sizeWidth(12.8),
        borderRadius: sizeWidth(2.27),
        borderWidth: 1.5,
        borderColor: 'rgba(245, 245, 248, 1)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: sizeHeight(2.46),
        width: sizeHeight(3.2),
        resizeMode: 'contain'
    },
    textTitle: {
        marginLeft: sizeWidth(2.13),
        fontFamily: 'SVN-Gilroy-SemiBold',
        fontWeight: '600',
        color: blackColor,
        fontSize: sizeFont(2.09)
    },
    viewSelect: {
        width: sizeWidth(4.2),
        height: sizeWidth(4.2),
        borderColor: orangeColor,
        // backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: sizeWidth(2.1),
        alignItems: 'center',
        justifyContent: 'center'
    },
    pointSelect: {
        width: sizeWidth(2.9),
        height: sizeWidth(2.9),
        borderRadius: sizeWidth(2.9) / 2,
        // alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: orangeColor,
    },
    viewNotSelected: {
        borderColor: '#DDDDDD',
        width: sizeWidth(4.2),
        height: sizeWidth(4.2),
        // backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: sizeWidth(2.1),
        alignItems: 'center',
        justifyContent: 'center'
    }
});
