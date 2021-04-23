import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import HeaderBar from '../../common/HeaderBar';
import backImg from '../../assets/back.png';
import add_to_cart from '../../assets/add_to_cart.png';
import FoodDescription from './FoodDescription';
import vegetable_biryani from '../../assets/vegetable_biryani.png';
import FoodStar from './FoodStar';
import { sizeHeight, sizeWidth } from '../../Utils/Size';
import ShippingDuration from './ShippingDuration';
import ShippingPrice from './ShippingPrice';
import SizeFood from './SizeFood';
import MiniShopDescription from './MiniShopDescription';
import logo_restaurant from '../../assets/logo_restaurant.png';
import QuantityControl from './QuantityControl';
import ButtonBuyNow from './ButtonBuyNow';
import { grayColor } from '../../string/ColorTheme';

const foodPrice = [
    {
        size: 12,
        price: 13.99
    },
    {
        size: 14,
        price: 15.99
    },
    {
        size: 16,
        price: 17.99
    },
    {
        size: 18,
        price: 19.99
    }
];
export default class FoodDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sizeSelected: -1,
            quantity: 1,
            currentPrice: 0
        };
    }
    onPressLeftBtn = () => {
        alert('Press back');
    };

    // Hàm thay đổi lựa chọn size của đồ ăn
    // nhận một tham số là chỉ số được lựa chọn [0, 1, 2, 3]
    // Và giá của món ăn, lưu vào trong state để chuẩn bị Buy now
    onSizeSelected = (index, price) => {
        //console.log(price)
        this.setState({
            sizeSelected: index,
            currentPrice: price
        });
    };

    //Giảm số lượng đồ ăn
    onPressMinusQuantity = () => {
        if (this.state.quantity > 1) {
            this.setState({
                quantity: --this.state.quantity
            });
        }
    };

    //Tăng số lượng đồ ăn
    onPressPlusQuantity = () => {
        this.setState({
            quantity: ++this.state.quantity
        });
    };


    componentDidMount() {
        this.interval = setInterval(
            () => this.setState((prevState) => ({ time_remain: prevState.timer - 1 })),
            1000
        );
    }

    componentDidUpdate() {
        if (this.state.timer === 1) {
            clearInterval(this.interval);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
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
                    <ShippingPrice textPrice={0} />
                </View>
                <SizeFood
                    sizeArray={foodPrice}
                    onSelected={this.onSizeSelected}
                    selectedIndex={this.state.sizeSelected} />
                <MiniShopDescription
                    nameShop={'Totoya Food'}
                    distance={'1.2 Km'}
                    avatar={logo_restaurant}
                    rateNumber={4} />
                <View style={styles.viewFooterButton}>
                    <QuantityControl
                        style={{ backgroundColor: grayColor }}
                        onPressMinus={this.onPressMinusQuantity}
                        onPressPlus={this.onPressPlusQuantity}
                        number={this.state.quantity} />
                    <ButtonBuyNow
                        textButton={"Buy Now"}
                        price={"$" + (this.state.currentPrice * this.state.quantity).toFixed(2)}
                    />
                </View>
            </View>
        );
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
        paddingBottom: sizeHeight(4),
    }
});
