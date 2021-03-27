import React, { Component } from 'react'
import {Image, StyleSheet, Text, View } from 'react-native'

export default class LogoComponent extends Component {
    render() {
        return (
            <View style={styles.logoContainer}>
                <Image style={styles.imgLogo} source={require('../../assets/logo-eatme.png')}/>
                <View style={styles.textLogo}>
                    <Text style={styles.textBold}>{this.props.textBold}</Text>
                    <Text style={styles.textLight}>{this.props.textLight}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
        height: 200,
        //backgroundColor: 'skyblue'
    },
    imgLogo: {
        width: 208,
        height: 64,
    },
    textLogo: {
        marginTop: 32,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBold: {
        fontSize: 24,
        fontWeight: 'bold',
        //fontFamily: 'Gilroy'
    },
    textLight: {
        color: '#525C67',
        fontSize: 16,
        marginTop: 8
    }
})