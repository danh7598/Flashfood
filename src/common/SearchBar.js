import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { grayColor } from '../string/ColorTheme'
import { sizeFont, sizeHeight, sizeWidth } from '../Utils/Size'
import search_icon from '../assets/search_icon.png'
import filter_icon from '../assets/filter_icon.png'
import PropTypes from 'prop-types'
const SearchBar = ({ style, onPressFilter, value, onChangeValue }) => {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.viewInputAndIcon}>
                <Image
                    source={search_icon}
                    style={styles.imgLeft} />
                <TextInput
                    value={value}
                    returnKeyType={'search'}
                    onChangeText={onChangeValue}
                    placeholder={'Search food'}
                    style={styles.textInput} />
            </View>
            <TouchableOpacity
                onPress={onPressFilter}
            >
                <Image
                    source={filter_icon}
                    style={styles.imgRight} />
            </TouchableOpacity>

        </View>
    )
}

SearchBar.propTypes = {
    onPressFilter: PropTypes.func.isRequired,
    onChangeValue: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    style: PropTypes.object
}
export default SearchBar

const styles = StyleSheet.create({
    container: {
        backgroundColor: grayColor,
        width: sizeWidth(92),
        height: sizeHeight(7),
        flexDirection: 'row',
        // marginBottom: sizeHeight(5),
        // marginTop: sizeHeight(5),
        borderRadius: sizeWidth(2),
        paddingHorizontal: sizeWidth(4),
        paddingVertical: sizeHeight(1),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    viewInputAndIcon: {
        //backgroundColor: 'skyblue',
        flexDirection: 'row',
        alignItems: 'center'
    },
    textInput: {
        fontSize: sizeFont(3.5),
        fontFamily: 'SVN-Gilroy-Medium',
        width: sizeWidth(70),
        marginLeft: sizeWidth(3)
    },
    imgLeft: {
        width: sizeWidth(4),
        height: sizeWidth(4)
    },
    imgRight: {
        width: sizeWidth(4),
        height: sizeWidth(4)
    }
})
