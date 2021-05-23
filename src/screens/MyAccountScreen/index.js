import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import HeaderBar from '../../common/HeaderBar';
import back from '../../assets/back.png';
import ItemAccount from './ItemAccount';
import { sizeHeight, sizeWidth } from '../../Utils/Size';
import firebase from 'firebase/app';
import "firebase/auth";

let dataUser = [
    {
        title: 'Full Name',
        value: ''
    },
    {
        title: 'Phone Number',
        value: ''
    },
    {
        title: 'User Id',
        value: ''
    },
];

let dataDetail = [
    {
        title: 'Id Card',
        value: ''
    },
    {
        title: 'Date of Birth',
        value: ''
    },
    {
        title: 'Gender',
        value: ''
    },
    {
        title: 'Joined',
        value: ''
    },
    {
        title: 'Email',
        value: ''
    },
    {
        title: 'Address',
        value: ''
    },
];

const MyAccountScreen = ({ navigation }) => {

    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;

    if (user != null) {
        dataUser[0].value = user.displayName; //Full Name
        dataDetail[4].value = user.email; //email
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        dataUser[2].value = user.uid; //ID User
    }




    const pressBack = () => {
        navigation.goBack();
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
        borderRadius: sizeWidth(2)
    },
    styleViewFlatlist: {
        marginTop: sizeHeight(1.97)
    },
    viewGroupItem: {
        //backgroundColor: 'skyblue',
        marginTop: sizeHeight(1.97),
        marginHorizontal: sizeWidth(4),
        borderRadius: sizeWidth(4.2),
        borderWidth: 1,
        borderColor: 'rgba(245, 245, 248, 1)',
        backgroundColor: '#FBFBFB'
    },
    separator: {
        alignSelf: 'center',
        width: sizeWidth(78.6),
        height: 1,
        backgroundColor: '#DDDDDD'
    }
});

