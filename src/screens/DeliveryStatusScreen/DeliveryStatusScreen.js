import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import back from '../../assets/back.png';
import HeaderBar from '../../common/HeaderBar';
import { blackColor } from '../../string/ColorTheme';
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size';
import ItemOrderStatus from './ItemOrderStatus';
import { data } from './dataOrderStatus';
const DeliveryStatusScreen = () => {
    return (
        <View style={styles.container}>
            <HeaderBar
                title={'DELIVERY STATUS'}
                onPressLeftBtn={() => {
                    navigation.goBack();
                }}
                leftBtnSource={back} />
            <View style={styles.viewGroupCenter}>
                <Text style={styles.textEstimate}>Estimated Delivery</Text>
                <Text style={styles.textTime}>28 Nov, 2020 / 12:30PM</Text>
                <View style={styles.viewGroupStatus}>
                    <View style={styles.viewTitle}>
                        <Text style={styles.textTrackOrder}>Track Order</Text>
                        <Text style={styles.textEstimate}>NY0215NI</Text>
                    </View>
                    <View style={styles.viewLine} />
                    <FlatList
                        style={styles.listOrderStatus}
                        ListHeaderComponent={<View style={styles.listHeader} />}
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index, separator }) => {
                            return (<ItemOrderStatus {...item} />);
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default DeliveryStatusScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewGroupCenter: {
        marginTop: sizeHeight(1.97),
        alignSelf: 'center',
        alignItems: 'center',
        paddingHorizontal: sizeWidth(4)
    },
    textEstimate: {
        color: '#898B9A',
        fontSize: sizeFont(1.83),
        fontFamily: 'SVN-Gilroy-Medium',
    },
    textTime: {
        color: blackColor,
        fontSize: sizeFont(2.6),
        fontFamily: 'SVN-Gilroy-Bold',
    },
    viewGroupStatus: {
        marginTop: sizeHeight(3.94),
        backgroundColor: '#FBFBFB',
        borderColor: 'rgba(245, 245, 248, 1)',
        borderWidth: 1,
        borderRadius: sizeWidth(4.2),
        height: sizeHeight(57.26),
        width: sizeWidth(92)
    },
    viewTitle: {
        flexDirection: 'row',
        marginTop: sizeHeight(1.97),
        paddingHorizontal: sizeWidth(6.4),
        justifyContent: 'space-between'
    },
    textTrackOrder: {
        color: blackColor,
        fontSize: sizeFont(1.83),
        fontFamily: 'SVN-Gilroy-SemiBold',
    },
    viewLine: {
        marginTop: sizeHeight(1.97),
        height: 1,
        backgroundColor: 'rgba(245, 245, 248, 1)'
    },
    listOrderStatus: {
        marginTop: sizeHeight(3.44)
    }

});

