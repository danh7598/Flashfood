import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Onboarding1 from './Onboarding1'
import Onboarding2 from './Onboarding2'
import Onboarding3 from './Onboarding3'
import SkipOrNextButton from './SkipOrNextButton'

export default class Slider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeScreen: 0,
            skipBtn: true
        }
    }
    onPressNext = () => {
        if (this.state.activeScreen < 2)
            this.setState({
                activeScreen: this.state.activeScreen + 1
            })
    }
    onPressSkip = () => {
        if (this.state.activeScreen > 0) {
            this.setState({
                activeScreen: this.state.activeScreen - 1
            })
        }
    }
    onPressFinish = () => {
        this.setState({
            activeScreen: 0
        })
    }   
    render() {
        //console.log(this.state.activeScreen)
        let skipBtn = true;
        if (this.state.activeScreen == 2) {
            skipBtn = false;
        } else {
            skipBtn = true;
        }
        return (
            <View style={styles.container}>
                {this.state.activeScreen === 0
                    ? <Onboarding1 />
                    : this.state.activeScreen === 1 ? <Onboarding2 />
                        : <Onboarding3 />}
                <SkipOrNextButton
                    onPressSkip={this.onPressSkip}
                    onPressNext={this.onPressNext}
                    onPressFinish={this.onPressFinish}
                    textFullBtn={"Let's get back again"}
                    skipBtn={skipBtn} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    }
})