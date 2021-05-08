import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { orangeColor } from '../../string/ColorTheme';
import { sizeFont, sizeWidth } from '../../Utils/Size';

const HeaderList = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>{title}</Text>
            <TouchableOpacity>
                <Text style={styles.textButtonShowAll}>Show all</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HeaderList;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        //backgroundColor: 'red',
        width: sizeWidth(92)
    },
    textTitle: {
        fontSize: sizeFont(2.08),
        fontFamily: 'SVN-Gilroy-Bold',
        //fontWeight: '600'
    },
    textButtonShowAll: {
        fontSize: sizeFont(1.82),
        fontFamily: 'SVN-Gilroy-SemiBold',
        fontWeight: '600',
        color: orangeColor
    }
});
