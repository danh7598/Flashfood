import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import star from '../../assets/star.png'
import { yellowColor } from '../../string/ColorTheme'
import { sizeWidth } from '../../Utils/Size'
const convertStar = (number) => {
    let array = [];
    for (let i = 0; i < 5; i++) {
        if (i < number) {
            array.push(1)
        } else {
            array.push(0)
        }
    }
    return array
}
const FiveStarRate = ({ spaceSize, size, numberRate }) => {
    let starArray = convertStar(numberRate)
    return (
        <View style={styles.container(size, spaceSize)}>
            {starArray.map((item, index) => {
                if (item === 1) {
                    return (
                        <Image
                            key={index}
                            style={[styles.imgStar(size), {tintColor: yellowColor }]}
                            source={star} />
                    )
                } else {
                    return (
                        <Image
                            key={index}
                            style={[styles.imgStar(size), {
                                tintColor: yellowColor,
                                opacity: 0.4
                            }]}
                            source={star} />
                    )
                }
                
            })}
        </View>
    )
}

export default FiveStarRate

const styles = StyleSheet.create({
    container: (size, spaceSize) => ({
        //backgroundColor: 'skyblue',
        width: sizeWidth(size * 5 + spaceSize),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }),
    imgStar: (size) => ({
        width: sizeWidth(size),
        height: sizeWidth(size),
    })
})
