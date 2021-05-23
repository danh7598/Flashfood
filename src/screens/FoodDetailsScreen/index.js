import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import HeaderBar from '../../common/HeaderBar';
import backImg from '../../assets/back.png';
import add_to_cart from '../../assets/add_to_cart.png';
import FoodDescription from './FoodDescription';
import vegetable_biryani from '../../assets/vegetable_biryani.png';
import hamburger_popular from '../../assets/hamburger_popular.png';
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
import { connect } from 'react-redux';
import { actionAddFoodDetail } from '../../redux/FoodDetail/FoodDetailAction';
import { actionAddItemCart } from '../../redux/MyCart/MyCartAction';

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
class FoodDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sizeSelected: -1,
            quantity: 1,
            currentPrice: 0,
            sizeMessage: ''
        };

    }
    onPressLeftBtn = () => {
        this.props.navigation.goBack();
    };

    onPressGoToCart = () => {
        this.props.navigation.navigate('MyCart');
    };

    // Hàm thay đổi lựa chọn size của đồ ăn
    // nhận một tham số là chỉ số được lựa chọn [0, 1, 2, 3]
    // Và giá của món ăn, lưu vào trong state để chuẩn bị Buy now
    onSizeSelected = (index, price) => {
        //console.log(price)
        this.setState({
            sizeSelected: index,
            currentPrice: price,
            sizeMessage: ''
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

    onPressBuyNow = (item) => {
        // console.log("ABC");
        // console.log(item);
        // {
        //     name: "Chef's Burger",
        //     price: 15.99,
        //     size: '12',
        //     quantity: this.state.quantity,
        //     image: hamburger_popular
        // }
        if (this.state.sizeSelected == -1) {
            this.setState({
                sizeMessage: "Please select size!"
            });
            return;
        };
        this.props.addToCart({
            ...item,
            quantity: this.state.quantity,
            size: foodPrice[this.state.sizeSelected].size
        });
    };

    componentDidMount() {
        // this.interval = setInterval(
        //     () => this.setState((prevState) => ({ time_remain: prevState.timer - 1 })),
        //     1000
        // );
    }

    componentDidUpdate() {
        // if (this.state.timer === 1) {
        //     clearInterval(this.interval);
        // }
    }

    componentWillUnmount() {
        // clearInterval(this.interval);
    }

    render() {
        const itemFoodDetail = this.props.route.params;
        // console.log(itemFoodDetail);
        return (
            <View style={styles.container}>
                <HeaderBar
                    rightBtn={true}
                    title={'DETAILS'}
                    leftBtnSource={backImg}
                    rightBtnSource={add_to_cart}
                    backgroundColorRightBtn={'rgba(255, 108, 68, 0.2)'}
                    onPressLeftBtn={this.onPressLeftBtn}
                    onPressRightBtn={this.onPressGoToCart}
                />
                <FoodDescription
                    calories={itemFoodDetail.calories}
                    textNameFood={itemFoodDetail.name}
                    textDescriptionFood={'A popular spice and vegetables mixed favoured rice dish which is typical prepared by layering the biryani gravy and basmati rice in flat bottom vessel'}
                    imgFoodCenterSource={itemFoodDetail.imageUrl} />
                <View style={styles.viewRating}>
                    <FoodStar rateNumber={4.5} />
                    <ShippingDuration textDuration={'30 Mins'} />
                    <ShippingPrice textPrice={0} />
                </View>
                <SizeFood
                    message={this.state.sizeMessage}
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
                        onPress={() => this.onPressBuyNow(itemFoodDetail)}
                        textButton={"Buy Now"}
                        price={"$" + (this.state.currentPrice * this.state.quantity).toFixed(2)}
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataCart: state.myCartReducer.dataCart
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (foodItem) => {
            dispatch(actionAddItemCart(foodItem));
        },

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodDetailsScreen);

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
