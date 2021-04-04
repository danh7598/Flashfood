import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import HeaderBar from '../../common/HeaderBar'
import backImg from '../../assets/back.png'
import add_to_cart from '../../assets/add_to_cart.png'
import FoodDescription from './FoodDescription'
import vegetable_biryani from '../../assets/vegetable_biryani.png'
export default class FoodDetails extends Component {
    onPressLeftBtn = () => {
        alert('Press back')
    }
    render() {
        return (
            <View style={styles.container}>
                <HeaderBar
                    rightBtn={true}
                    title={'DETAILS'}
                    leftBtnSource={backImg}
                    rightBtnSource={add_to_cart}
                    backgroundColorRightBtn={'rgba(255, 108, 68, 0.2)'}
                    onPressLeftBtn={this.onPressLeftBtn}
                />
                <FoodDescription
                    textNameFood={'Vegetable Biryani'}
                    textDescriptionFood={'A popular spice and vegetables mixed favoured rice dish which is typical prepared by layering the biryani gravy and basmati rice in flat bottom vessel'}
                    imgFoodCenterSource={vegetable_biryani}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
