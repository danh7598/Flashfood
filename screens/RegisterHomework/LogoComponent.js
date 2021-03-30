import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { sizeHeight, sizeWidth } from '../../Utils/Size'

export default class LogoComponent extends Component {
    render() {
        return (
            <View style={styles.logoContainer}>
                <View style={styles.logoView} />
                <Image
                    style={styles.imgHome}
                    source={require('../../assets/home-img.png')} />
            </View>

        )
    }
}
const styles = StyleSheet.create({
    logoContainer: {
        height: sizeHeight(25),
        //backgroundColor: 'skyblue'
    },
    logoView: {
        backgroundColor: '#00B761',
        height: sizeWidth(28),
        width: sizeWidth(17),
        borderRadius: 14,
        marginLeft: sizeWidth(30),
        marginTop: -sizeWidth(15),
        transform: [{
            rotate: '30deg',
        }]
    },
    imgHome: {
        marginLeft: sizeWidth(5),
        width: sizeWidth(30),
        height: sizeWidth(30)
    }
})