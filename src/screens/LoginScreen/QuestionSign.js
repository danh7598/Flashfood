import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { sizeFont, sizeWidth } from '../../Utils/Size';
import PropTypes from 'prop-types';
class QuestionSign extends Component {
    render() {
        return (
            <View style={[styles.containerQuestionSign, { flexDirection: this.props.flexDirection }]}>
                <Text style={styles.textQuestionSign}>
                    {this.props.questionSign}
                </Text>
                <TouchableOpacity
                    disabled={this.props.disabled}
                    onPress={this.props.onPress}>
                    <Text style={styles.textAlternativeButtonSign}>
                        {this.props.alternativeButtonSign}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

QuestionSign.propTypes = {
    onPress: PropTypes.func.isRequired,
    questionSign: PropTypes.string,
    alternativeButtonSign: PropTypes.string,
    disabled: PropTypes.bool,
    flexDirection: PropTypes.string

};
QuestionSign.defaultProps = {
    disabled: false,
    flexDirection: 'row'
};

export default QuestionSign;

const styles = StyleSheet.create({
    containerQuestionSign: {
        flexDirection: "row",
        justifyContent: "center",

    },
    textQuestionSign: {
        fontSize: sizeFont(2.09),
        color: "#525C67"
    },
    textAlternativeButtonSign: {
        fontSize: sizeFont(2.09),
        color: "#F96B44",
        textAlign: 'center',
    },

});