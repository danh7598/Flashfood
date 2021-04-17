import React, { Component } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { blackColor, grayColor, orangeColor } from '../../string/ColorTheme';
import { dataPopular } from '../../string/FakeData';
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size';
import fire_calories from '../../assets/fire_calories.png';
const menuArray = ['Featured', 'Nearby you', 'Popular', 'Newest', 'Trending'];
const ItemMenu = ({ image, name, description, calories, price }) => {
    return (
        <TouchableOpacity style={styles.itemMenu}>
            <Image
                source={image}
                style={styles.itemMenuImage} />
            <View style={styles.viewText}>
                <Text style={styles.textName}>{name}</Text>
                <Text style={styles.textDescription}>{description}</Text>
                <Text style={styles.textPrice}>${price}</Text>
            </View>
            <View style={styles.viewCalories}>
                <Image
                    style={styles.imgFire}
                    source={fire_calories} />
                <Text style={styles.textCalories}>
                    {calories} Calories
                    </Text>
            </View>

        </TouchableOpacity>
    );
};
const MenuBar = ({ itemSelected, onSelected }) => {
    return (
        <ScrollView
            horizontal
            contentContainerStyle={styles.viewMenu}
            showsHorizontalScrollIndicator={false}
        >
            {menuArray.map((item, index) => {
                // console.log(onSelected.toString())
                // console.log(index)
                return (
                    <TouchableOpacity onPress={onSelected(index)}>
                        <Text
                            style={[styles.textMenu, { color: itemSelected === index ? orangeColor : blackColor }]}
                            key={index.toString()}>
                            {item}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </ScrollView>
    );
};

class ListMenu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MenuBar
                    onSelected={this.props.onSelected}
                    itemSelected={this.props.itemSelected} />
                {dataPopular.map((item, index) => {
                    return (
                        <ItemMenu
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            calories={item.calories}
                            image={item.image}
                            key={item.id.toString()} />
                    );
                })}
                {/* <FlatList
                    data={dataPopular}
                    renderItem={({ item, index }) => {
                        return (
                            <ItemMenu />
                        )
                    }}
                /> */}
            </View>
        );
    }
}
export default ListMenu;

const styles = StyleSheet.create({
    container: {
        marginTop: sizeHeight(3),
        //paddingHorizontal: sizeWidth(4),
        paddingHorizontal: sizeWidth(4)
        //justifyContent: 'space-between'
    },
    viewMenu: {
        width: sizeWidth(100),
        //backgroundColor: 'skyblue',
        //paddingHorizontal: sizeWidth(4),
        justifyContent: 'space-between',
        marginBottom: sizeHeight(2)
    },
    textMenu: {
        fontSize: sizeFont(3.5),
        fontFamily: 'SVN-Gilroy-Bold',
        //marginRight: sizeWidth(8)
    },
    itemMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: grayColor,
        width: sizeWidth(92),
        height: sizeHeight(12),
        marginBottom: sizeHeight(2),
        borderRadius: sizeWidth(3),
    },
    itemMenuImage: {
        width: sizeWidth(20),
        height: sizeHeight(9),
        //backgroundColor: 'skyblue',
        justifyContent: 'space-between',
        resizeMode: 'contain',
        marginLeft: sizeWidth(6)
    },
    viewText: {
        //marginTop: sizeHeight(1),
        width: sizeWidth(35),
        //backgroundColor: 'skyblue',
        paddingLeft: sizeWidth(4)
    },
    textName: {
        fontSize: sizeFont(3.5),
        fontFamily: 'SVN-Gilroy-Bold',
        fontWeight: '600',
        color: blackColor,
        lineHeight: sizeHeight(2.5)
    },
    textDescription: {
        fontSize: sizeFont(2.5),
        fontFamily: 'SVN-Gilroy-Medium',
        fontWeight: '500',
        color: '#757D85',
        lineHeight: sizeHeight(2.5)
    },
    textPrice: {
        fontSize: sizeFont(4),
        fontFamily: 'SVN-Gilroy-Bold',
        fontWeight: '700',
        color: blackColor,
        lineHeight: sizeHeight(3)
    },
    viewCalories: {
        flexDirection: 'row',
        //backgroundColor: 'tomato',
        padding: sizeWidth(4),
        flex: 1,
        height: "100%",
        alignItems: 'flex-start',
        justifyContent: 'flex-end'
        // alignSelf: 'flex-start'
        //alignItems: 'center',
        //position: 'absolute',
        //right: sizeWidth()
    },
    imgFire: {
        width: sizeWidth(4),
        height: sizeWidth(4),
        resizeMode: 'contain',
    },
    textCalories: {
        marginLeft: sizeWidth(1),
        fontSize: sizeFont(2.5),
        fontFamily: 'SVN-Gilroy-Regular',
        fontWeight: '500',
        color: '#757D85'
    },
});
