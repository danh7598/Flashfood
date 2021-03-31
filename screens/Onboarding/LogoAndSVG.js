import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SvgXml } from 'react-native-svg';
import { sizeHeight, sizeWidth } from '../../Utils/Size'

export default class LogoAndSVG extends Component {
    render() {
        return (
            <View style={styles.container}> 
                <Image
                    style={styles.imgLogoEatMe}
                    source={require('../../assets/logo-eatme.png')} />
                <SvgXml
                    style={styles.svgImg}
                    xml={this.props.xmlFile} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        //justifyContent: 'flex-start'
        position: 'absolute',
        alignItems: 'center'
    },
    imgLogoEatMe: {
        position: 'absolute',
        top: sizeHeight(7),
        width: sizeWidth(40),
        height: sizeWidth(12)
    },
    svgImg: {
        position: 'absolute',
        top: sizeHeight(18)
    }
})