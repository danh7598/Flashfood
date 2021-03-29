import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    KeyboardAvoidingView
} from 'react-native';
import { sizeFont, sizeWidth } from '../../Utils/Size';

const orangeColor = '#F96B44'
const grayColor = '#525C67'
const blueColor = ''

export default class SaveAndForgotComponent extends Component {
    render() {
        return (
            <View style={styles.viewSaveAndForgot}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Switch
                        value={this.props.switchValue}
                        onValueChange={this.props.onPressSwitch}
                        trackColor={{ true: orangeColor }}
                        style={{ marginRight: sizeWidth(1), transform: [{ scaleX: .8 }, { scaleY: .8 }] }} />
                    <Text style={[styles.textNameForm,
                    this.props.switchValue ? { color: orangeColor} : { color: '#898B9A' }
                    ]}>Save me</Text>
                </View>
                <TouchableOpacity 
                onPress={this.props.onPressForgot}>
                    <Text style={styles.textNameForm}>Forgot Password</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    textNameForm: {
        color: grayColor,
        fontSize: sizeFont(3.5),
        fontFamily: 'SVN-Gilroy-Medium',
    },
    viewSaveAndForgot: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: sizeWidth(4),
        marginTop: sizeWidth(4),
        //backgroundColor: 'green'
    },
});
