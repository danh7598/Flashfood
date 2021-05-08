import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import HeaderBar from '../../common/HeaderBar';
import FormComponent from '../LoginScreen/FormComponent';
import back from '../../assets/back.png';
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size';
import background_card from '../../assets/background_card.png';
import { orangeColor } from '../../string/ColorTheme';
import Button from '../LoginScreen/Button';
const AddNewCardScreen = ({ navigation }) => {
    const [cardNumber, setCardNumber] = useState("");
    const [cardName, setCardName] = useState("");
    const [expireDate, setExpireDate] = useState("");
    const [cvvNumber, setCvvNumber] = useState("");
    const [isRemembered, setIsRemembered] = useState(true);
    const onPressBack = () => {
        navigation.goBack();
    };
    const onChangeCardNumber = (text) => {
        if (text.length == 4 || text.length == 9 || text.length == 14) {
            text += ' ';
        }
        setCardNumber(text);

    };
    const onChangeExpireDate = (text) => {
        if (text.length == 2) {
            text += '/';
        }
        setExpireDate(text);
    };
    const onRememberCard = () => setIsRemembered((prevVal) => !prevVal);
    return (
        <View style={styles.container}>
            <HeaderBar
                rightBtn={true}
                title={'ADD NEW CARD'}
                leftBtnSource={back}
                onPressLeftBtn={onPressBack} />
            <ImageBackground
                imageStyle={styles.imgBackgroundCard}
                style={styles.backgroundCard}
                source={background_card}>
                <View style={styles.viewGroupNameCard}>
                    <Text style={styles.textName}>{cardName}</Text>
                    <Text style={styles.textNumber}>{cardNumber}</Text>
                </View>
                <Text style={styles.textExpireDate}>{expireDate}</Text>
            </ImageBackground>

            <FormComponent
                nameTextInput={'Card Number'}
                textInputProps={{ maxLength: 19 }}
                keyboardType={'numeric'}
                onChangeValue={onChangeCardNumber}
                valueInput={cardNumber}
                placeholder={'XXXX XXXX XXXX XXXX'}
            // borderColor={this.state.notificationEmail === 2 ? orangeColor : null}
            // notification={emailNotification[this.state.notificationEmail]}
            // buttonRightImage={this.state.notificationEmail === 2 ? cancel_icon
            //     : this.state.notificationEmail === 3 ? right_mark_icon
            //         : null}
            // tintColorRightImage={this.state.notificationEmail === 2 ? orangeColor
            //     : this.state.notificationEmail === 3 ? trueGreenColor
            //         : null}
            // buttonFunction={this.state.notificationEmail !== 2 ? this.clearText : null}
            />
            <FormComponent
                nameTextInput={'Cardholder Name'}
                keyboardType={'default'}
                onChangeValue={(text) => setCardName(text)}
                textInputProps={{ maxLength: 19, autoCapitalize: 'characters' }}
                valueInput={cardName}
                placeholder={'Enter Name'}
            // borderColor={this.state.notificationEmail === 2 ? orangeColor : null}
            // notification={emailNotification[this.state.notificationEmail]}
            // buttonRightImage={this.state.notificationEmail === 2 ? cancel_icon
            //     : this.state.notificationEmail === 3 ? right_mark_icon
            //         : null}
            // tintColorRightImage={this.state.notificationEmail === 2 ? orangeColor
            //     : this.state.notificationEmail === 3 ? trueGreenColor
            //         : null}
            // buttonFunction={this.state.notificationEmail !== 2 ? this.clearText : null}
            />
            <View style={styles.viewRowInput}>
                <FormComponent
                    nameTextInput={'Expire Date'}
                    keyboardType={'numeric'}
                    textInputProps={{ maxLength: 5 }}
                    styleTextInput={styles.inputRow}
                    style={styles.viewInputRow}
                    onChangeValue={onChangeExpireDate}
                    valueInput={expireDate}
                    placeholder={'MM/YY'}
                // borderColor={this.state.notificationEmail === 2 ? orangeColor : null}
                // notification={emailNotification[this.state.notificationEmail]}
                // buttonRightImage={this.state.notificationEmail === 2 ? cancel_icon
                //     : this.state.notificationEmail === 3 ? right_mark_icon
                //         : null}
                // tintColorRightImage={this.state.notificationEmail === 2 ? orangeColor
                //     : this.state.notificationEmail === 3 ? trueGreenColor
                //         : null}
                // buttonFunction={this.state.notificationEmail !== 2 ? this.clearText : null}
                />
                <FormComponent
                    nameTextInput={'CVV'}
                    keyboardType={'numeric'}
                    textInputProps={{ maxLength: 3 }}
                    styleTextInput={styles.inputRow}
                    style={styles.viewInputRow}
                    onChangeValue={(text) => setCvvNumber(text)}
                    valueInput={cvvNumber}
                    placeholder={'XXX'}
                // borderColor={this.state.notificationEmail === 2 ? orangeColor : null}
                // notification={emailNotification[this.state.notificationEmail]}
                // buttonRightImage={this.state.notificationEmail === 2 ? cancel_icon
                //     : this.state.notificationEmail === 3 ? right_mark_icon
                //         : null}
                // tintColorRightImage={this.state.notificationEmail === 2 ? orangeColor
                //     : this.state.notificationEmail === 3 ? trueGreenColor
                //         : null}
                // buttonFunction={this.state.notificationEmail !== 2 ? this.clearText : null}
                />
            </View>
            <TouchableOpacity
                onPress={onRememberCard}
                style={styles.btnRememberCard}>
                {isRemembered
                    ? <View style={styles.viewSelect}>
                        <View style={styles.pointSelect} />
                    </View>
                    : <View style={styles.viewNotSelected} />
                }
                <Text style={styles.textRemember}>Remember this card details</Text>
            </TouchableOpacity>
            <Button
                onPress={() => { }}
                style={styles.btnAddCard}
                buttonSign={"Add Card"}
            />
        </View>
    );
};

