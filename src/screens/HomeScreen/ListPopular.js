import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { blackColor, grayColor, orangeColor } from '../../string/ColorTheme';
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size';
import heart from '../../assets/heart.png';
import hamburger_popular from '../../assets/hamburger_popular.png';
import fire_calories from '../../assets/fire_calories.png';
import PropTypes from 'prop-types';
import HeaderList from './HeaderList';

const ItemPopular = ({ calories, favoured, image, name, description, price, changeFavorite, onPress }) => {
    //console.log(sizeHeight(25))
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}>
            <View style={styles.viewTopLine}>
                <View style={styles.viewCalories}>
                    <Image
                        source={fire_calories}
                        style={styles.imgTop} />
                    <Text style={styles.textCalories}>
                        {calories} Calories
                    </Text>
                </View>
                <TouchableOpacity onPress={changeFavorite}>
                    <Image
                        style={[styles.imgTop,
                        { tintColor: favoured ? orangeColor : '#898B9A' }]}
                        source={heart} />
                </TouchableOpacity>
            </View>
            <Image
                source={{ uri: image }}
                style={styles.imgCenter} />
            <View style={styles.viewText}>
                <Text style={styles.textName}>{name}</Text>
                <Text
                    numberOfLines={1}
                    style={styles.textDescription}>{description}</Text>
                <Text style={styles.textPrice}>${price}</Text>
            </View>
        </TouchableOpacity>
    );
};

ItemPopular.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    changeFavorite: PropTypes.func,
    favoured: PropTypes.bool,
};
ItemPopular.defaultProps = {
    favoured: false,
};

class ListPopular extends Component {
    onPressItem = () => {
        this.props.navigation.navigate('FoodDetails');
    };
    render() {
        // console.log(this.props.data)
        return (
            <View style={styles.viewListPopular}>
                <HeaderList title={"Popular Near You"} />
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.listPopular}
                    data={this.props.data}
                    renderItem={({ item, index }) => (
                        <ItemPopular
                            name={item.name}
                            onPress={this.onPressItem}
                            description={item.description}
                            price={item.price}
                            calories={item.calories}
                            image={item.imageUrl}
                            favoured={item.favoured}
                        // changeFavorite={() => { API không hỗ trợ
                        //     dataPopular[index].favoured
                        //         ? dataPopular[index].favoured = false
                        //         : dataPopular[index].favoured = true;
                        //     this.forceUpdate(); //Không có state thay đổi nên force rerender
                        //     //console.log(dataPopular[index].favoured)
                        //     //
                        // }}
                        />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        );
    }
}
export default ListPopular;

const styles = StyleSheet.create({
    container: {
        backgroundColor: grayColor,
        width: sizeWidth(38),
        height: sizeHeight(28),
        borderRadius: sizeWidth(3),
        paddingHorizontal: sizeWidth(4),
        paddingVertical: sizeHeight(1.5),
        alignItems: 'center',
        marginRight: sizeWidth(4)
    },
    viewListPopular: {
        //marginHorizontal: sizeWidth(4),
        width: sizeWidth(100),
        marginTop: sizeHeight(3),
        alignItems: 'center',
        //backgroundColor: 'skyblue'
    },
    listPopular: {
        marginTop: sizeHeight(2),
        paddingLeft: sizeWidth(4)
    },
    viewTopLine: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'skyblue'
    },
    viewCalories: {
        flexDirection: 'row',
        //alignItems: 'center',
    },
    imgTop: {
        width: sizeWidth(4),
        height: sizeWidth(4),
        resizeMode: 'contain',
    },
    textCalories: {
        marginLeft: sizeWidth(1),
        fontSize: sizeFont(1.30),
        fontFamily: 'SVN-Gilroy-Regular',
        fontWeight: '500',
        color: '#757D85'
    },
    imgCenter: {
        resizeMode: 'contain',
        width: sizeWidth(32),
        height: sizeHeight(13),
        marginTop: sizeHeight(1),
        //backgroundColor: 'skyblue'
    },
    viewText: {
        alignItems: 'center',
        marginTop: sizeHeight(1)
    },
    textName: {
        fontSize: sizeFont(1.82),
        fontFamily: 'SVN-Gilroy-Bold',
        fontWeight: '600',
        color: blackColor,
        lineHeight: sizeHeight(2.5)
    },
    textDescription: {
        fontSize: sizeFont(1.30),
        fontFamily: 'SVN-Gilroy-Medium',
        fontWeight: '500',
        color: '#757D85',
        lineHeight: sizeHeight(2.5)
    },
    textPrice: {
        fontSize: sizeFont(2.08),
        fontFamily: 'SVN-Gilroy-Bold',
        fontWeight: '700',
        color: blackColor,
        lineHeight: sizeHeight(3)
    }
});
