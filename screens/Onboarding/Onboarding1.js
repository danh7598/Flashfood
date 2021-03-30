import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SvgXml } from 'react-native-svg';
import HamburgerSVG from '../../assets/svg/HamburgerSVG';
import { sizeHeight, sizeWidth } from "../../Utils/Size";
export default class Onboarding1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.backgroundView}>
                    
                </View>
                <Image
                        style={styles.imgLogoEatMe}
                        source={require('../../assets/logo-eatme.png')} />
                <SvgXml
                    style={styles.svgImg}
                    xml={HamburgerSVG} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundView: {
        height: sizeHeight(75),
        marginTop: -sizeHeight(25),
        width: sizeWidth(150),
        alignItems: 'center',
        borderRadius: sizeWidth(75),
        backgroundColor: 'rgba(255, 92, 1, 0.2)'
        
    },
    imgLogoEatMe: {
        position: 'absolute',
        top: sizeHeight(7),
        width: sizeWidth(52),
        height: sizeWidth(16)
    },
    svgImg: {
        position: 'absolute',
        top: sizeHeight(20)
    }
})