import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import PropTypes from 'prop-types'
import { sizeFont, sizeHeight, sizeWidth } from '../Utils/Size';
import backImg from '../assets/back.png';
class HeaderBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={this.props.onPressLeftBtn}
                    style={styles.btnContainer}
                >
                    <Image
                        style={styles.imgBtn}
                        source={this.props.leftBtnSource} />
                </TouchableOpacity>
                <Text style={styles.textTitle}>
                    {this.props.title}
                </Text>

                {/* Nếu k có nút bên phải thì render ra 1 view rỗng để có thể canh giữa cho text title*/}
                {this.props.rightBtn
                    ? <TouchableOpacity
                        onPress={this.props.onPressRightBtn}
                        style={[styles.btnContainer, {
                            backgroundColor: this.props.backgroundColorRightBtn,
                            borderWidth: 0
                        }]}>
                        <Image
                            style={styles.imgBtn}
                            source={this.props.rightBtnSource} />
                    </TouchableOpacity>
                    : <View style={[styles.btnContainer, {
                        borderWidth: 0
                    }]} />}

            </View>
        )
    }
}

HeaderBar.propTypes = {
    title: PropTypes.string.isRequired,
    onPressLeftBtn: PropTypes.func.isRequired,
    onPressRightBtn: PropTypes.func,
    leftBtnSource: PropTypes.node,
    rightBtnSource: PropTypes.node,
    rightBtn: PropTypes.bool,
    backgroundColorRightBtn: PropTypes.string

}
HeaderBar.defaultProps = {
    leftBtnSource: backImg,
    rightBtn: false,
    backgroundColorRightBtn: 'transparent'
}

export default HeaderBar
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: sizeWidth(4),
        height: sizeHeight(12),
        width: sizeWidth(100),
        //backgroundColor: 'skyblue',
        flexDirection: 'row',
        //justifyContent: 'space-between',
        alignItems: 'center'
    },
    btnContainer: {
        width: sizeWidth(10),
        height: sizeWidth(10),
        borderRadius: sizeWidth(2),
        borderWidth: 1,
        borderColor: '#BBBDC1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgBtn: {
        width: sizeWidth(4),
        height: sizeWidth(4)
    },
    textTitle: {
        textAlign: 'center',
        flex: 1,
        fontFamily: 'SVN-Gilroy-Regular',
        color: '#111A2C',
        fontWeight: '700',
        fontSize: sizeFont(5),
        //backgroundColor: 'firebrick'
    }
})
