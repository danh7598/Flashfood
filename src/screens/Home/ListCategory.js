import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size';
import { dataCategory } from '../../string/FakeData';
import { blackColor, grayColor, orangeColor } from '../../string/ColorTheme';

const ItemCategory = ({ onPress, sourceImage, textCategory, backgroundColor, textColor }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.itemCategoryView, { backgroundColor: backgroundColor }]}>
            <Image
                source={sourceImage}
                style={styles.imgCategory} />
            <Text style={[styles.textCategory, { color: textColor }]}>
                {textCategory}
            </Text>
        </TouchableOpacity>
    );
};

ItemCategory.propTypes = {
    onPress: PropTypes.func.isRequired,
    sourceImage: PropTypes.node.isRequired,
    textCategory: PropTypes.string.isRequired,
};

class ListCategory extends Component {
    render() {
        return (
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.listCategory}
            >
                {dataCategory.map((item, index) => {
                    return (
                        <ItemCategory
                            key={item.id}
                            onPress={this.props.onPressCategory(index)}
                            textCategory={item.title}
                            sourceImage={item.img}
                            backgroundColor={this.props.indexCategory === index ? orangeColor : grayColor}
                            textColor={this.props.indexCategory === index ? 'white' : blackColor}
                        />
                    );
                })}
            </ScrollView>
        );
    }
}

export default ListCategory;

const styles = StyleSheet.create({
    itemCategoryView: {
        width: sizeWidth(35),
        height: sizeHeight(7),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: sizeWidth(3),
        marginRight: sizeWidth(4),
        //elevation: 5
    },
    listCategory: {
        paddingLeft: sizeWidth(4),
        marginTop: sizeHeight(3),
        // width: sizeWidth(110)
    },
    imgCategory: {
        width: sizeWidth(5),
        height: sizeWidth(5),
        marginRight: sizeWidth(2),
        resizeMode: 'contain'
    },
    textCategory: {
        fontSize: sizeFont(3.5),
        fontFamily: 'SVN-Gilroy-SemiBold',
        fontWeight: '600'
    },
});
