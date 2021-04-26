import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { dataCoupon } from '../../string/FakeData';
import ItemCoupon from './ItemCoupon';

const ListCoupon = ({ tabSelected }) => {
    if (tabSelected == 0) {
        return (
            <FlatList
                style={styles.container}
                ListFooterComponent={<View style={styles.footerComponent} />}
                data={dataCoupon}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    if (item.status == 'valid')
                        return (
                            <ItemCoupon
                                name={item.name}
                                value={item.value}
                                date={item.date}
                                status={item.status}
                                imageSource={item.imageSource} />
                        );
                }}
            />);
    } else {
        return (
            <FlatList
                style={styles.container}
                data={dataCoupon}
                ListFooterComponent={<View style={styles.footerComponent} />}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    if (item.status == 'used')
                        return (
                            <ItemCoupon
                                name={item.name}
                                value={item.value}
                                date={item.date}
                                status={item.status}
                                imageSource={item.imageSource} />
                        );
                }}
            />
        );
    }
};

export default ListCoupon;

const styles = StyleSheet.create({
    container: {
        // marginBottom: responsiveHeight(3.94)
    },
    footerComponent: {
        marginBottom: responsiveHeight(3.94)
    }
});
