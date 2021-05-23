import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, ActivityIndicator } from 'react-native';
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size';
import PropTypes from 'prop-types';
const orangeColor = '#F96B44';
class Button extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={[styles.button, {
                    backgroundColor: this.props.btnBackgroundColor,
                    marginBottom: this.props.marginBottom
                }, this.props.style]}>
                {this.props.imgSrc &&
                    <Image style={styles.imgBtn} source={this.props.imgSrc} />}
                <Text style={[styles.textButton, this.props.textStyle]}>
                    {this.props.buttonSign}
                </Text>
                {this.props.isLoading && <ActivityIndicator size="small" color={styles.textButton.color} />}
            </TouchableOpacity>
        );
    }
}

Button.propTypes = {
    buttonSign: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    textColor: PropTypes.string,
    btnBackgroundColor: PropTypes.string
};
Button.defaultProps = {
    textColor: 'white',
    btnBackgroundColor: orangeColor,
    marginBottom: sizeHeight(1.5)
};

export default Button;
const styles = StyleSheet.create({
    button: {
        height: sizeHeight(8),
        marginHorizontal: sizeWidth(4),
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        //marginBottom: sizeHeight(1.5),
    },
    imgBtn: {
        width: sizeWidth(4),
        height: sizeWidth(4),
        marginRight: sizeWidth(3),
    },
    textButton: {
        fontSize: sizeFont(2.08),
        fontFamily: 'SVN-Gilroy-Bold',
        color: 'white',
        marginRight: sizeWidth(4)
    }

});