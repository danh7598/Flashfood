import React from 'react'
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import {sizeWidth, sizeHeight } from '../../Utils/Size';
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
    console.log(sizeHeight(6.5))
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
        marginHorizontal: 16,
        //backgroundColor: 'cornsilk',
        marginTop: 16,

    },
    viewNameFormAndNoti: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    textNameForm: {
        color: '#525C67',
        fontSize: 14,
    },
    textFormNoti: {
        fontSize: 14,
        color: '#F96B44',
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
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textInput: {
        fontSize: 14,
        width: 300,
        //fontFamily: ''
        //backgroundColor: 'cornsilk',
    },
    imgRight: {
        width: 16,
        height: 16,
    },
});

module.exports = FormComponent