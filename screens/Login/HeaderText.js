import React, { Component } from 'react'
import {StyleSheet, Text, View } from 'react-native'
import { sizeFont, sizeWidth } from '../../Utils/Size'

export default class HeaderText extends Component {
    render() {
        return (
            <View style={styles.textHeader}>
                    {this.props.textBold
                        ? <Text style={styles.textBold}>
                            {this.props.textBold}
                            </Text>
                        : null}
                    {this.props.textLight
                        ? <Text style={styles.textLight}>
                            {this.props.textLight}
                            </Text>
                        : null}
                </View>
        )
    }
}

const styles = StyleSheet.create({
    textHeader: {
        marginTop: sizeWidth(3),
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBold: {
        fontSize: sizeFont(7),
        fontWeight: 'bold',
        fontFamily: 'SVN-Gilroy-Bold'
    },
    textLight: {
        color: '#525C67',
        fontSize: sizeFont(4),
        marginTop: sizeWidth(1),
        fontFamily: 'SVN-Gilroy-Regular'
    }
})