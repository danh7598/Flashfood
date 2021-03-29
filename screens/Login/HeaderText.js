import React, { Component } from 'react'
import {StyleSheet, Text, View } from 'react-native'

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
        marginTop: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBold: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'SVN-Gilroy-Bold'
    },
    textLight: {
        color: '#525C67',
        fontSize: 16,
        marginTop: 8,
        fontFamily: 'SVN-Gilroy-Regular'
    }
})