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
                <Text style={styles.textLight}>
                    {this.props.textLight}
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        paddingLeft: sizeWidth(8)
    },
    textBold: {
        fontSize: sizeFont(6),
        fontFamily: 'SVN-Gilroy-Regular',
        fontWeight: '700'
    },
    textLight: {
        marginTop: sizeWidth(2),
        fontSize: sizeFont(4),
        fontFamily: 'SVN-Gilroy-Regular',
        color: 'gray'
    }
})