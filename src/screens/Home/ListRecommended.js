import React, { Component } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { blackColor, grayColor } from '../../string/ColorTheme'
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size'
import fire_calories from '../../assets/fire_calories.png'
import HeaderList from './HeaderList';

const ItemRecommended = ({ name, image, calories, price, description }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.imgMain}
                source={{uri: image}} />
            <View style={styles.viewDescription}>
                <View style={styles.viewCalories}>
                    <Image
                        style={styles.imgFire}
                        source={fire_calories} />
                    <Text style={styles.textCalories}>
                        {calories} Calories
                    </Text>
                </View>
                <View style={styles.viewText}>
                    <Text style={styles.textName}>{name}</Text>
                    <Text
                        numberOfLines={1}
                        style={styles.textDescription}>{description}</Text>
                    <Text style={styles.textPrice}>${price}</Text>
                </View>
            </View>
        </View>
    )
}

class ListRecommended extends Component {
    render() {
        return (
            <View style={styles.viewListRecommended}>
                <HeaderList title={"Recommended"} />
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.listRecommended}
                    data={this.props.data}
                    renderItem={({ item, index }) => (
                        <ItemRecommended
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            calories={item.calories}
                            image={item.imageUrl}/>
                    )}
                    keyExtractor={(item) => item.id.toString()} />
            </View>
        )
    }
}

export default ListRecommended

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: sizeWidth(80),
        height: sizeHeight(18),
        backgroundColor: grayColor,
        marginRight: sizeWidth(4),
        borderRadius: sizeWidth(3),
        justifyContent: 'space-between',
        paddingLeft: sizeWidth(8)
    },
    viewListRecommended: {
        // marginHorizontal: sizeWidth(4),
        width: sizeWidth(100),
        marginTop: sizeHeight(3),
        alignItems: 'center',
        //paddingLeft: sizeWidth(4)
        //backgroundColor: 'skyblue',
    },
    listRecommended: {
        marginTop: sizeHeight(2),
        paddingLeft: sizeWidth(4)
    },  
    imgMain: {
        width: sizeWidth(32),
        height: sizeHeight(12),
        resizeMode: 'contain',
        //backgroundColor: 'skyblue'
    },
    viewDescription: {
        height: '100%',
        paddingRight: sizeWidth(8),
        paddingTop: sizeHeight(2)
        //backgroundColor: 'skyblue'
    },
    viewText: {
        marginTop: sizeHeight(1),
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
        //backgroundColor: 'skyblue',
        alignSelf: 'flex-end'
        //alignItems: 'center',
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
})
