import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

export default class ButtonWithoutImage extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.button}>
                <Text style={{ fontSize: 16, color: "white" }}>
                    {this.props.buttonSign}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        height: 56,
        marginHorizontal: 16,
        borderRadius: 8,
        backgroundColor: "#F96B44",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16,
    },
})