import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import HeaderText from './HeaderText';

export default class LogoComponent extends Component {
    render() {
        return (
            <View style={styles.logoContainer}>
                <Image style={styles.imgLogo} source={require('../../assets/logo-eatme.png')} />
                {this.props.textBold || textLight
                    ? <HeaderText textBold={this.props.textBold} textLight={this.props.textLight} />
                    : null}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'skyblue'
    },
    imgLogo: {
        width: 208,
        height: 64,
        marginTop: 24
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