import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { blackColor, grayColor, orangeColor } from '../../string/ColorTheme';
import { sizeHeight, sizeWidth } from '../../Utils/Size';

const ItemPicker = ({ title, data, selectedIndex, selectMultipleItem }) => {
    const [indexSelected, setIndexSelected] = useState([0]);
    const onSelectItem = (index) => () => {
        setIndexSelected(index);
    };
    const onSelectMultipleItem = (index) => () => {
        setIndexSelected((prevValue) => {
            let newIndexArray = prevValue;
            if (!newIndexArray.includes(index)) {
                newIndexArray.push(index);
            } else {
                for (var i = 0; i < newIndexArray.length; i++) {
                    if (newIndexArray[i] === index) {
                        newIndexArray.splice(i, 1);
                    }
                }
            }
            //Nếu k có dấu ... thì giá trị indexSelected vẫn không thay đổi
            //Do là chỉ thay đổi giá trị trong array, array trong indexSelected vẫn là array như cũ
            //Ta thay array đó bằng một array mới ghi đè lên bằng dấu ...
            return [...newIndexArray];
        });
        // console.log(indexSelected);

    };
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>{title}</Text>
            <FlatList
                data={data}
                contentContainerStyle={styles.flatList}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
                renderItem={({ item, index }) => {
                    if (!selectMultipleItem) {
                        return (
                            <TouchableOpacity
                                onPress={onSelectItem([index])}
                                style={[styles.viewItem,
                                { backgroundColor: indexSelected == index ? orangeColor : grayColor }]}>
                                <Text style={[styles.textItem,
                                { color: indexSelected == index ? 'white' : '#898B9A' }]}>
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        );
                    } else {
                        return (
                            <TouchableOpacity
                                onPress={onSelectMultipleItem(index)}
                                style={[styles.viewItem,
                                { backgroundColor: indexSelected.includes(index) ? orangeColor : grayColor }]}>
                                <Text style={[styles.textItem,
                                { color: indexSelected.includes(index) ? 'white' : '#898B9A' }]}>
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        );
                    }

                }}
            />
        </View>
    );
};

export default ItemPicker;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: sizeWidth(6.4),
        marginTop: sizeHeight(1.97)
    },
    textTitle: {
        fontFamily: 'SVN-Gilroy-SemiBold',
        fontWeight: '600',
        color: blackColor,
        fontSize: responsiveFontSize(1.83)
    },
    flatList: {
        marginTop: sizeHeight(1.97)
    },
    separator: {
        height: sizeHeight(1.97)
    },
    viewItem: {
        marginRight: sizeWidth(4.2),
        paddingVertical: sizeHeight(0.98),
        paddingHorizontal: sizeWidth(4.8),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: sizeWidth(1.06),
        backgroundColor: grayColor
    },
    textItem: {
        fontSize: responsiveFontSize(1.83),
        fontWeight: '600',
        fontFamily: 'SVN-Gilroy-SemiBold',
    }
});
