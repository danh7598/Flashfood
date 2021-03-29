import React, { Component } from 'react'
import { StyleSheet, TextInput, Text, View } from 'react-native'
import { sizeFont, sizeWidth } from '../../Utils/Size'

export default class QuestionSign extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.questionText}>
                    {this.props.questionText}
                </Text>
                <Text style={styles.questionTextButton}>
                    {this.props.questionTextButton}
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        //width: sizeWidth(38),
        flexDirection: 'row',
        justifyContent: 'center'

    },
    questionText: {
        fontSize: sizeFont(4),
        fontFamily: 'SVN-Gilroy-Bold',
        color: '#A3A7A8',
    },
    questionTextButton: {
        color: '#8FBDD5',
        fontSize: sizeFont(4),
        fontFamily: 'SVN-Gilroy-Bold',
    }

})