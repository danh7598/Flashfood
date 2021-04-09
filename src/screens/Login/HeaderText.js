import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { sizeHeight, sizeFont, sizeWidth } from '../../Utils/Size'
import PropTypes from 'prop-types'
class HeaderText extends Component {
    render() {
        return (
            <View style={styles.textHeader}>
                {this.props.textBold
                    ? <Text style={styles.textBold}>
                        {this.props.textBold}
                    </Text>
                    : null}
                {this.props.textLight
                    ? <Text style={[styles.textLight, this.props.style]}>
                        {this.props.textLight}
                    </Text>
                    : null}
            </View>
        )
    }
}

HeaderText.propTypes = {
    textBold: PropTypes.string,
    textLight: PropTypes.string
}
export default HeaderText

const styles = StyleSheet.create({
    textHeader: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBold: {
        fontSize: sizeFont(7),
        fontWeight: 'bold',
        fontFamily: 'SVN-Gilroy-Bold'
    },
    textLight: {
        color: '#525C67',
        fontSize: sizeFont(4),
        marginTop: sizeHeight(0.8),
        fontFamily: 'SVN-Gilroy-Regular',
        textAlign: 'center'
    }
})