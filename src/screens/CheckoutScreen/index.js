import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import HeaderBar from '../../common/HeaderBar';
import back from '../../assets/back.png';
import { dataCard } from '../MyCardScreen/dataCard';
import ItemCard from '../MyCardScreen/ItemCard';
import { sizeHeight } from '../../Utils/Size';
import TotalAndOrder from '../MyCartScreen/TotalAndOrder';
import ItemAddress from './ItemAddress';
import ItemAddCoupon from './ItemAddCoupon';

const CheckOutScreen = (navigation) => {
    return (
        <View style={styles.container}>
            <HeaderBar
                title={'CHECKOUT'}
                onPressLeftBtn={() => {
                    navigation.goBack();
                }}
                leftBtnSource={back} />
            <FlatList
                style={styles.listCard}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                data={dataCard[0].data}
                renderItem={({ item }) => {
                    return (
                        <ItemCard
                            {...item}
                        />
                    );
                }}
            />
            <ItemAddress />
            <ItemAddCoupon />
            <TotalAndOrder
                subtotal={36.55}
                fee={0}
            />
        </View>
    );
};

export default CheckOutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listCard: {
        marginTop: sizeHeight(1.97),
        flexGrow: 0,
    },
    separator: {
        height: sizeHeight(1.97)
    }
});
