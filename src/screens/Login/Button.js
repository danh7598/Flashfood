import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native'
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size'
import PropTypes from 'prop-types'
const orangeColor = '#F96B44'
class Button extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={[styles.button, {
                    backgroundColor: this.props.btnBackgroundColor,
                }]}>
                {this.props.imgSrc &&
                    <Image style={styles.imgBtn} source={this.props.imgSrc} />}
                <Text style={{ fontSize: sizeFont(4), color: this.props.textColor }}>
                    {this.props.buttonSign}
                </Text>
            </TouchableOpacity>
        )
    }
}

Button.propTypes = {
    buttonSign: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    textColor: PropTypes.string,
    btnBackgroundColor: PropTypes.string
}
Button.defaultProps = {
    textColor: 'white',
    btnBackgroundColor: orangeColor
}

export default Button
const styles = StyleSheet.create({
    button: {
        height: sizeHeight(8),
        marginHorizontal: sizeWidth(4),
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: sizeWidth(3),
    },
    imgBtn: {
        width: sizeWidth(4),
        height: sizeWidth(4),
        marginRight: sizeWidth(3),
    }
})