import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import HeaderBar from '../../common/HeaderBar';
import avatarRider from '../../assets/avatarRider.png';
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size';
import { blackColor, trueGreenColor } from '../../string/ColorTheme';
import StarRating from './StarRating';
import TipMoney from './TipMoney';
export default class RiderReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameRider: 'William Adams',
            selectedRate: 3,
            selectedTip: 0
        };
    }

    onPressBack = () => {
        alert("Press back");
    };

    onSelectedRate = (index) => {
        this.setState({
            selectedRate: index
        })
    }
    onSelectedTip = (index) => {
        this.setState({
            selectedTip: index
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <HeaderBar
                    onPressLeftBtn={this.onPressBack}
                    title={'Rider Review'} />
                <Image
                    style={styles.imgAvatar}
                    source={avatarRider} />
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
                    <Text>Add tips</Text>
                    <TipMoney
                        indexSelected={this.state.selectedTip}
                        onPress={this.onSelectedTip}/>
                </View>
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
        width: sizeWidth(25.6),
        height: sizeWidth(25.6),
        borderRadius: sizeWidth(4.2),
        marginTop: sizeHeight(4.16)
    },
    textName: {
        color: blackColor,
        fontFamily: 'SVN-Gilroy-SemiBold',
        fontWeight: '600',
        fontSize: sizeFont(5.8),
        marginTop: sizeHeight(2.08)
    },
    textDelivery: {
        color: blackColor,
        fontFamily: 'SVN-Gilroy-Medium',
        fontWeight: '400',
        fontSize: sizeFont(3.73),
        marginTop: sizeHeight(0.9)
    },
    viewStatus: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: sizeHeight(2.08)
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
        marginTop: sizeHeight(4.16)
        //lineHeight: sizeHeight(1.64)
    },
    viewAddTip: {
        width: sizeWidth(100),
        marginTop: sizeHeight(6.5)
    }
});
