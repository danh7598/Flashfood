import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size'

export default class ButtonWithoutImage extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.button}>
                <Text style={{ fontSize: sizeFont(4), color: "white" }}>
                    {this.props.buttonSign}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        height: sizeHeight(8),
        marginHorizontal: sizeWidth(4),
        borderRadius: 10,
        backgroundColor: "#F96B44",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: sizeWidth(3),
    },
})