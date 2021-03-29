import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { sizeFont, sizeWidth } from '../../Utils/Size'

export default class SocialButton extends Component {
    render() {
        return (
            <View style={[styles.container,
            {backgroundColor: this.props.backgroundColor}]}>
                <Image
                    source={this.props.source}
                    style={styles.imgButton}
                />
                <Text style={styles.textButton}>
                    {this.props.textButton}
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: sizeWidth(38),
        height: sizeWidth(16),
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
        
    },
    imgButton: {
        width: sizeWidth(5),
        height: sizeWidth(5),
        marginRight: sizeWidth(2),
        tintColor: 'white'
    },
    textButton: {
        fontSize: sizeFont(4),
        fontFamily: 'SVN-Gilroy-Regular',
        color: 'white'
    }
})