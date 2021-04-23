import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
//import HamburgerSVG from '../../assets/svg/HamburgerSVG';
import shipperSVG from '../../assets/svg/ShipperSVG';
import { sizeHeight, sizeWidth } from "../../Utils/Size";
import LogoAndSVG from './LogoAndSVG';
import MiddleTextOnboarding from './MiddleTextOnboarding';
import SkipOrNextButton from './SkipOrNextButton';
export default class Onboarding2Screen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.backgroundView} />
                <LogoAndSVG svgImg={require('../../assets/shipper.png')} />
                <MiddleTextOnboarding
                    textBold={'Hot Delivery to Home'}
                    textLight={'We make food ordering fast, simple and free-no matter if you order online or cash'}
                />
                <SkipOrNextButton
                    onPressSkip={() => {
                        alert("skip");
                    }}
                    onPressNext={() => {
                        this.props.navigation.navigate('Onboarding3');
                    }}
                    skipBtn={true} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: sizeWidth(100),
        height: sizeHeight(100),
        alignItems: 'center',
        backgroundColor: 'rgba(255, 92, 1, 0.2)'
    },
    backgroundView: {
        position: 'absolute',
        height: sizeHeight(75),
        bottom: -sizeHeight(9),
        width: sizeWidth(150),
        alignItems: 'center',
        borderRadius: sizeWidth(75),
        backgroundColor: "white"

    },
});