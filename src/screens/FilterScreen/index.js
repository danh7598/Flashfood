LogBox.ignoreAllLogs(true);
import React, { useState } from 'react';
import { Image, LogBox, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import close from '../../assets/close.png';
import { blackColor } from '../../string/ColorTheme';
import { sizeHeight, sizeWidth } from '../../Utils/Size';
import Button from '../LoginScreen/Button';
import ItemPicker from './ItemPicker';
import ItemRateStar from './ItemRateStar';
import ItemSlider from './ItemSlider';

const dataTags = ['Burger', 'Fast Food', 'Pizza', 'Asian', 'Dessert', 'Breakfast', 'Vegetable', 'Tacos'];
const dataDeliveryTime = ['10 Mins', '20 Mins', '30 Mins'];
const FilterScreen = ({ modalVisible, onCloseModal }) => {
    const onPressApply = () => {

    };
    return (
        <Modal
            transparent={true}
            animationType={'slide'}
            visible={modalVisible}
        >
            <View style={styles.container}>
                <View style={styles.viewHeader}>
                    <Text style={styles.textHeader}>Filter Your Search</Text>
                    <TouchableOpacity
                        style={styles.btnClose}
                        onPress={onCloseModal}>
                        <Image
                            style={styles.imageClose}
                            source={close} />
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ItemSlider
                        startRange={0}
                        endRange={30}
                        unit={'km'}
                        disableRange={false}
                        title={'Distance'} />
                    <ItemPicker
                        title={'Delivery Time'}
                        data={dataDeliveryTime}
                        selectMultipleItem={false} />
                    <ItemSlider
                        startRange={0}
                        endRange={100}
                        unit={'$'}
                        disableRange={false}
                        title={'Pricing Range'} />
                    <ItemRateStar />
                    <ItemPicker
                        title={'Tags'}
                        data={dataTags}
                        selectMultipleItem />
                    <Button
                        style={styles.btnApply}
                        onPress={onPressApply}
                        buttonSign={'Apply Filters'}
                    />
                </ScrollView>


            </View>
        </Modal>

    );
};

export default FilterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: sizeHeight(1.97),
        backgroundColor: 'rgba(251, 251, 251, 1)',
        // backgroundColor: 'skyblue',
        borderTopRightRadius: sizeWidth(6.4),
        borderTopLeftRadius: sizeWidth(6.4)

    },
    viewHeader: {
        marginTop: sizeHeight(3.94),
        marginBottom: sizeHeight(0.985),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: sizeWidth(6.4)
    },
    textHeader: {
        fontFamily: 'SVN-Gilroy-Bold',
        fontWeight: '700',
        color: blackColor,
        fontSize: responsiveFontSize(2.09)
    },
    btnClose: {
        width: sizeWidth(8.53),
        height: sizeWidth(8.53),
        borderRadius: sizeWidth(2.13),
        borderWidth: 1,
        borderColor: 'rgba(187, 189, 193, 1)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageClose: {
        width: sizeWidth(4.2),
        height: sizeWidth(4.2),
        tintColor: 'rgba(187, 189, 193, 1)'
    },
    btnApply: {
        marginTop: sizeHeight(3.94),
        marginBottom: sizeHeight(3.94)
    }
});
