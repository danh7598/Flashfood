import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { blackColor, grayColor, orangeColor } from '../../string/ColorTheme';
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size';
import PropTypes from 'prop-types';
import { enableExpoCliLogging } from 'expo/build/logs/Logs';

const SizeItem = ({ size, backgroundColor, textColor, borderWidth, onItemSelected }) => {
    //Props onItemSelected được truyền vào onPress của TouchableOpacity
    //Khi nhấn vào nút Touchable, thì hàm xử lý ở parent là onSelected được gọi
    //onSelected(index) được truyền vào tham số index
    //Sau đó hàm onSizeSelected ở file index.js sẽ được gọi với tham số index
    //Và hàm sẽ setState() với giá trị index trên
    return (
        <TouchableOpacity
            onPress={onItemSelected}
            style={[styles.viewItem, {
                borderWidth: borderWidth, backgroundColor: backgroundColor
            }]}>
            <Text style={[styles.textSizeItem, { color: textColor }]}>{size}"</Text>
        </TouchableOpacity>
    );
};

SizeItem.propTypes = {
    backgroundColor: PropTypes.string,
    onItemSelected: PropTypes.func,
    textColor: PropTypes.string,
    borderWidth: PropTypes.number,
};
SizeItem.defaultProps = {
    textColor: '#BBBDC1',
    borderWidth: 1
};

const SizeFood = ({ message, sizeArray, selectedIndex, onSelected }) => {
    //Component SizeFood, bao gồm một tiêu đề là Size: 
    //và một list các ô hiển thị size ví dụ[12"]
    //Có 3 props là sizeArray: chứa mảng lưu các kích cỡ của đồ ăn
    //selectedIndex: chỉ số phần tử của mảng trên đang được lựa
    //onSelected: Hàm nhận khi nhấn vào một TouchableOpacity, thuộc SizeItem
    // console.log(message);
    return (
        <View style={styles.container}>
            <View style={styles.viewRowSize}>
                <Text style={styles.textSize}>Sizes:</Text>
                <View style={styles.viewListItem}>
                    {sizeArray.map((item, index) => {
                        return (
                            <SizeItem
                                //Muốn truyền tham số index vào hàm thay đổi selectedIndex của parent view,
                                //thì ta viết cấu trúc function, trong function thì gọi hàm trên (chính là props onSelected)
                                //và truyền tham số index vào
                                onItemSelected={() => {
                                    onSelected(index, item.price);
                                }}
                                textColor={selectedIndex === index ? 'white' : '#BBBDC1'}
                                backgroundColor={selectedIndex === index ? orangeColor : 'transparent'}
                                borderWidth={selectedIndex === index ? 0 : 1}
                                key={index.toString()}
                                size={item.size} />
                        );
                    })}
                </View>
            </View>
            {message != '' && <View style={styles.viewMessage}>
                <Text style={styles.textMessage}>{message}</Text>
            </View>}
        </View>
    );
};

export default SizeFood;

const styles = StyleSheet.create({
    container: {
        paddingTop: sizeHeight(1),
        paddingBottom: sizeHeight(2.5),
        // backgroundColor: 'tomato',
        paddingHorizontal: sizeWidth(4)
    },
    viewRowSize: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textSize: {
        color: blackColor,
        fontFamily: 'SVN-Gilroy-Bold',
        fontSize: sizeFont(1.83),
    },
    viewItem: {
        width: sizeWidth(12),
        height: sizeWidth(12),
        borderRadius: sizeWidth(3),
        borderColor: '#BBBDC1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewMessage: {
        // backgroundColor: 'skyblue',
        alignSelf: 'center',
        // marginBottom: sizeHeight(1.5)
        marginTop: sizeHeight(1.2)
    },
    textMessage: {
        fontSize: sizeFont(1.83),
        fontFamily: 'SVN-Gilroy-Medium',
        color: orangeColor
    },
    viewListItem: {
        flexDirection: 'row',
        marginLeft: sizeWidth(6),
        //backgroundColor: 'skyblue',
        width: sizeWidth(60),
        justifyContent: 'space-between'
    },
    textSizeItem: {
        fontFamily: 'SVN-Gilroy-Bold',
        fontSize: sizeFont(1.83),
    }
});
