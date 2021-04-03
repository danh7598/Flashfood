import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { sizeFont } from '../../Utils/Size'
import PropTypes from 'prop-types'
class QuestionSign extends Component {
    render() {
        return (
            <View style={styles.containerQuestionSign}>
                <Text style={styles.textQuestionSign}>
                    {this.props.questionSign}
                </Text>
                <TouchableOpacity onPress={this.props.onPress}>
                    <Text style={styles.textAlternativeButtonSign}>
                        {this.props.alternativeButtonSign}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

QuestionSign.propTypes = {
    onPress: PropTypes.func.isRequired,
    questionSign: PropTypes.string,
    alternativeButtonSign: PropTypes.string,

}

export default QuestionSign

const styles = StyleSheet.create({
    containerQuestionSign: {
        flexDirection: "row",
        justifyContent: "center"
    },
    textQuestionSign: {
        fontSize: sizeFont(4),
        color: "#525C67"
    },
    textAlternativeButtonSign: {
        fontSize: sizeFont(4),
        color: "#F96B44"
    }
})