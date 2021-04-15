import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import HeaderBar from '../../common/HeaderBar';
import backImg from '../../assets/back.png';
import add_to_cart from '../../assets/add_to_cart.png';
import { dataCart, dataPopular } from '../../string/FakeData';
import ItemCart from './ItemCart';
import { sizeHeight, sizeWidth } from '../../Utils/Size';
import TotalAndOrder from './TotalAndOrder';
export default class MyCart extends Component {

    onPressLeftBtn = () => {
        alert('Press Back');
    };

    render() {

        return (
            <View style={styles.container}>
                <HeaderBar
                    rightBtn={true}
                    title={'MY CART'}
                    leftBtnSource={backImg}
                    rightBtnSource={add_to_cart}
                    backgroundColorRightBtn={'rgba(255, 108, 68, 0.2)'}
                    onPressLeftBtn={this.onPressLeftBtn} />
                <FlatList
                    data={dataCart}
                    style={styles.viewFlatlist}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <ItemCart
                                onPressPlus={() => {
                                    ++dataCart[index].quantity
                                    this.forceUpdate()
                                }}
                                onPressMinus={() => {
                                    --dataCart[index].quantity;
                                    this.forceUpdate();
                                }}
                                name={item.name}
                                price={item.price}
                                image={item.image}
                                quantity={item.quantity}/>
                        )
                    }}
                />
                <TotalAndOrder
                    subtotal={36.55}
                    fee={0}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'tomato'
    },
    viewFlatlist: {
        flexGrow: 0,
        //borderWidth: 0.5,
        //paddingVertical: sizeHeight(2),
        //justifyContent: 'space-between',
        paddingHorizontal: sizeWidth(4),
        
        //height: sizeHeight(60),
        //backgroundColor: 'skyblue'
    }
});
