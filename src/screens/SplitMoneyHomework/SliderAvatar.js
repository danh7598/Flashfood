import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import RangeSlider from 'rn-range-slider';
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size';

const ThumbSlider = () => {
    return (
        <View style={styles.thumbSlider} />

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
    let range = 5.29; //Chính là khoảng cách từng cục view với nhau và với bên phải ngoài cùng, bằng beginRange + 1.25
    let beginRange = 4.04; //Chính là khoảng cách từ ngoài cùng đến cục viewLarge đầu tiên, bằng width của Rail chia cho 16, trừ đi 1.25
    return (
        <View style={[styles.railSelected, style]}>
            {[1, 2, 3, 4, 5].map((item, index) => {
                //console.log(beginRange);
                return (
                    <View
                        key={index.toString()}
                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={[styles.viewLarge, {
                            left: index == 0
                                ? sizeWidth(beginRange)
                                : sizeWidth(beginRange = beginRange + range)
                        }]} />
                        <View style={[styles.viewSmall, { left: sizeWidth(beginRange = beginRange + range) }]} />
                        <View style={[styles.viewSmall, { left: sizeWidth(beginRange = beginRange + range) }]} />
                    </View>
                );
            })}
        </View>
    );
};

find_dimesions = (layout) => {
    const { x, y, width, height } = layout;
    // console.log("X:", x);
    // console.log("Y:", y);
    // console.log("Width:", (width / sizeWidth(100) * 100));
    // console.log("Height:", height);
};

const SliderAvatar = ({ name, cost, backgroundColor, value, onValueSliderChange }) => {
    //console.log(sizeWidth(87.2));
    return (
        <View style={styles.container}>
            <View style={styles.viewInfo}>
                <View style={styles.viewNameAndAvatar}>
                    <View style={[styles.viewAvatar, { backgroundColor: backgroundColor }]}>
                        <Image
                            style={styles.imgAvatar}
                            source={require('../../assets/man-avatar.png')} />
                    </View>
                    <Text style={styles.textName}>{name}</Text>
                </View>
                <Text style={styles.textName}>${cost}</Text>
            </View>
            <RangeSlider
                low={value}
                onValueChanged={onValueSliderChange}
                style={styles.viewSlider}
                min={0}
                max={100}
                step={100 / 16}
                disableRange={true} //Không hiện thumb ở bên phải
                renderThumb={() => <ThumbSlider />}
                renderRail={() => <Rail />}
                renderRailSelected={() => <RailSelected style={{ backgroundColor: backgroundColor }} />}
            />
        </View>
    );
};

export default SliderAvatar;

const styles = StyleSheet.create({
    container: {
        marginTop: sizeHeight(3.125)
    },
    viewInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: sizeWidth(6.4),
    },
    viewNameAndAvatar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewAvatar: {
        width: sizeWidth(8),
        height: sizeWidth(8),
        borderRadius: sizeWidth(4),
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgAvatar: {
        width: sizeWidth(5),
        height: sizeWidth(5)
    },
    textName: {
        fontSize: sizeFont(5),
        color: 'white',
        fontWeight: '700',
        marginLeft: sizeWidth(3)
    },
    viewSlider: {
        marginTop: sizeHeight(1),
        // height: sizeHeight(3),
        // width: sizeWidth(84),
        //alignSelf: 'center'
        justifyContent: 'center',
        marginHorizontal: sizeWidth(3.2),    //Chỉ margin ở slider là đủ để cách 2 bên tracker
        //alignItems: 'center',
        //backgroundColor: '#383359',
    },
    thumbSlider: {
        width: sizeWidth(9),
        height: sizeWidth(9),
        borderRadius: sizeWidth(4.5),
        backgroundColor: '#EFC18D',
        //marginHorizontal: sizeWidth(3.2),
        borderWidth: sizeWidth(.5),
        borderColor: 'white',
    },
    rail: {
        //width: sizeWidth(100),
        flex: 1,                            //flex = 1 để hiện full width mà không bị thụt vào
        height: sizeHeight(3),
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: sizeWidth(8),
        backgroundColor: '#383359',
        //borderWidth: 1
    },
    railSelected: {
        //width: sizeWidth(87.2),
        // marginHorizontal: sizeWidth(6.4),
        //paddingHorizontal: sizeWidth(8),
        flex: 1,                            //flex = 1 để hiện full width mà không bị thụt vào
        height: sizeHeight(3),
        borderRadius: sizeWidth(8),
        backgroundColor: '#9EC3EF',
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewLarge: {
        position: 'absolute',
        borderRadius: sizeWidth(1.25),
        backgroundColor: '#EFC18D',
        width: sizeWidth(2.5),
        height: sizeWidth(2.5),
        borderWidth: sizeWidth(0.75),
        borderColor: 'white',
    },
    viewSmall: {
        position: 'absolute',
        borderRadius: sizeWidth(1.25),
        backgroundColor: 'white',
        width: sizeWidth(2.5),
        height: sizeWidth(2.5),
        borderColor: 'transparent', //ẩn đi border nhưng vẫn giữ kích thước giống bên large
        borderWidth: sizeWidth(1)
        //borderWidth: sizeWidth(1),
        //borderColor: 'white',

    }

});
