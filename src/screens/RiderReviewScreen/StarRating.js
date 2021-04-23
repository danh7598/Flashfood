import React from 'react';
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import star from '../../assets/star.png';
import { grayColor } from '../../string/ColorTheme';
import { sizeHeight, sizeWidth } from '../../Utils/Size';
const arrayStar = [1, 2, 3, 4, 5];

const StarRating = ({ onPress, rateSelected }) => {
    // console.log(onPress.toString())
    return (
        <View style={styles.container}>
            {arrayStar.map((item, index) => {
                return (
                    <TouchableWithoutFeedback
                        onPress={() => onPress(index)}
                        key={index.toString()}>
                        <Image
                            style={[styles.imgStar,
                            {
                                tintColor: index <= rateSelected ? '#FFA133' : grayColor
                            }]}
                            source={star} />
                    </TouchableWithoutFeedback>
                );
            })}
        </View>
    );
};

export default StarRating;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: sizeHeight(2.08),
        width: sizeWidth(100),
        paddingHorizontal: sizeWidth(20.8),
        //backgroundColor: 'skyblue'
    },
    imgStar: {
        width: sizeWidth(7.46),
        height: sizeWidth(7.46),

        marginRight: sizeWidth(5.33)
    }
});
