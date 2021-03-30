import React, { Component } from 'react'
import { StyleSheet, TextInput, TouchableOpacity, Text, View } from 'react-native'
import { sizeFont, sizeWidth } from '../../Utils/Size'

export default class SignButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <Text style={styles.textSign}>
                    {this.props.signText}
                </Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        //width: sizeWidth(38),
        height: sizeWidth(16),
        marginBottom: sizeWidth(5),
        borderRadius: 10,
        padding: sizeWidth(4),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00B761',
        marginHorizontal: sizeWidth(8)

    },
    textSign: {
        fontSize: sizeFont(4),
        fontFamily: 'SVN-Gilroy-Bold',
        color: 'white',

    },

})