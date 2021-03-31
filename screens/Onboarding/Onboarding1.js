import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import HamburgerSVG from '../../assets/svg/HamburgerSVG';
import { sizeHeight, sizeWidth } from "../../Utils/Size";
import { SvgXml } from 'react-native-svg';

import LogoAndSVG from './LogoAndSVG';
import MiddleTextOnboarding from './MiddleTextOnboarding';
import SkipOrNextButton from './SkipOrNextButton';
export default class Onboarding1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.backgroundView} />
                <LogoAndSVG xmlFile={HamburgerSVG}/>
                <MiddleTextOnboarding
                    textBold={'Choose a Favourite Food'}
                    textLight={"When you order Eat Steet, we'll hook you up with exclusive coupon, specials and rewards"}
                />
                <SkipOrNextButton skipBtn={true} />
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
        height: sizeWidth(150),
        marginTop: -sizeHeight(25),
        width: sizeWidth(150),
        alignItems: 'center',
        borderRadius: sizeWidth(75),
        backgroundColor: 'rgba(255, 92, 1, 0.2)'
    },
    
})