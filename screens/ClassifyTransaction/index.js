import React, { Component } from 'react'
import { Image, ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size'
import { LinearGradient } from 'expo-linear-gradient';
import TransactionItem from './TransactionItem'

export default class ClassifyTransaction extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LinearGradient
                    style={styles.headerBlock}
                    colors={['#f953c6', '#b91d73']} />
                <View style={styles.viewTextHeader}>
                    <Text style={styles.textHeader}>
                        Classify Transaction
                    </Text>
                    <Text style={styles.textLightHeader}>
                        Classify this transaction into a particular category
                    </Text>
                </View>

                <View style={styles.listItem}>
                    <View style={styles.rowView}>
                        <TransactionItem
                            textColor={'#0083B0'}
                            sourceImage={require('../../assets/app.png')}
                            linearGradientColors={['#00B4DB', '#0083B0']}
                            name={'General'} />
                        <TransactionItem
                            textColor={'#8E2DE2'}
                            sourceImage={require('../../assets/bus.png')}
                            linearGradientColors={['#8E2DE2', '#4A00E0']}
                            name={'Transport'} />
                    </View>
                    <View style={styles.rowView}>
                        <TransactionItem
                            textColor={'#ec008c'}
                            sourceImage={require('../../assets/bag.png')}
                            linearGradientColors={['#ec008c', '#fc6767']}
                            name={'Shopping'} />
                        <TransactionItem
                            textColor={'#D38312'}
                            sourceImage={require('../../assets/bill.png')}
                            linearGradientColors={['#D38312', '#A83279']}
                            name={'Bills'} />
                    </View>
                    <View style={styles.rowView}>
                        <TransactionItem
                            textColor={'#396afc'}
                            sourceImage={require('../../assets/youtube.png')}
                            linearGradientColors={['#396afc', '#2948ff']}
                            name={'General'} />
                        <TransactionItem
                            textColor={'#56ab2f'}
                            sourceImage={require('../../assets/groceries.png')}
                            linearGradientColors={['#56ab2f', '#a8e063']}
                            name={'Grocery'} />
                    </View>

                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#1A1B2F'
    },
    headerBlock: {
        position: 'absolute',
        left: -sizeWidth(25),
        top: -sizeHeight(28),
        width: sizeWidth(100) * 0.9,
        height: sizeHeight(100) * 0.6,
        //backgroundColor: '#ff4081',
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
        transform: [{
            rotateX: '0deg'
        }, {
            rotateZ: '-40deg'
        }
        ]
    },
    viewTextHeader: {
        position: 'absolute',
        top: sizeHeight(5),
        left: sizeWidth(10),
        //backgroundColor: 'skyblue',
        height: sizeHeight(20),
        width: sizeWidth(70)
    },
    textHeader: {
        color: 'white',
        fontSize: sizeFont(6),
        fontFamily: 'SVN-Gilroy-Bold'
    },
    textLightHeader: {
        fontSize: sizeFont(4.5),
        fontFamily: 'SVN-Gilroy-Medium',
        color: 'white',
        marginTop: sizeHeight(1)
    },
    rowView: {
        width: sizeWidth(100),
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    listItem: {
        position: 'absolute',
        bottom: 0,
        height: sizeHeight(80),
        //backgroundColor: 'skyblue',
        justifyContent: 'space-around'
    }

})