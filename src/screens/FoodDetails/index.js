import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import HeaderBar from '../../common/HeaderBar'
import backImg from '../../assets/back.png'
import add_to_cart from '../../assets/add_to_cart.png'
import FoodDescription from './FoodDescription'
import vegetable_biryani from '../../assets/vegetable_biryani.png'
import FoodStar from './FoodStar'
import { sizeHeight, sizeWidth } from '../../Utils/Size'
import ShippingDuration from './ShippingDuration'
import ShippingPrice from './ShippingPrice'
import SizeFood from './SizeFood'
import MiniShopDescription from './MiniShopDescription'
import logo_restaurant from '../../assets/logo_restaurant.png'
import QuantityControl from './QuantityControl'
import ButtonBuyNow from './ButtonBuyNow'

const sizeFood = [12, 14, 16, 18]
export default class FoodDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sizeSelected: 0,
            quantity: 0
        }
    }
    onPressLeftBtn = () => {
        alert('Press back')
    }

    // Hàm thay đổi lựa chọn size của đồ ăn
    // nhận một tham số là chỉ số được lựa chọn [0, 1, 2, 3]
    onSizeSelected = (index) => {
        this.setState({
            sizeSelected: index
        })
    }

    //Giảm số lượng đồ ăn
    onPressMinusQuantity = () => {
        if (this.state.quantity > 0) {
            this.setState({
                quantity: this.state.quantity - 1
            })
        }
    }

    //Tăng số lượng đồ ăn
    onPressPlusQuantity = () => {
        this.setState({
            quantity: this.state.quantity + 1
        })
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
                    onPressLeftBtn={this.onPressLeftBtn} />
                <FoodDescription
                    textNameFood={'Vegetable Biryani'}
                    textDescriptionFood={'A popular spice and vegetables mixed favoured rice dish which is typical prepared by layering the biryani gravy and basmati rice in flat bottom vessel'}
                    imgFoodCenterSource={vegetable_biryani} />
                <View style={styles.viewRating}>
                    <FoodStar rateNumber={4.5} />
                    <ShippingDuration textDuration={'30 Mins'} />
                    <ShippingPrice textPrice={"Free shipping"} />
                </View>
                <SizeFood
                    sizeArray={sizeFood}
                    onSelected={this.onSizeSelected}
                    selectedIndex={this.state.sizeSelected} />
                <MiniShopDescription
                    nameShop={'Totoya Food'}
                    distance={'1.2 Km'}
                    avatar={logo_restaurant}
                    rateNumber={4} />
                <View style={styles.viewFooterButton}>
                    <QuantityControl
                        style={{ backgroundColor: '#F5F5F8' }}
                        onPressMinus={this.onPressMinusQuantity}
                        onPressPlus={this.onPressPlusQuantity}
                        number={this.state.quantity} />
                    <ButtonBuyNow
                        textButton={"Buy Now"}
                        price={"$15.99"}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewRating: {
        paddingVertical: sizeHeight(2),
        //backgroundColor: 'skyblue',
        flexDirection: 'row',
        paddingHorizontal: sizeWidth(4),
    },
    viewMiniShop: {
        height: sizeHeight(10),
        borderTopWidth: 1,
        borderBottomWidth: 1,

        borderColor: 'rgba(137,139,154,0.1)'
    },
    viewFooterButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingHorizontal: sizeWidth(4),
        paddingBottom: sizeHeight(2),
    }
})
