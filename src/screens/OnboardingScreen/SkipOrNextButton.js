import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size';

export default class SkipOrNextButton extends Component {
    render() {
        if (this.props.skipBtn) {
            return (
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={this.props.onPressSkip}
                        style={styles.skipBtn}>
                        <Text style={styles.textSkip}>
                            Skip
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.props.onPressNext}
                        style={styles.nextBtn}>
                        <Text style={styles.textNext}>
                            Next
                    </Text>
                    </TouchableOpacity>
                </View>
            );
        }
        else {
            return (
                <TouchableOpacity
                    onPress={this.props.onPressFinish}
                    style={[styles.fullNextBtn, {
                        backgroundColor: this.props.btnBackgroundColor ? this.props.btnBackgroundColor : '#FF6C44',
                        width: this.props.btnWidth ? this.props.btnWidth : sizeWidth(80)
                    }]}>
                    <Text style={styles.textNext}>{this.props.textFullBtn}</Text>
                </TouchableOpacity>
            );
        }

    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: sizeHeight(12),
        //backgroundColor: 'skyblue',
        width: sizeWidth(80),
        justifyContent: 'space-between'
    },
    skipBtn: {

    },
    textSkip: {
        fontSize: sizeFont(2.09),
        fontFamily: 'SVN-Gilroy-Medium',
        fontWeight: '500',
        color: '#757D85'
    },
    nextBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: sizeWidth(36),
        height: sizeWidth(15),
        backgroundColor: '#FF6C44',
        borderRadius: sizeWidth(3)
    },
    textNext: {
        fontSize: sizeFont(2.09),
        fontFamily: 'SVN-Gilroy-SemiBold',
        fontWeight: '600',
        color: 'white'
    },
    fullNextBtn: {
        position: 'absolute',
        bottom: sizeHeight(12),
        height: sizeWidth(15),
        borderRadius: sizeWidth(3),
        justifyContent: 'center',
        alignItems: 'center'
    }
});