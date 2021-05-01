import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import close from '../../assets/close.png';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { orangeColor } from '../../string/ColorTheme';
import face_woman from '../../assets/face_woman.jpeg';
import logout from '../../assets/logout.png';
import home_tabbar from '../../assets/home-tabbar.png';
import notification_tabbar from '../../assets/notification-tabbar.png';
import favourite_tabbar from '../../assets/favourite-tabbar.png';
import wallet from '../../assets/Wallet.png';
import location from '../../assets/Location.png';
import profile from '../../assets/Profile.png';
import help from '../../assets/Help.png';
import coupon from '../../assets/Coupon.png';
import setting from '../../assets/Setting.png';
const ItemDrawer = ({ style, onPress, title, icon }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={style}>
            <Image style={styles.imageIcon}
                source={icon} />
            <Text style={styles.textItem}>{title}</Text>
        </TouchableOpacity>
    );
};
const CustomDrawerContainer = (props) => {
    // console.log(JSON.stringify(props.navigation));
    const nameRoutes = props.state.routeNames;

    const onPress = (name) => () => {
        props.navigation.navigate(name);
    };

    return (
        <View style={styles.viewDrawer}>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.closeDrawer();
                }}
                style={styles.btnClose}>
                <Image style={styles.imageIcon}
                    source={close} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate('MyAccount');
                }}
                style={styles.viewAvatar}>
                <Image
                    style={styles.imgAvatar}
                    source={face_woman} />
                <View style={styles.viewTextAvatar}>
                    <Text style={styles.textName}>Arman Nijum</Text>
                    <Text style={styles.textViewProfile}>View your profile</Text>
                </View>
            </TouchableOpacity>
            {nameRoutes.map((item, index) => {
                let icon = '';
                switch (item) {
                    case "Home":
                        icon = home_tabbar;
                        break;
                    case "My Card":
                        icon = wallet;
                        break;
                    case "Notifications":
                        icon = notification_tabbar;
                        break;
                    case "My Favourite":
                        icon = favourite_tabbar;
                        break;
                }
                return (
                    index < 4 && <ItemDrawer
                        onPress={onPress(item)}
                        key={item}
                        icon={icon}
                        title={item}
                        style={[styles.viewItem, { marginTop: index === 0 ? responsiveHeight(4.92) : responsiveHeight(1.97) }]} />
                );
            })}
            <View style={styles.viewLine} />
            {nameRoutes.map((item, index) => {
                let icon = '';
                switch (item) {
                    case "Track Your Order":
                        icon = location;
                        break;
                    case "Coupons":
                        icon = coupon;
                        break;
                    case "Settings":
                        icon = setting;
                        break;
                    case "Invite a Friend":
                        icon = profile;
                        break;
                    case "Help Center":
                        icon = help;
                        break;
                }
                return (
                    index >= 4 && <ItemDrawer
                        onPress={onPress(item)}
                        key={item}
                        icon={icon}
                        title={item}
                        style={[styles.viewItem, { marginTop: index === 4 ? responsiveHeight(3.97) : responsiveHeight(1.97) }]} />
                );
            })}
            <ItemDrawer
                onPress={() => alert("Logout")}
                icon={logout}
                title={'Logout'}
                style={[styles.viewItem, styles.btnLogout]} />

            {/* <DrawerItemList {...props} /> */}
        </View>
    );
};

export default CustomDrawerContainer;

const styles = StyleSheet.create({
    viewDrawer: {
        backgroundColor: orangeColor,
        flex: 1,
    },
    imageIcon: {
        width: responsiveWidth(4.2),
        height: responsiveWidth(4.2),
        tintColor: 'white'
        //backgroundColor: 'skyblue'
    },
    btnClose: {
        //alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: responsiveHeight(3.94),
        paddingLeft: responsiveWidth(4),
        //backgroundColor: 'skyblue',
    },
    viewAvatar: {
        height: responsiveHeight(5.91),
        width: responsiveWidth(45),
        // backgroundColor: 'skyblue',
        marginLeft: responsiveWidth(4),
        marginTop: responsiveHeight(3.94),
        flexDirection: 'row',
    },
    imgAvatar: {
        height: responsiveHeight(5.91),
        width: responsiveHeight(5.94),
        borderRadius: responsiveWidth(2.13)
    },
    viewTextAvatar: {
        marginLeft: responsiveWidth(3.2)
    },
    textName: {
        fontFamily: 'SVN-Gilroy-SemiBold',
        fontWeight: '600',
        color: 'white',
        fontSize: responsiveFontSize(2.09),
    },
    textViewProfile: {
        fontFamily: 'SVN-Gilroy-Regular',
        fontWeight: '400',
        color: 'white',
        fontSize: responsiveFontSize(1.56),
    },
    viewItem: {
        marginLeft: responsiveWidth(4),
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'skyblue',
        height: responsiveHeight(4.55),
    },
    textItem: {
        fontFamily: 'SVN-Gilroy-SemiBold',
        fontWeight: '600',
        color: 'white',
        fontSize: responsiveFontSize(1.83),
        marginLeft: responsiveWidth(4.2)
    },
    viewLine: {
        width: responsiveWidth(49.33),
        height: 1,
        backgroundColor: 'white',
        opacity: 0.2,
        marginTop: responsiveHeight(3.94),
        alignSelf: 'center'
    },
    btnLogout: {
        position: 'absolute',
        marginLeft: responsiveWidth(4.5),

        bottom: responsiveHeight(5.89)
    }
});
