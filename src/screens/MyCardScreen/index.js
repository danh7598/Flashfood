import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderBar from '../../common/HeaderBar';
import back from '../../assets/back.png';
import ItemCard from './ItemCard';
const MyCardScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <HeaderBar
                title={'MY CARDS'}
                onPressLeftBtn={() => {
                    navigation.goBack();
                }}
                leftBtnSource={back} />
            <View style={styles.viewList}>
                <ItemCard
                    isSelected
                    imageSource={require('../../assets/payment-option/visa.png')}
                    title={"Master Card"} />
            </View>
        </View>
    );
};

export default MyCardScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
