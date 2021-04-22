import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { sizeFont, sizeHeight, sizeWidth } from '../Utils/Size';
import backImg from '../assets/back.png';
import { orangeColor } from '../string/ColorTheme';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
class HeaderBar extends Component {
    render() {
        // console.log(sizeWidth(100))
        // console.log(sizeHeight(100))

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
                {this.props.rightBtnSource
                    ? <TouchableOpacity
                        onPress={this.props.onPressRightBtn}
                        style={[styles.btnContainer, {
                            backgroundColor: this.props.backgroundColorRightBtn,
                            borderWidth: 0
                        }]}>
                        <Image
                            style={[styles.imgBtn, this.props.styleRightBtn]}
                            source={this.props.rightBtnSource} />
                    </TouchableOpacity>
                    : this.props.rightBtnText
                        ? <TouchableOpacity
                            onPress={this.props.onPressRightBtn}
                            style={[styles.btnContainer, { borderWidth: 0 }]}>
                            <Text style={styles.textButtonRight}>
                                {this.props.rightBtnText}
                            </Text>
                        </TouchableOpacity>
                        : <View style={[styles.btnContainer, {
                            borderWidth: 0
                        }]} />}

            </View>
        );
    }
}

HeaderBar.propTypes = {
    title: PropTypes.string.isRequired,
    onPressLeftBtn: PropTypes.func.isRequired,
    onPressRightBtn: PropTypes.func,
    leftBtnSource: PropTypes.node,
    rightBtnSource: PropTypes.node,
    backgroundColorRightBtn: PropTypes.string

};
HeaderBar.defaultProps = {
    leftBtnSource: backImg,
    backgroundColorRightBtn: 'transparent'
};

export default HeaderBar;
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: sizeWidth(4),
        //height: sizeHeight(10),
        width: sizeWidth(100),
        //backgroundColor: 'skyblue',
        flexDirection: 'row',
        //justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: sizeHeight(1.5)
        // marginBottom: sizeHeight(3.94)
    },
    btnContainer: {
        width: sizeHeight(4.92),
        height: sizeHeight(4.92),
        borderRadius: sizeWidth(2),
        borderWidth: 1,
        borderColor: '#BBBDC1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgBtn: {
        width: sizeHeight(1.97),
        height: sizeHeight(1.97)
    },
    textTitle: {
        textAlign: 'center',
        flex: 1,
        fontFamily: 'SVN-Gilroy-Bold',
        color: '#111A2C',
        fontWeight: '700',
        fontSize: sizeFont(5),
        //backgroundColor: 'firebrick'
    },
    textButtonRight: {
        fontFamily: 'SVN-Gilroy-SemiBold',
        color: orangeColor,
        fontWeight: '600',
        fontSize: responsiveFontSize(2.09),
    }
});
