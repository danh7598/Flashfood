import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import RangeSlider from 'rn-range-slider';
import { blackColor, grayColor, orangeColor } from '../../string/ColorTheme';
import { sizeHeight, sizeWidth } from '../../Utils/Size';


const ThumbSlider = () => {
    return (
        <View style={styles.thumbSlider}>
        </View>
    );
};

const Rail = () => {
    return (
        <View
            // onLayout={(event) => { this.find_dimesions(event.nativeEvent.layout); }}
            style={styles.rail} />
    );
};

const RailSelected = ({ style }) => {

    return (
        <View style={styles.railSelected}>

        </View>
    );
};


const ItemSlider = ({ title, startRange, endRange, unit, step, disableRange }) => {
    const [low, setLow] = useState(startRange);
    const [high, setHigh] = useState(endRange);
    const onValueSliderChange = useCallback((low, high) => {
        if (low == high && low != endRange) {
            setLow(low);
            setLow(low - 0.1 * endRange);
            setLow(high);
            setHigh(high + 0.1 * endRange);
        } else if (low == endRange) {
            setLow(low);
            setLow(low - 0.1 * endRange);
        } else {
            setLow(low);
            setHigh(high);
        }
    }, []);
    // console.log(low, high);
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>{title}</Text>
            <RangeSlider
                onValueChanged={onValueSliderChange}
                allowLabelOverflow={true}
                style={styles.viewSlider}
                low={low}
                high={high}
                min={startRange}
                max={endRange}
                step={1}
                disableRange={disableRange} //Không hiện thumb ở bên phải
                renderThumb={() => <ThumbSlider />}
                renderRail={() => <Rail />}
                renderRailSelected={() => <RailSelected />}
            />
            <View style={styles.viewLabel}>
                <Text style={styles.textLabel}>{unit == '$' ? '$' + low : low + ' ' + unit}</Text>
                <Text style={styles.textLabel}>{unit == '$' ? '$' + high : high + ' ' + unit}</Text>
            </View>
        </View>
    );
};

export default ItemSlider;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: sizeWidth(6.4),
        marginTop: sizeHeight(1.97)
    },
    textTitle: {
        fontFamily: 'SVN-Gilroy-SemiBold',
        fontWeight: '600',
        color: blackColor,
        fontSize: responsiveFontSize(1.83)
    },
    viewSlider: {
        marginTop: sizeHeight(1.97),
        // height: sizeHeight(3),
        // width: sizeWidth(84),
        //alignSelf: 'center'
        justifyContent: 'center',
        //alignItems: 'center',
        //backgroundColor: '#383359',
    },
    thumbSlider: {
        width: sizeWidth(6.4),
        height: sizeWidth(6.4),
        borderRadius: sizeWidth(3.2),
        backgroundColor: orangeColor,
        //marginHorizontal: sizeWidth(3.2),
        borderWidth: 2,
        borderColor: 'white',
    },
    rail: {
        flex: 1,                            //flex = 1 để hiện full width mà không bị thụt vào
        height: sizeHeight(0.98),
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: sizeWidth(1.6),
        backgroundColor: '#bdc3c7',
        //borderWidth: 1
    },
    railSelected: {
        //flex = 1 Chỉ có rail mới có flex = 1, rail selected k được để flex 
        height: sizeHeight(0.98),
        borderRadius: sizeWidth(1.6),
        backgroundColor: orangeColor,
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewLabel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: sizeWidth(1.2),
        marginTop: sizeHeight(1.97)
    },
    textLabel: {
        color: '#525C67',
        fontSize: responsiveFontSize(1.83),
        fontFamily: 'SVN-Gilroy-Medium',
        fontWeight: '500'
    }
});
