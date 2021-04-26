import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import HeaderBar from '../../common/HeaderBar';
import back from '../../assets/back.png';
import face_woman from '../../assets/face_woman.jpeg';
import { responsiveFontSize, responsiveHeight, responsiveWidth, } from 'react-native-responsive-dimensions';
import Button from '../LoginScreen/Button';
import { orangeColor } from '../../string/ColorTheme';
import ItemCoupon from './ItemCoupon';
import burger_king_logo from '../../assets/burger-king-logo.png';
import ListCoupon from './ListCoupon';
export default class MyCouponScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tabSelected: 0,
            loading: true,
        };
    }

    onPressAvailableTab = () => {
        this.setState({ tabSelected: 0 });
    };

    onPressUseTab = () => {
        this.setState({ tabSelected: 1 });
    };

    onPressBack = () => {
        this.props.navigation.goBack();
    };
    render() {
        return (
            <View style={styles.container}>
                <HeaderBar
                    title={'MY COUPON'}
                    rightBtn
                    onPressLeftBtn={this.onPressBack}
                    styleRightBtn={styles.imgHeaderBarRight}
                    rightBtnSource={face_woman}
                    leftBtnSource={back} />
                <View style={styles.viewButtonTab}>
                    <Button
                        onPress={this.onPressAvailableTab}
                        textStyle={[styles.textButton, { color: this.state.tabSelected == 0 ? 'white' : orangeColor }]}
                        style={this.state.tabSelected == 0
                            ? styles.buttonTabSelect
                            : styles.buttonTab}
                        buttonSign={"Available"} />
                    <Button
                        onPress={this.onPressUseTab}
                        textStyle={[styles.textButton, { color: this.state.tabSelected == 1 ? 'white' : orangeColor }]}
                        style={this.state.tabSelected == 1
                            ? styles.buttonTabSelect
                            : styles.buttonTab}
                        buttonSign={"Use"} />
                </View>
                <ListCoupon tabSelected={this.state.tabSelected} />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgHeaderBarRight: {
        width: '100%',
        height: '100%',
        borderRadius: responsiveWidth(2)
    },
    viewButtonTab: {
        marginTop: responsiveHeight(3.9),
        flexDirection: 'row',
        // backgroundColor: 'skyblue'
        //paddingHorizontal: responsiveWidth(4)
    },
    buttonTab: {
        flex: 1,
        height: responsiveHeight(5.3),
        backgroundColor: 'rgba(255, 108, 68, 0.1)'
    },
    buttonTabSelect: {
        flex: 1,
        height: responsiveHeight(5.3),
    },
    textButton: {
        fontFamily: 'SVN-Gilroy-Bold',
        fontWeight: '700',
        fontSize: responsiveFontSize(2.09),
    }
});
