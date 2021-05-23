import React, { Component, createRef } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Image, TextInput } from 'react-native';

import HeaderBar from '../../common/HeaderBar';
import backImg from '../../assets/back.png';
import add_to_cart from '../../assets/add_to_cart.png';
import ItemCart from './ItemCart';
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size';
import TotalAndOrder from './TotalAndOrder';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import deleteImage from '../../assets/delete.png';
import { orangeColor } from '../../string/ColorTheme';
import { actionIncreaseItemCart, actionDecreaseItemCart, actionRemoveItemCart } from '../../redux/MyCart/MyCartAction';
import { connect } from 'react-redux';
import { dataCart } from '../../string/FakeData';

const RightActions = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.rightAction}>
                <Image
                    style={styles.imageDelete}
                    source={deleteImage} />
            </View>
        </TouchableOpacity>
    );
};


class MyCartScreen extends Component {
    constructor(props) {
        super(props);

        this.swipeable = createRef();

    }

    onPressLeftBtn = () => {
        this.props.navigation.goBack();
    };

    onPressPlusItem = (index) => {
        this.props.onIncreaseItem(index);
    };

    onPressMinusItem = (index) => {
        this.props.onDecreaseItem(index);
    };

    onRemoveItem = (index) => {
        this.props.onRemoveItem(index);
    };
    render() {
        let row = [];
        let subtotal = 0;
        this.props.dataCart.forEach((item) => {
            subtotal += item.price * item.quantity;
        });
        return (
            <View style={styles.container}>
                <HeaderBar
                    rightBtn={true}
                    title={'MY CART'}
                    leftBtnSource={backImg}
                    onPressLeftBtn={this.onPressLeftBtn} />

                {this.props.dataCart?.length != 0 ? <>
                    <FlatList
                        data={this.props.dataCart}
                        style={styles.viewFlatlist}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={() => <View style={styles.separator} />}
                        ListFooterComponent={<View style={styles.footerComponent} />}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            // console.log("ITEM CART ", item);
                            return (
                                <Swipeable
                                    ref={ref => row[index] = ref}
                                    renderRightActions={() => <RightActions onPress={() => {
                                        this.onRemoveItem(index);
                                        row[index].close();

                                    }} />}>
                                    <ItemCart
                                        onPressPlus={() => this.onPressPlusItem(index)}
                                        onPressMinus={() => this.onPressMinusItem(index)}
                                        {...item}
                                        // name={item.name}
                                        // price={item.price}
                                        image={item.imageUrl}
                                    // quantity={item.quantity}
                                    />
                                </Swipeable>
                            );
                        }}
                    />
                    <TotalAndOrder
                        subtotal={subtotal}
                        fee={5} />
                </>
                    : <View style={styles.viewEmptyCart}>
                        <Image
                            style={styles.emptyCartImage}
                            source={require('../../assets/empty_cart.png')} />
                        <Text style={styles.textEmptyCart}>Your cart is empty!!!</Text>
                    </View>
                }
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
        onIncreaseItem: (itemIndex) => {
            dispatch(actionIncreaseItemCart(itemIndex));
        },
        onDecreaseItem: (itemIndex) => {
            dispatch(actionDecreaseItemCart(itemIndex));
        },
        onRemoveItem: (itemIndex) => {
            dispatch(actionRemoveItemCart(itemIndex));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCartScreen);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'tomato'
    },
    viewFlatlist: {
        flexGrow: 0,
        //borderWidth: 0.5,
        //paddingVertical: sizeHeight(2),
        //justifyContent: 'space-between',
        paddingTop: sizeHeight(3.94),
        paddingHorizontal: sizeWidth(4),
        // marginTop: sizeHeight(1)
        //height: sizeHeight(60),
        //backgroundColor: 'skyblue'
    },
    separator: {
        height: sizeHeight(1.97)
    },
    footerComponent: {
        height: sizeHeight(3.94)

    },
    rightAction: {
        justifyContent: 'center',
        width: sizeWidth(19.2),
        height: sizeHeight(9.85),
        // flex: 1,
        borderTopRightRadius: sizeWidth(2.13),
        borderBottomRightRadius: sizeWidth(2.13),
        alignItems: 'center',
        backgroundColor: orangeColor
    },
    imageDelete: {
        width: sizeWidth(6.4),
        height: sizeWidth(6.4),
    },
    viewEmptyCart: {
        alignItems: 'center',
        marginTop: sizeHeight(10)
    },
    emptyCartImage: {
        width: sizeWidth(40),
        height: sizeWidth(40),
        tintColor: orangeColor
    },
    textEmptyCart: {
        marginTop: sizeHeight(8),
        fontFamily: 'SVN-Gilroy-SemiBold',
        color: orangeColor,
        fontSize: sizeFont(3.2)
    },
});
