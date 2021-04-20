import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import HeaderBar from '../../common/HeaderBar';
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size';
import { blackColor, grayColor, trueGreenColor } from '../../string/ColorTheme';
import StarRating from './StarRating';
import TipMoney from './TipMoney';
import Button from '../Login/Button';
import { getRiderById, sendReviewForByUserForId } from '../../Utils/api';
export default class RiderReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameRider: '',
            selectedRate: 0,
            selectedTip: 0,
            comment: ""
        };
    }

    onPressBack = () => {
        alert("Press back");
    };

    onSelectedRate = (index) => {
        this.setState({
            selectedRate: index
        });
    };
    onSelectedTip = (index) => {
        this.setState({
            selectedTip: index
        });
    };
    onChangeComment = (text) => {
        this.setState({
            comment: text
        });
    };

    sendReview = () => {
        const id = '6079678f2acd793445f939cd';
        const user = '12345';
        let { selectedRate, selectedTip, comment } = this.state;
        selectedRate = selectedRate + 1;
        selectedTip = selectedTip * 5;
        //console.log(selectedRate, selectedTip, comment);
        this.setState({ loading: true }, async () => {
            try {
                const response = await sendReviewForByUserForId(user, id, selectedRate, selectedTip, comment);
                if (response.ok) {
                    this.setState({
                        loading: false,
                    }, () => {
                        // console.log(response.result)
                        Alert.alert("Notification", "Review Succesfully");
                    });
                } else {
                    this.setState({
                        loading: false
                    }, () => {
                        // console.log(response);
                    });
                }
            } catch (error) {
                console.error(error);
            }
        });
    };

    getRiderInformation = () => {
        const id = '6079678f2acd793445f939cd';
        this.setState({ loading: true }, async () => {
            try {
                const riderInfo = await getRiderById(id);
                // console.log(riderInfo);
                if (riderInfo.ok) {
                    // console.log(riderInfo);
                    const result = riderInfo.result;
                    this.setState({
                        loading: false,
                        nameRider: result.name,
                        avatarRider: result.imageUrl
                    });
                } else {
                    this.setState({
                        loading: false
                    });
                }
            } catch (error) {
                console.error(error);
            }
        });
    };

    componentDidMount = () => {
        this.getRiderInformation();
    };

    render() {
        //console.log(sizeHeight(12.5));
        return (
            <View style={styles.container}>
                <HeaderBar
                    onPressLeftBtn={this.onPressBack}
                    title={'Rider Review'} />
                {!this.state.loading
                    ? <Image
                        style={styles.imgAvatar}
                        source={{ uri: this.state.avatarRider }} />
                    : <View style={styles.viewEmptyImg} />}

                <Text style={styles.textName}>
                    {this.state.nameRider}
                </Text>
                <Text style={styles.textDelivery}>
                    Delivery Man
                </Text>
                <View style={styles.viewStatus}>
                    <View style={styles.viewGreenPoint} />
                    <Text style={styles.textStatus}>
                        Order Delivered
                    </Text>
                </View>
                <Text style={styles.textRate}>
                    Please Rate Delivery Service
                </Text>
                <StarRating
                    rateSelected={this.state.selectedRate}
                    onPress={this.onSelectedRate}
                />
                <View style={styles.viewAddTip}>
                    <Text style={styles.textAddTip}>Add tips</Text>
                    <TipMoney
                        indexSelected={this.state.selectedTip}
                        onPress={this.onSelectedTip} />
                </View>
                <TextInput
                    value={this.state.comment}
                    onChangeText={(text) => this.onChangeComment(text)}
                    multiline={true}
                    placeholder={"Add comment"}
                    style={styles.textInputComment} />
                <Button
                    onPress={this.sendReview}
                    style={styles.button}
                    buttonSign={"Submit Review"} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    imgAvatar: {
        width: sizeHeight(11.8),
        height: sizeHeight(11.8),
        borderRadius: sizeWidth(4.2),
        marginTop: sizeHeight(3.94)
    },
    viewEmptyImg: {
        width: sizeHeight(11.8),
        height: sizeHeight(11.8),
        borderRadius: sizeWidth(4.2),
        marginTop: sizeHeight(3.94),
        backgroundColor: grayColor
    },
    textName: {
        color: blackColor,
        fontFamily: 'SVN-Gilroy-SemiBold',
        fontWeight: '600',
        fontSize: sizeFont(5.8),
        marginTop: sizeHeight(1.97)
    },
    textDelivery: {
        color: blackColor,
        fontFamily: 'SVN-Gilroy-Medium',
        fontWeight: '400',
        fontSize: sizeFont(3.73),
        marginTop: sizeHeight(0.49)
    },
    viewStatus: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: sizeHeight(1.97)
    },
    viewGreenPoint: {
        width: sizeWidth(2.13),
        height: sizeWidth(2.13),
        borderRadius: sizeWidth(1.06),
        marginRight: sizeWidth(2.13),
        backgroundColor: trueGreenColor
    },
    textStatus: {
        color: trueGreenColor,
        fontFamily: 'SVN-Gilroy-Medium',
        fontWeight: '500',
        fontSize: sizeFont(3.2),
        lineHeight: sizeHeight(1.64)
    },
    textRate: {
        color: blackColor,
        fontFamily: 'SVN-Gilroy-Medium',
        fontWeight: '500',
        fontSize: sizeFont(4.8),
        marginTop: sizeHeight(3.94)
        //lineHeight: sizeHeight(1.64)
    },
    viewAddTip: {
        width: sizeWidth(100),
        marginTop: sizeHeight(3.94),
        paddingHorizontal: sizeWidth(6.4),
        //backgroundColor: 'skyblue'
    },
    textAddTip: {
        color: blackColor,
        fontFamily: 'SVN-Gilroy-SemiBold',
        fontWeight: '600',
        fontSize: sizeFont(3.73),
    },
    textInputComment: {
        color: blackColor,
        fontFamily: 'SVN-Gilroy-Medium',
        fontWeight: '500',
        fontSize: sizeFont(3.2),
        //backgroundColor: 'skyblue',
        textAlignVertical: 'top',
        width: sizeWidth(87.2),
        height: sizeHeight(18.75),
        borderWidth: 1,
        borderColor: '#BBBDC1',
        borderRadius: sizeWidth(2.13),
        marginTop: sizeHeight(3.94),
        padding: sizeWidth(4.2),
    },
    button: {
        width: sizeWidth(87.2),
        height: sizeHeight(6.8),
        position: 'absolute',
        bottom: sizeHeight(3.94)
    }
});
