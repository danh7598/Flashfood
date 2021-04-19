import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { sizeHeight, sizeWidth } from '../../Utils/Size';
import CardReceipt from './CardReceipt';
import HeaderBar from './HeaderBar';
import SliderAvatar from './SliderAvatar';
const totalBill = 750.86;
const maxValue = 100;

export default class SplitMoneyHomeWork extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueSlider1: maxValue / 3,
            valueSlider2: maxValue / 3,
            valueSlider3: maxValue / 3,
        };
    }

    handleValueSlider1 = (value) => {
        // console.log(value);
        this.setState({
            valueSlider1: value,
            valueSlider2: maxValue - value - this.state.valueSlider3
        });
    };
    handleValueSlider2 = (value) => {
        this.setState({
            valueSlider2: value,
            valueSlider3: maxValue - value - this.state.valueSlider1
        });
    };
    handleValueSlider3 = (value) => {
        this.setState({
            valueSlider3: value,
            valueSlider1: maxValue - value - this.state.valueSlider2
        });
    };

    render() {
        // console.log(this.state.valueSlider1);
        return (
            <View style={styles.container}>
                <HeaderBar />
                <CardReceipt />
                <SliderAvatar
                    value={this.state.valueSlider1}
                    onValueSliderChange={this.handleValueSlider1}
                    cost={(totalBill * (this.state.valueSlider1 / 100)).toFixed(2)}
                    name={'Me'}
                    backgroundColor={'#A0BEEC'} />
                <SliderAvatar
                    value={this.state.valueSlider2}
                    onValueSliderChange={this.handleValueSlider2}
                    cost={(totalBill * (this.state.valueSlider2 / 100)).toFixed(2)}
                    name={'Cody'}
                    backgroundColor={'#AA9EE2'} />
                <SliderAvatar
                    value={this.state.valueSlider3}
                    onValueSliderChange={this.handleValueSlider3}
                    cost={(totalBill * (this.state.valueSlider3 / 100)).toFixed(2)}
                    name={'Kalifa'}
                    backgroundColor={'#EBA897'} />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#49426C'
    }
});
