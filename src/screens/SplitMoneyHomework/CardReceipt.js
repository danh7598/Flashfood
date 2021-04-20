import React from 'react';
import { Image, StyleSheet, Text, View, Platform } from 'react-native';
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size';

const CardReceipt = () => {
    return (
        <View style={styles.container}>
            <View style={styles.circleLeft} />
            <Text style={styles.textSplitLine}>--------------------------------------------</Text>
            <View style={styles.circleRight} />
            <View style={styles.viewHeader}>
                <Text style={styles.textHeader}>Receipt</Text>
            </View>
            <View style={styles.viewTitle}>
                <View style={styles.title}>
                    <Text style={[styles.textTitle, {
                        width: sizeWidth(40)
                    }]}>Title</Text>
                    <Text style={styles.textTitle}>Total Bill</Text>
                </View>
                <View style={styles.value}>
                    <Text style={[styles.textValue, , {
                        width: sizeWidth(40)
                    }]}>Team Dinner</Text>
                    <Text style={styles.textValue}>$750.86</Text>
                </View>
            </View>
            <View style={styles.viewSplitWith}>
                <View style={styles.viewGroupAvatar}>
                    <View style={[styles.viewAvatar, {
                        position: 'absolute',
                        right: sizeWidth(6),
                        backgroundColor: '#AA9EE2'
                    }]}>
                        <Image
                            style={styles.imgAvatar}
                            source={require('../../assets/man-avatar.png')} />
                    </View>
                    <View style={[styles.viewAvatar, {
                        position: 'absolute',
                        left: sizeWidth(6),
                        backgroundColor: '#EBA897'
                    }]}>
                        <Image
                            style={styles.imgAvatar}
                            source={require('../../assets/man-avatar.png')} />
                    </View>
                    <View style={styles.viewAvatar}>
                        <Image
                            style={styles.imgAvatar}
                            source={require('../../assets/man-avatar.png')} />
                    </View>
                    {/* <SliderAvatar /> */}
                </View>
                <Text style={styles.textSplitting}>Splitting With</Text>
            </View>
        </View>
    );
};

export default CardReceipt;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EFC18D',
        width: sizeWidth(87.2),
        height: sizeHeight(30),
        borderRadius: sizeWidth(8),
        alignSelf: 'center',
        marginTop: sizeHeight(4.16)
    },
    circleLeft: {
        width: sizeWidth(6),
        height: sizeWidth(6),
        backgroundColor: '#49426C',
        borderRadius: sizeWidth(3),
        position: 'absolute',
        top: sizeHeight(5.5),
        left: -sizeWidth(3)
    },
    circleRight: {
        width: sizeWidth(6),
        height: sizeWidth(6),
        backgroundColor: '#49426C',
        borderRadius: sizeWidth(3),
        position: 'absolute',
        top: sizeHeight(5.5),
        right: -sizeWidth(3)
    },
    textSplitLine: {
        color: '#49426C',
        position: 'absolute',
        top: sizeHeight(5.5),
        textAlign: 'center',
        lineHeight: sizeHeight(3.5),
        fontSize: sizeFont(7),
        //backgroundColor: 'skyblue',
        width: sizeWidth(87.5)
    },
    viewHeader: {
        alignSelf: 'center',
        width: sizeWidth(25),
        height: sizeHeight(4.5),
        marginTop: sizeHeight(1.25),
        borderRadius: sizeWidth(2),
        backgroundColor: '#373058',
        justifyContent: 'center'
    },
    textHeader: {
        color: '#C1BFD6',
        fontWeight: '700',
        textAlign: 'center',
        fontSize: sizeFont(3.5)
    },
    viewTitle: {
        marginTop: sizeHeight(4),
        paddingLeft: sizeWidth(6.4),
        //backgroundColor: "skyblue"
    },
    title: {
        flexDirection: 'row',
    },
    value: {
        flexDirection: 'row',
    },
    textTitle: {
        color: '#49426C',
        fontSize: sizeFont(3)
    },
    textValue: {
        color: '#49426C',
        fontSize: sizeFont(5),
        fontWeight: 'bold',
        marginTop: sizeHeight(0.5)
    },
    viewSplitWith: {
        //width: sizeWidth(80.8),
        flex: 1,
        marginHorizontal: sizeWidth(2.4),
        backgroundColor: '#49426C',
        marginTop: sizeHeight(1),
        marginBottom: sizeWidth(2.4),
        //height: sizeHeight(125),
        borderRadius: sizeWidth(6),
        alignItems: 'center',
        justifyContent: 'center'

    },
    textSplitting: {
        color: 'white',
        fontSize: sizeFont(3.5),
        marginTop: sizeHeight(1),
        fontWeight: '700'
    },
    viewGroupAvatar: {
        flexDirection: 'row',
    },
    viewAvatar: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A0BEEC',
        width: sizeWidth(9),
        height: sizeWidth(9),
        borderRadius: sizeWidth(4.5),
        borderWidth: 1,
        borderColor: 'white'
    },
    imgAvatar: {
        width: sizeWidth(6),
        height: sizeWidth(6),
    }
});
