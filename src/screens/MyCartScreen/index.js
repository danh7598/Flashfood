import React, { Component, createRef } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Image, TextInput } from 'react-native';
import HeaderBar from '../../common/HeaderBar';
import backImg from '../../assets/back.png';
import add_to_cart from '../../assets/add_to_cart.png';
import { dataCart, dataPopular } from '../../string/FakeData';
import ItemCart from './ItemCart';
import { sizeHeight, sizeWidth } from '../../Utils/Size';
import TotalAndOrder from './TotalAndOrder';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import deleteImage from '../../assets/delete.png';
import { orangeColor } from '../../string/ColorTheme';


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


export default class MyCartScreen extends Component {
    constructor(props) {
        super(props);

        this.swipeable = createRef();
    }

    onPressLeftBtn = () => {
        this.props.navigation.navigate('Home');
    };

    render() {
        let row = [];

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
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    ListFooterComponent={<View style={styles.footerComponent} />}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <Swipeable
                                ref={ref => row[index] = ref}
                                renderRightActions={() => <RightActions onPress={() => {
                                    dataCart.splice(index, 1);
                                    this.forceUpdate();
                                    row[index].close();

                                }} />}>
                                <ItemCart
                                    onPressPlus={() => {
                                        ++dataCart[index].quantity;
                                        this.forceUpdate();
                                    }}
                                    onPressMinus={() => {
                                        --dataCart[index].quantity;
                                        this.forceUpdate();
                                    }}
                                    {...item}
                                // name={item.name}
                                // price={item.price}
                                // image={item.image}
                                // quantity={item.quantity}
                                />
                            </Swipeable>
                        );
                    }}
                />
                <TotalAndOrder
                    subtotal={36.55}
                    fee={0} />
            </View>
        );
    }
}

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
    }
});
