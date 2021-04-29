import React, { useState } from 'react';
import { Image, StyleSheet, Switch, Text, View } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { blackColor, orangeColor } from '../../string/ColorTheme';
import { sizeHeight, sizeWidth } from '../../Utils/Size';

const ItemSwitchSetting = ({ imageSource, title, description, switchValue }) => {
    const [value, setValue] = useState(switchValue);
    const changeSwitch = () => setValue(prevState => !prevState);

    return (
        <View style={styles.container}>
            <View style={styles.viewGroupLeft}>
                <Image
                    style={styles.image}
                    source={imageSource} />
                <View style={styles.viewText}>
                    <Text style={styles.textTitle}>{title}</Text>
                    <Text style={styles.textDescription}>{description}</Text>
                </View>
            </View>
            <Switch
                onValueChange={changeSwitch}
                thumbColor={'white'}
                trackColor={{ false: '#898B9A', true: orangeColor }}
                value={value} />
        </View>
    );
};

export default ItemSwitchSetting;

const styles = StyleSheet.create({
    container: {
        height: sizeHeight(10.46),
        width: sizeWidth(92),
        borderRadius: sizeWidth(4.2),
        // backgroundColor: 'skyblue',
        backgroundColor: '#FBFBFB',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(245, 245, 248, 1)',
        paddingHorizontal: sizeWidth(4.2),
        justifyContent: 'space-between'
    },
    viewGroupLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: sizeWidth(6.4),
        height: sizeWidth(6.4),
        resizeMode: 'contain',
        tintColor: orangeColor
    },
    viewText: {
        marginLeft: sizeWidth(4.2)
    },
    textTitle: {
        fontFamily: 'SVN-Gilroy-Medium',
        fontWeight: '500',
        color: blackColor,
        fontSize: responsiveFontSize(2.09) //14px
    },
    textDescription: {
        color: '#757D85',
        fontFamily: 'SVN-Gilroy-Regular',
        fontWeight: '400',
        fontSize: responsiveFontSize(1.56) //14px
    }
});
