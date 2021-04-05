import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { sizeFont, sizeWidth } from '../../Utils/Size'

export default class HeaderText extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textBold}>
                    {this.props.textBold}
                </Text>
                <Text style={[styles.textLight, {lineHeight: this.props.lineHeight}]}>
                    {this.props.textLight}
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    textBold: {
        fontSize: sizeFont(6),
        fontFamily: 'SVN-Gilroy-Bold',
        fontWeight: '700'
    },
    textLight: {
        marginTop: sizeWidth(2),
        fontSize: sizeFont(4),
        fontFamily: 'SVN-Gilroy-Regular',
        color: 'gray',
        textAlign: 'center',
    }
})