export default AddNewCardScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    backgroundCard: {
        borderRadius: sizeHeight(0.98),
        marginTop: sizeHeight(1.97),
        marginBottom: sizeHeight(3.91),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: sizeWidth(4.2),
        alignSelf: 'center',
        height: sizeHeight(23.39),
        width: sizeWidth(80),
    },
    imgBackgroundCard: {
        resizeMode: 'stretch'
    },
    viewGroupNameCard: {
        alignSelf: 'flex-end',
        marginBottom: sizeHeight(2.95)
    },
    textName: {
        fontSize: sizeFont(1.83),
        fontFamily: 'SVN-Gilroy-SemiBold',
        fontWeight: '600',
        color: 'white'
    },
    textNumber: {
        fontSize: sizeFont(1.5625),
        fontFamily: 'SVN-Gilroy-Medium',
        fontWeight: '500',
        color: 'white'
    },
    textExpireDate: {
        alignSelf: 'flex-end',
        marginBottom: sizeHeight(2.95),
        fontSize: sizeFont(1.5625),
        fontFamily: 'SVN-Gilroy-Medium',
        fontWeight: '500',
        color: 'white'
    },
    viewRowInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: sizeWidth(4)
    },
    viewInputRow: {
        marginHorizontal: 0,
        width: sizeWidth(43.9)
    },
    inputRow: {
        width: sizeWidth(35.9),
        // backgroundColor: 'skyblue'
    },
    btnRememberCard: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: sizeWidth(4),
        marginTop: sizeHeight(3.94)
    },
    viewSelect: {
        width: sizeWidth(4.2),
        height: sizeWidth(4.2),
        borderColor: orangeColor,
        // backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: sizeWidth(2.1),
        alignItems: 'center',
        justifyContent: 'center'
    },
    pointSelect: {
        width: sizeWidth(2.9),
        height: sizeWidth(2.9),
        borderRadius: sizeWidth(2.9) / 2,
        // alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: orangeColor,
    },
    viewNotSelected: {
        borderColor: '#DDDDDD',
        width: sizeWidth(4.2),
        height: sizeWidth(4.2),
        // backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: sizeWidth(2.1),
        alignItems: 'center',
        justifyContent: 'center'
    },
    textRemember: {
        color: '#898B9A',
        fontSize: sizeFont(1.83),
        fontFamily: 'SVN-Gilroy-Regular',
        fontWeight: '400',
        marginLeft: sizeWidth(4.2)

    },
    btnAddCard: {
        position: 'absolute',
        width: sizeWidth(92),
        bottom: sizeHeight(3.94)
    }
});
