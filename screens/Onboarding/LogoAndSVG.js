import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SvgXml } from 'react-native-svg';
import { sizeHeight, sizeWidth } from '../../Utils/Size'

export default class LogoAndSVG extends Component {
    render() {
        return (
            <View style={styles.container}> 
                <Image
                    style={styles.imgLogoEatMe}
                    source={require('../../assets/logo-eatme.png')} />
                <SvgXml
                    style={styles.svgImg}
                    xml={this.props.xmlFile} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        //justifyContent: 'flex-start'
        position: 'absolute',
        alignItems: 'center'
    },
    imgLogoEatMe: {
        position: 'absolute',
        top: sizeHeight(7),
        width: sizeWidth(42),
        height: sizeHeight(8),
        resizeMode: 'contain', //contain là hiển thị hình ảnh với kích cỡ bằng hoặc nhỏ hơn view chứa nớ
        //giữ tỉ lệ theo kích thước của hình ảnh
        //backgroundColor: 'skyblue'
    },
    svgImg: {
        position: 'absolute',
        top: sizeHeight(18)
    }
})