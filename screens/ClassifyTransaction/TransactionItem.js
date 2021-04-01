import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size';

export default class TransactionItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LinearGradient
                    colors={this.props.linearGradientColors}
                    style={styles.circleItem}>
                    <Image
                        style={styles.image}
                        source={this.props.sourceImage} />
                </LinearGradient>
                <Text style={[styles.textItem, { color: this.props.textColor }]}>{this.props.name}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: sizeWidth(36),
        height: sizeWidth(36),
        borderRadius: sizeWidth(4),
        backgroundColor: '#272B48',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circleItem: {
        width: sizeWidth(15),
        height: sizeWidth(15),
        borderRadius: sizeWidth(7.5),
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        tintColor: 'white',
        width: sizeWidth(6),
        height: sizeWidth(6)
    },
    textItem: {
        fontFamily: 'SVN-Gilroy-Bold',
        fontSize: sizeFont(4),
        marginTop: sizeHeight(1)
    }
})