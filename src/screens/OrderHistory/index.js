import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import HeaderBar from '../../common/HeaderBar';
import back from '../../assets/back.png';
import face_woman from '../../assets/face_woman.jpeg';
import { sizeWidth } from '../../Utils/Size';
import { responsiveFontSize, responsiveHeight, responsiveWidth, } from 'react-native-responsive-dimensions';
import Button from '../Login/Button';
import { FlatList } from 'react-native-gesture-handler';
import pizza_hut_logo from '../../assets/pizza-hut-logo.png';
import ItemOrder from './ItemOrder';
import ListHistory from './ListHistory';
import ListUpcoming from './ListUpcoming';
import { orangeColor } from '../../string/ColorTheme';

export default class OrderHistory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tabSelected: 0,
            loading: true,
        };
    }

    onPressHistoryTab = () => {
        this.setState({ tabSelected: 0 });
    };

    onPressUpcomingTab = () => {
        this.setState({ tabSelected: 1 });
    };

    onPressBack = () => {
        alert("Press back");
    };
    render() {
        return (
            <View style={styles.container}>
                <HeaderBar
                    title={'MY ORDERS'}
                    rightBtn
                    onPressLeftBtn={this.onPressBack}
                    styleRightBtn={styles.imgHeaderBarRight}
                    rightBtnSource={face_woman}
                    leftBtnSource={back} />
                <View style={styles.viewButtonTab}>
                    <Button
                        onPress={this.onPressHistoryTab}
                        textStyle={[styles.textButton, { color: this.state.tabSelected == 0 ? 'white' : orangeColor }]}
                        style={this.state.tabSelected == 0
                            ? styles.buttonTabSelect
                            : styles.buttonTab}
                        buttonSign={"History"} />
                    <Button
                        onPress={this.onPressUpcomingTab}
                        textStyle={[styles.textButton, { color: this.state.tabSelected == 1 ? 'white' : orangeColor }]}
                        style={this.state.tabSelected == 1
                            ? styles.buttonTabSelect
                            : styles.buttonTab}
                        buttonSign={"Upcoming"} />
                </View>
                {this.state.tabSelected == 0 ? <ListHistory /> : <ListUpcoming />}
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
