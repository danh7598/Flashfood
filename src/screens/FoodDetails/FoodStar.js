import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import star from '../../assets/star.png';
import { orangeColor } from '../../string/ColorTheme';
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size';
import PropTypes from 'prop-types'

const FoodStar = ({ rateNumber }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.imgStar}
                source={star} />
            <Text style={styles.textRate}>
                {rateNumber <= 5 && rateNumber >= 0
                ? rateNumber : 'error'}
            </Text>
        </View>
    )
}

FoodStar.propTypes = {
    rateNumber: PropTypes.number.isRequired,
}

export default FoodStar

const styles = StyleSheet.create({
    container: {
        width: sizeWidth(16),
        paddingHorizontal: sizeWidth(2.5),
        height: sizeHeight(4),
        borderRadius: sizeWidth(2.5),
        backgroundColor: orangeColor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imgStar: {
        width: sizeWidth(4),
        height: sizeWidth(4)
    },
    textRate: {
        color: 'white',
        fontFamily: 'SVN-Gilroy-Medium',
        fontSize: sizeFont(3.5),
        //backgroundColor: 'skyblue'
    }
})
