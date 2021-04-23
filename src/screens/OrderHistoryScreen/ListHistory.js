import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { dataOrderHistory } from '../../string/FakeData';
import ItemOrder from './ItemOrder';

const ListHistory = ({ onPressButtonLeft, onPressButtonRight }) => {
    return (
        <SectionList
            style={styles.container}
            sections={dataOrderHistory}
            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
                return (
                    <ItemOrder
                        sourceImage={item.imageSource}
                        name={item.name}
                        price={item.price}
                        time={item.time}
                        quantity={item.quantity}
                        status={item.status}
                        buttonRightText={'Rate'}
                        buttonLeftText={'Re-Order'}
                        onPressButtonRight={onPressButtonRight}
                        onPressButtonLeft={onPressButtonLeft} />
                );
            }}
            renderSectionHeader={({ section: { date } }) => (
                <Text style={styles.textDateHeader}>{date}</Text>
            )}
        />
    );
};

export default ListHistory;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'tomato',
        marginBottom: responsiveHeight(3.94)
    },
    textDateHeader: {
        marginTop: responsiveHeight(1.97),
        color: '#898B9A',
        fontSize: responsiveFontSize(1.83),
        fontWeight: '500',
        fontFamily: 'SVN-Gilroy-SemiBold',
        marginBottom: responsiveHeight(1.97),
        marginLeft: responsiveWidth(4)
    },
    itemSeparator: {
        height: responsiveHeight(1.97)
    }
});
