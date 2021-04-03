import React, { Component } from 'react'
import { StyleSheet, TextInput, Text, View } from 'react-native'
import { sizeFont, sizeWidth } from '../../Utils/Size'

export default class FormInput extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder={this.props.placeholder}
                    //value={'ad'}
                    style={styles.textInput} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        //width: sizeWidth(38),
        height: sizeWidth(16),
        marginBottom: sizeWidth(5),
        borderRadius: 10,
        padding: sizeWidth(4),
        //alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8F8F8'

    },
    textInput: {
        fontSize: sizeFont(4),
        fontFamily: 'SVN-Gilroy-Regular',
        color: 'black',

    },

})