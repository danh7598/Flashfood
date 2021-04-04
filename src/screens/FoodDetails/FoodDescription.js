import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size'
import fire from '../../assets/fire.png'
import heart from '../../assets/heart.png'
export default class FoodDescription extends Component {
    render() {
        // console.log(sizeHeight(25))
        return (
            <View style={styles.container}>
                <View style={styles.viewFoodImg}>
                    <View style={styles.viewCalories}>
                        <View style={{ height: '100%', flexDirection: 'row' }}>
                            <Image
                                style={styles.imgCalories}
                                source={fire} />
                            <Text style={styles.textCalories}>78 Calories</Text>
                        </View>

                        <Image
                            source={this.props.imgFoodCenterSource}
                            style={styles.imgFoodCenter} />
                    </View>
                    <TouchableOpacity style={styles.btnFavorite}>
                        <Image
                            style={styles.imgBtnFavorite}
                            source={heart} />
                    </TouchableOpacity>
                </View>
                <View style={styles.viewTextFoodDescription}>
                    <Text style={styles.textNameFood}>
                        {this.props.textNameFood}
                    </Text>
                    <Text
                        numberOfLines={3}
                        style={styles.textDescriptionFood}>
                        {this.props.textDescriptionFood}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: sizeHeight(45),
        //backgroundColor: 'skyblue',
        //marginTop: sizeHeight(1)
        //flexDirection: 'row',
        //justifyContent: 'center'
    },
    viewFoodImg: {
        marginHorizontal: sizeWidth(4),
        padding: sizeWidth(4),
        height: sizeHeight(28),
        backgroundColor: '#F5F5F8',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: sizeWidth(4),
    },
    viewCalories: {
        //height: sizeHeight(45),
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center'
        //backgroundColor: 'green'
    },
    textCalories: {
        fontSize: sizeFont(3),
        fontWeight: '500',
        fontFamily: 'SVN-Gilroy-Regular',
        color: '#757D85'
    },
    imgCalories: {
        width: sizeWidth(5),
        height: sizeWidth(5),
        marginRight: sizeWidth(1),
        resizeMode: 'contain',
        //backgroundColor: 'cornsilk',
    },
    btnFavorite: {
        //backgroundColor: 'cornsilk',
        height: '100%',
    },
    imgBtnFavorite: {
        width: sizeWidth(5),
        height: sizeWidth(5),
        // backgroundColor: ''
        resizeMode: 'contain'
    },
    imgFoodCenter: {
        width: sizeWidth(40),
        height: sizeWidth(43),
        resizeMode: 'contain',
        position: 'absolute',
        left: sizeWidth(22)
    },
    viewTextFoodDescription: {
        flex: 1,
        padding: sizeWidth(4),
        //marginTop: sizeHeight(1),
        //backgroundColor: 'green'
    },
    textNameFood: {
        fontFamily: 'SVN-Gilroy-Bold',
        fontWeight: '600',
        fontSize: sizeFont(6),
        color: '#111A2C'
    },
    textDescriptionFood: {
        color: '#525C67',
        fontFamily: 'SVN-Gilroy-Regular',
        fontSize: sizeFont(3.5),
        lineHeight: sizeHeight(2.5),
        marginTop: sizeHeight(1)
    }
})
