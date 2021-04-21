import React from 'react';
import { FlatList, SectionList, StyleSheet, Text, View } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { blackColor } from '../../string/ColorTheme';
import { dataOrderUpcoming } from '../../string/FakeData';
import ItemOrder from './ItemOrder';

const ListUpcoming = ({ onPressButtonLeft, onPressButtonRight }) => {
    return (
        <SectionList
            style={styles.container}
            sections={dataOrderUpcoming}
            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index, section }) => {
                //console.log(section);
                return (
                    <ItemOrder
                        sourceImage={item.imageSource}
                        name={item.name}
                        price={item.price}
                        id={item.id}
                        time={item.time}
                        quantity={item.quantity}
                        status={item.status}
                        buttonRightText={section.title ? 'Rate' : 'Cancel'}
                        buttonLeftText={section.title ? 'Rate' : 'Track Order'}
                        onPressButtonRight={onPressButtonRight}
                        onPressButtonLeft={onPressButtonLeft} />
                );
            }}
            renderSectionHeader={({ section: { title } }) => {
                if (title != null) {
                    return (<Text Text style={styles.textHeader} > {title}</Text >);
                }
                return (
                    null
                );
            }}
        />

    );
};

export default ListUpcoming;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'tomato',
        marginTop: responsiveHeight(1.97),
        marginBottom: responsiveHeight(3.94)
    },
    textHeader: {
        color: blackColor,
        marginTop: responsiveHeight(1.97),
        fontSize: responsiveFontSize(1.83),
        fontWeight: '600',
        fontFamily: 'SVN-Gilroy-SemiBold',
        marginBottom: responsiveHeight(1.97),
        marginLeft: responsiveWidth(4)
    },
    itemSeparator: {
        height: responsiveHeight(1.97)
    }
});
