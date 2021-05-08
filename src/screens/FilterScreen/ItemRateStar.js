import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { blackColor, grayColor, orangeColor } from '../../string/ColorTheme';
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size';
import star from '../../assets/star.png';
const dataStar = [1, 2, 3, 4, 5];
const ItemRateStar = () => {
    const [indexSelected, setIndexSelected] = useState(0);
    const onSelectItem = (index) => () => {
        setIndexSelected(index);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Rating</Text>
            <FlatList
                data={dataStar}
                horizontal
                contentContainerStyle={styles.flatList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            onPress={onSelectItem(index)}
                            style={[styles.viewItem,
                            { backgroundColor: indexSelected == index ? orangeColor : grayColor }]}>
                            <Text style={[styles.textItem,
                            { color: indexSelected == index ? 'white' : '#898B9A' }]}>
                                {item}
                            </Text>
                            <Image
                                style={[styles.imageStar,
                                { tintColor: indexSelected == index ? 'white' : '#898B9A' }]}
                                source={star} />
                        </TouchableOpacity>
                    );

                }}
            />
        </View>
    );
};

export default ItemRateStar;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: sizeWidth(6.4),
        marginTop: sizeHeight(1.97)
    },
    textTitle: {
        fontFamily: 'SVN-Gilroy-SemiBold',
        fontWeight: '600',
        color: blackColor,
        fontSize: sizeFont(1.83)
    },
    flatList: {
        width: sizeWidth(87.2),
        marginTop: sizeHeight(1.97),
        justifyContent: 'space-between'
    },
    viewItem: {
        width: sizeWidth(14.93),
        height: sizeHeight(4.92),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: sizeWidth(1.06),
        backgroundColor: grayColor
    },
    textItem: {
        fontSize: sizeFont(1.83),
        fontWeight: '600',
        fontFamily: 'SVN-Gilroy-SemiBold',
    },
    imageStar: {
        marginLeft: sizeWidth(1.06),
        width: sizeWidth(4.2),
        height: sizeWidth(4.2),
    }
});
