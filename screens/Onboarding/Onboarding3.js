import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SvgXml } from 'react-native-svg';
import foodPackage from '../../assets/svg/FoodPackage';
import { sizeHeight, sizeWidth } from "../../Utils/Size";
import LogoAndSVG from './LogoAndSVG';
import MiddleTextOnboarding from './MiddleTextOnboarding';
import SkipOrNextButton from './SkipOrNextButton';
export default class Onboarding3 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.backgroundView} />
                <LogoAndSVG xmlFile={foodPackage} />
                <MiddleTextOnboarding
                    textBold={'Receive the Greate Food'}
                    textLight={"You'll receive the greate food within a hour. And get free delivery credits for every order"}
                />
                <SkipOrNextButton skipBtn={false} />
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
        marginTop: -sizeHeight(20),
        width: sizeWidth(150),
        alignItems: 'center',
        borderRadius: sizeWidth(75),
        backgroundColor: 'rgba(255, 92, 1, 0.2)'
    },
})