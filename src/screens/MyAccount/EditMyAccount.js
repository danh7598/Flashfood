import React, { useState, useEffect } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { grayColor } from '../../string/ColorTheme';
import HeaderBar from '../../common/HeaderBar';
import back from '../../assets/back.png';
import ItemEditAccount from './ItemEditAccount';
import { data } from './dataEditAccount';
import Button from '../Login/Button';
const EditMyAccount = ({ navigation }) => {
    const [textValue, setTextValue] = useState('');

    return (
        <View style={styles.container}>
            <HeaderBar
                title={'MY ACCOUNT'}
                rightBtn
                onPressLeftBtn={() => {
                    navigation.goBack();
                }}
                leftBtnSource={back} />
            <FlatList
                style={styles.scrollViewContainer}
                data={data}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={<View style={styles.viewLastItem} />}
                renderItem={({ item, index }) => {
                    return (
                        <ItemEditAccount
                            title={item.title}
                            textInputProps={{
                                value: item.value,
                                onChangeText: (text) => {
                                    item.value = text;
                                    setTextValue(text);
                                },
                                kind: item.kind,
                                placeholder: item.placeholder,
                                keyboardType: item.keyboardType
                            }}

                        />
                    );
                }}
            />
            <Button
                style={styles.button}
                onPress={() => {
                    alert('Save');
                }}
                buttonSign={'Save'} />
        </View>

    );
};

export default EditMyAccount;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    scrollViewContainer: {
        width: responsiveWidth(92),
        marginVertical: responsiveHeight(3.94),
        borderRadius: responsiveWidth(4.2),
        marginHorizontal: responsiveWidth(4),
        borderWidth: 1,
        borderColor: 'rgba(245, 245, 248, 1)',
        backgroundColor: '#FBFBFB'
    },
    viewLastItem: {
        marginBottom: responsiveHeight(1.97)
    },
    button: {
        marginBottom: responsiveHeight(1.97)
    }
});
