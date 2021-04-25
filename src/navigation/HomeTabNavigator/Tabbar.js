import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { orangeColor } from '../../string/ColorTheme';
import home_tabbar from '../../assets/home-tabbar.png';
import my_cart_tabbar from '../../assets/my-cart-tabbar.png';
import Notification from '../../assets/notification-tabbar.png';
import search_tabbar from '../../assets/search-tabbar.png';
import favourite_tabbar from '../../assets/favourite-tabbar.png';

const Tabbar = ({ state, descriptors, navigation }) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    let icon = '';


    return (
        <View style={styles.homeTabStackStyle}>

            {state.routes.map((route, index) => {
                switch (route.name) {
                    case 'Home':
                        icon = home_tabbar;
                        break;
                    case 'Filter':
                        icon = search_tabbar;
                        break;
                    case 'Cart':
                        icon = my_cart_tabbar;
                        break;
                    case 'Favourite':
                        icon = favourite_tabbar;
                        break;
                    case 'Notification':
                        icon = Notification;
                        break;
                }
                const { options } = descriptors[route.key];

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                if (isFocused) {
                    return (
                        <TouchableOpacity
                            key={route.name}

                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={styles.viewTabbarIconFocused}
                        >
                            <Image
                                style={styles.imgTabbar}
                                source={icon} />
                            <Text style={styles.textTabbar} >
                                {route.name}
                            </Text>
                        </TouchableOpacity>
                    );
                } else {
                    return (
                        <TouchableOpacity
                            key={route.name}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={styles.viewTabbarIconOutFocused}>
                            <Image
                                style={[styles.imgTabbar, { tintColor: '#898B9A' }]}
                                source={icon} />
                        </TouchableOpacity>
                    );
                }


            })}
        </View>
    );
};




export default Tabbar;

const styles = StyleSheet.create({
    homeTabStackStyle: {
        flexDirection: 'row',
        height: responsiveHeight(8),
        // width: responsiveWidth(100),
        //justifyContent: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopLeftRadius: responsiveWidth(6.4),
        borderTopRightRadius: responsiveWidth(6.4),
        // justifyContent: 'space-around',
        // paddingBottom: responsiveWidth(4),
        // backgroundColor: 'skyblue',
        elevation: 0.8,
        paddingHorizontal: responsiveWidth(4)
    },
    viewTabbarIconFocused: {
        alignSelf: 'center',
        //marginLeft: responsiveWidth(4),
        width: responsiveWidth(26),
        height: responsiveHeight(4.9),
        borderRadius: responsiveWidth(5.3),
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: orangeColor
    },
    imgTabbar: {
        width: responsiveWidth(4.2),
        height: responsiveWidth(4.2),
        tintColor: 'white'
    },
    textTabbar: {
        // backgroundColor: 'tomato',
        marginLeft: responsiveWidth(2.1),
        fontFamily: 'SVN-Gilroy-Bold',
        fontWeight: '700',
        fontSize: responsiveFontSize(1.57),
        color: 'white',

    },
    viewTabbarIconOutFocused: {
        // backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
        width: responsiveWidth(15),
        height: responsiveHeight(4.9),
    },
});
