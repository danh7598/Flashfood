import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import HeaderBar from '../../common/HeaderBar';
import back from '../../assets/back.png';
import ItemAccount from './ItemAccount';

const dataUser = [
    {
        title: 'Full Name',
        value: 'Arma Dimunji'
    },
    {
        title: 'Phone Number',
        value: '332-559-8972'
    },
    {
        title: 'User Id',
        value: '1010 999'
    },
];

const dataDetail = [
    {
        title: 'Id Card',
        value: ''
    },
    {
        title: 'Date of Birth',
        value: '07/05/1998'
    },
    {
        title: 'Gender',
        value: 'Male'
    },
    {
        title: 'Joined',
        value: 'November 2019'
    },
    {
        title: 'Email',
        value: 'duy2@gmail.com'
    },
    {
        title: 'Address',
        value: '300 Post Street San Francisco, CA'
    },
];

const MyAccountScreen = ({ navigation }) => {
    const pressBack = () => {
        alert('Press back');
    };
    const pressEdit = () => {
        navigation.navigate('EditMyAccount');
    };
    return (
        <View style={styles.container}>
            <HeaderBar
                title={'MY ACCOUNT'}
                rightBtn
                onPressLeftBtn={pressBack}
                onPressRightBtn={pressEdit}
                styleRightBtn={styles.imgHeaderBarRight}
                rightBtnText={'Edit'}
                leftBtnSource={back} />
            <FlatList
                data={dataUser}
                keyExtractor={(item, index) => index.toString()}
                style={styles.styleViewFlatlist}
                contentContainerStyle={styles.viewGroupItem}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                renderItem={({ item }) => {
                    return (
                        <ItemAccount
                            title={item.title}
                            value={item.value}
                        />
                    );
                }}
            />
            <FlatList
                data={dataDetail}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.viewGroupItem}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                renderItem={({ item, index }) => {
                    return (
                        <ItemAccount
                            title={item.title}
                            value={item.value}
                        />
                    );
                }}
            />

        </View>
    );
};

export default MyAccountScreen;

const styles = StyleSheet.create({
    container: {

    },
    imgHeaderBarRight: {
        width: '100%',
        height: '100%',
        borderRadius: responsiveWidth(2)
    },
    styleViewFlatlist: {
        marginTop: responsiveHeight(1.97)
    },
    viewGroupItem: {
        //backgroundColor: 'skyblue',
        marginTop: responsiveHeight(1.97),
        marginHorizontal: responsiveWidth(4),
        borderRadius: responsiveWidth(4.2),
        borderWidth: 1,
        borderColor: 'rgba(245, 245, 248, 1)',
        backgroundColor: '#FBFBFB'
    },
    separator: {
        alignSelf: 'center',
        width: responsiveWidth(78.6),
        height: 1,
        backgroundColor: '#DDDDDD'
    }
});

