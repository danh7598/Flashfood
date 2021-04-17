import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import PropTypes from 'prop-types';
import { sizeWidth, sizeHeight, sizeFont } from '../../Utils/Size';
import { grayColor } from '../../string/ColorTheme';
const FormComponent = ({
    nameTextInput,
    keyboardType,
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
    return (
        <View style={styles.formComponentView}>
            <View style={styles.viewNameFormAndNoti}>
                <Text style={styles.textNameForm}>{nameTextInput}</Text>
                {notification != null &&
                    <Text style={styles.textFormNoti}>{notification}</Text>}
            </View>
            <View style={[styles.viewTextInput, {
                borderColor: borderColor ? borderColor : 'transparent'
            }]}>
                <TextInput
                    autoCompleteType={'off'}
                    autoCorrect={false}
                    keyboardType={keyboardType}
                    secureTextEntry={secure}
                    placeholder={placeholder}
                    style={styles.textInput}
                    value={valueInput}
                    onChangeText={text => onChangeValue(text)}
                />
                {buttonRightImage &&
                    <TouchableOpacity
                        onPress={buttonFunction}>
                        <Image
                            style={[styles.imgRight, { tintColor: tintColorRightImage }]}
                            source={buttonRightImage}
                        />
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
};

FormComponent.propTypes = {
    nameTextInput: PropTypes.string.isRequired,
    valueInput: PropTypes.string.isRequired,
    onChangeValue: PropTypes.func.isRequired,
    keyboardType: PropTypes.string,
    placeholder: PropTypes.string,
    secure: PropTypes.bool,
    notification: PropTypes.string,
    buttonRightImage: PropTypes.node,
    buttonFunction: PropTypes.func,
    borderColor: PropTypes.string,
    tintColorRightImage: PropTypes.string
};

FormComponent.defaultProps = {
    keyboardType: 'default',
    placeholder: 'Change placeholder props',
    secure: false,
    borderColor: 'transparent',
    tintColorRightImage: '#111A2C'
};

export default FormComponent;

const styles = StyleSheet.create({
    formComponentView: {
        //backgroundColor: 'skyblue',
        //height: 72,
        marginHorizontal: sizeWidth(4),
        marginTop: sizeHeight(2)
    },
    viewNameFormAndNoti: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: sizeHeight(1),
    },
    textNameForm: {
        color: '#898B9A',
        fontSize: sizeFont(3.5),
        fontFamily: 'SVN-Gilroy-Medium',
    },
    textFormNoti: {
        fontSize: sizeFont(3.5),
        color: '#F96B44',
        fontWeight: '500',
        fontFamily: 'SVN-Gilroy-Regular',
    },
    viewTextInput: {
        height: sizeHeight(6.5),
        borderRadius: sizeWidth(2),
        borderWidth: 1,
        backgroundColor: grayColor,
        alignItems: 'center',
        paddingHorizontal: sizeWidth(4),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textInput: {
        fontSize: sizeFont(3.5),
        width: sizeWidth(75),
        fontWeight: '500',
        color: '#111A2C',
        fontFamily: 'SVN-Gilroy-Regular',
        //backgroundColor: 'cornsilk',
    },
    imgRight: {
        width: sizeWidth(4),
        height: sizeWidth(4),
    },
});
