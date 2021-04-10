import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import HeaderBar from '../../common/HeaderBar'
import three_lines from '../../assets/three_lines.png'
import face_woman from '../../assets/face_woman.jpeg'
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size'
import { dataCategory } from '../../string/FakeData'
import { blackColor, grayColor, orangeColor } from '../../string/ColorTheme'

const ItemCategory = ({onPress, sourceImage, textCategory, backgroundColor, textColor }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.itemCategoryView, { backgroundColor: backgroundColor }]}>
            <Image
                source={sourceImage}
                style={styles.imgCategory} />
            <Text style={[styles.textCategory], { color: textColor }}>
                {textCategory}
            </Text>
        </TouchableOpacity>
    )
}

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            indexCategory: 0
        }
    }

    onPressCategory = (index) => () => {
        this.setState({ indexCategory: index})
    }

    render() {
        console.log(this.state.indexCategory)
        return (
            <ScrollView style={styles.container}>
                <HeaderBar
                    title={'HOME'}
                    rightBtn
                    styleRightBtn={styles.imgHeaderBarRight}
                    rightBtnSource={face_woman}
                    leftBtnSource={three_lines} />
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.listCategory}>
                    {dataCategory.map((item, index) => {
                        return (
                            <ItemCategory
                                key={item.id}
                                onPress={this.onPressCategory(index)}
                                textCategory={item.title}
                                sourceImage={item.img}
                                backgroundColor={this.state.indexCategory === index ? orangeColor : grayColor}
                                textColor={this.state.indexCategory === index ? 'white' : blackColor}
                            />
                        )
                    })}
                </ScrollView>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    imgHeaderBarRight: {
        width: '100%',
        height: '100%',
        borderRadius: sizeWidth(2)
    },
    listCategory: {
        paddingHorizontal: sizeWidth(4),
        
    },
    itemCategoryView: {
        width: sizeWidth(35),
        height: sizeHeight(6),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: sizeWidth(3),
        marginRight: sizeWidth(4)
    },
    imgCategory: {
        width: sizeWidth(5),
        height: sizeWidth(5),
        marginRight: sizeWidth(2)
    },
    textCategory: {
        fontSize: sizeFont(4),
        fontFamily: 'SVN-Gilroy-Medium',
        fontWeight: '600'
    }
})
