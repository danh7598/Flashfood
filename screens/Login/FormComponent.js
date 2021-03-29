import React from 'react'
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { sizeWidth, sizeHeight, sizeFont } from '../../Utils/Size';
const FormComponent = ({
    name,
    kind,
    placeholder,
    secure,
    valueInput,
    onChangeValue,
    notification,
    buttonRightImage,
    buttonFunction,
    borderColor,
    tintColorRightImage
}) => {
    //console.log(sizeHeight(6.5))
    return (
        <View style={styles.formComponentView}>
            <View style={styles.viewNameFormAndNoti}>
                <Text style={styles.textNameForm}>{name}</Text>
                {notification
                    ? <Text style={styles.textFormNoti}>{notification}</Text>
                    : null}
            </View>
            <View style={[styles.viewTextInput, {
                borderColor: borderColor ? borderColor : 'transparent',
                borderWidth: 1
            }]}>
                <TextInput
                    keyboardType={kind}
                    secureTextEntry={secure}
                    placeholder={placeholder}
                    style={styles.textInput}
                    value={valueInput}
                    onChangeText={text => onChangeValue(text)}
                />
                {buttonRightImage
                    ? <TouchableOpacity
                        onPress={buttonFunction}>
                        <Image
                            style={[styles.imgRight, { tintColor: tintColorRightImage }]}
                            source={buttonRightImage}
                        />
                    </TouchableOpacity>
                    : null
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formComponentView: {
        //height: 72,
        marginHorizontal: sizeWidth(4),
        //backgroundColor: 'cornsilk',
        marginTop: sizeWidth(4),

    },
    viewNameFormAndNoti: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: sizeWidth(2),
    },
    textNameForm: {
        color: '#525C67',
        fontSize: sizeFont(3.5),
        fontFamily: 'SVN-Gilroy-Medium',
    },
    textFormNoti: {
        fontSize: sizeFont(3.5),
        color: '#F96B44',
        fontFamily: 'SVN-Gilroy-Medium',
    },
    viewTextInput: {
        //borderWidth: 1,
        //borderColor: '#F96B44',
        //height: 48,
        height: sizeHeight(6.5),
        borderRadius: 10,
        backgroundColor: '#F5F5F8',
        //alignItems: 'center',
        alignItems: 'center',
        paddingHorizontal: sizeWidth(4),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textInput: {
        fontSize: sizeFont(4),
        width: sizeWidth(80),
        fontWeight: '600',
        color: '#111A2C',
        fontFamily: 'SVN-Gilroy-Medium',
        //backgroundColor: 'cornsilk',
    },
    imgRight: {
        width: sizeWidth(4),
        height: sizeWidth(4),
    },
});

module.exports = FormComponent