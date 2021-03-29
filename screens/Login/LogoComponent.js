import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { sizeHeight, sizeWidth } from '../../Utils/Size';
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
        width: sizeWidth(48),
        height: sizeWidth(15),
        marginTop: sizeWidth(4)
    },
    
})