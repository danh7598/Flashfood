import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { sizeHeight, sizeWidth } from '../../Utils/Size'
import HeaderText from '../Login/HeaderText'

const LogoAndText = ({ textBold, textLight, style }) => {
    return (
        <View style={styles.headerView}>
            <Image style={styles.imgLogo} source={require('../../assets/logo-eatme.png')} />
            <HeaderText
                style={style}
                textBold={textBold}
                textLight={textLight} />
        </View>
    )
}

export default LogoAndText

const styles = StyleSheet.create({
    headerView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: sizeHeight(4),
        //marginBottom: sizeHeight(4),
        //backgroundColor: 'skyblue'
    },
    imgLogo: {
        width: sizeWidth(50),
        height: sizeHeight(8),
        resizeMode: 'contain',
        marginBottom: sizeHeight(5)
        //backgroundColor: 'skyblue',
    },
})
