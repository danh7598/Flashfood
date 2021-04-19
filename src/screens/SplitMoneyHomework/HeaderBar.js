import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size';

const HeaderBar = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnBack}>
                <Image
                    style={styles.imgBack}
                    source={require('../../assets/back.png')} />
            </TouchableOpacity>
            <View style={styles.viewTitle}>
                <Text style={styles.textTitle}>Split Now</Text>
                <TouchableOpacity>
                    <Image
                        style={styles.imgMenu}
                        source={require('../../assets/three-dots.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HeaderBar;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        //height: sizeHeight(7),
        //ackgroundColor: 'skyblue',
        paddingTop: sizeHeight(2),
        paddingHorizontal: sizeWidth(6.4),
        justifyContent: 'space-between'
    },
    btnBack: {
        width: sizeWidth(15),
        height: sizeWidth(15),
        borderRadius: sizeWidth(4),
        backgroundColor: '#363157',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgBack: {
        width: sizeWidth(5),
        height: sizeWidth(5),
        tintColor: '#C1B3B6',
    },
    viewTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        //paddingBottom: sizeHeight(0.55),
        //backgroundColor: 'skyblue'
    },
    textTitle: {
        fontSize: sizeFont(6.4),
        fontWeight: '600',
        color: '#C1B3B6',
        //marginBottom: sizeHeight(0.5),
        marginRight: sizeWidth(6.4)
    },
    imgMenu: {
        width: sizeWidth(6),
        height: sizeWidth(6),
        tintColor: '#C1B3B6'
    }
});
