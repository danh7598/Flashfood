import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size'

export default class MiddleTextOnboarding extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textBold}>{this.props.textBold}</Text>
                <Text style={styles.textLight}>{this.props.textLight}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        //backgroundColor: 'skyblue',
        position: 'absolute',
        width: sizeWidth(80),
        bottom: sizeHeight(24),
        
    },
    textBold: {
        fontSize: sizeFont(6),
        fontFamily: 'SVN-Gilroy-Bold',
        color: '#111A2C',
        marginBottom: sizeHeight(1)
        
    },
    textLight: {
        fontSize: sizeFont(3.5),
        fontFamily: 'SVN-Gilroy-Regular',
        textAlign: 'center',
        color: '#525C67',
        lineHeight: sizeHeight(2.5)
    }
})