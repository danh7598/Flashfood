import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { blackColor, grayColor, orangeColor } from '../../string/ColorTheme';
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size';
const arrayTip = ["No Tips", 5, 10, 15, 20];
const TipMoney = ({ indexSelected, onPress }) => {
    return (
        <View style={styles.viewTip}>
            {arrayTip.map((item, index) => {
                return (
                    <TouchableOpacity
                        onPress={() => onPress(index)}
                        key={index.toString()}
                        style={[index != 0 ? styles.itemTip : styles.itemTip,
                        {
                            backgroundColor: index === indexSelected ? orangeColor : 'white',
                            borderWidth: index === indexSelected ? 0 : 1,
                    }]}>
                        <Text style={[styles.textTip, {
                            color: index === indexSelected ? 'white' : grayColor
                        }]}>
                            {index != 0 ? "$" + item : item}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default TipMoney;

const styles = StyleSheet.create({
    viewTip: {
        flexDirection: 'row',
        width: sizeWidth(100)
    },
    itemNoTip: {
        alignItems: 'center',
        justifyContent: 'center',
        width: sizeWidth(20.26),
        height: sizeHeight(4.03),
        borderRadius: sizeWidth(2.13),
        borderColor: grayColor
    },
    itemTip: {
        alignItems: 'center',
        justifyContent: 'center',
        width: sizeWidth(20.26),
        height: sizeHeight(4.03),
        borderRadius: sizeWidth(2.13),
        borderColor: grayColor
    },
    textTip: {
        color: blackColor,
        fontFamily: 'SVN-Gilroy-Medium',
        fontWeight: '600',
        fontSize: sizeFont(3.73),
    }
});
