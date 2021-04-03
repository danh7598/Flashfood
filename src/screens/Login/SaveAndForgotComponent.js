import React, { Component } from 'react';
import {
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import PropTypes from 'prop-types';
import { sizeFont, sizeWidth } from '../../Utils/Size';

const orangeColor = '#F96B44'
const grayColor = '#898B9A'
const blueColor = ''

class SaveAndForgotComponent extends Component {
    render() {
        return (
            <View style={styles.viewSaveAndForgot}>
                <View style={styles.viewSwitchSavePassword}>
                    <Switch
                        value={this.props.switchValue}
                        onValueChange={this.props.onPressSwitch}
                        trackColor={{ true: orangeColor, false: grayColor }}
                        style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }} />
                    <Text style={[styles.textSaveAndForgot,
                    this.props.switchValue ? { color: orangeColor } : { color: grayColor }
                    ]}>Save me</Text>
                </View>
                <TouchableOpacity
                    onPress={this.props.onPressForgot}>
                    <Text style={styles.textSaveAndForgot}>Forgot Password</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

SaveAndForgotComponent.propTypes = {
    switchValue: PropTypes.bool.isRequired,
    onPressSwitch: PropTypes.func.isRequired,
    onPressForgot: PropTypes.func.isRequired
}

export default SaveAndForgotComponent
const styles = StyleSheet.create({
    viewSaveAndForgot: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: sizeWidth(4),
        //marginTop: sizeWidth(4),
        //backgroundColor: 'green'
    },
    viewSwitchSavePassword: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textSaveAndForgot: {
        color: grayColor,
        fontSize: sizeFont(3.5),
        fontFamily: 'SVN-Gilroy-Medium',
    },

});
