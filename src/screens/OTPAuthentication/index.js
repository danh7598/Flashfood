import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TextInput } from 'react-native'
import { blackColor, grayColor } from '../../string/ColorTheme'
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size'
import HeaderText from '../RegisterHomework/HeaderText'

export default class OPTAuthentication extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstValue: '',
            secondValue: '',
            thirdValue: '',
            fourthValue: '',
        }
    }

    onChangeValueInput = (text, value, backFocus, forwardFocus) => {
        if (text === '') {
            this.setState(value)
            this.refs[backFocus].focus()
        } else {
            this.setState({ secondValue: text })
            this.refs[forwardFocus].focus()
        }
    }

    render() {
        const email = 'danh7598@gmail.com'
        return (
            <View style={styles.container}>
                <View style={styles.headerView}>
                    <Image style={styles.imgLogo} source={require('../../assets/logo-eatme.png')} />
                    <HeaderText
                        lineHeight={sizeHeight(2.5)}
                        textBold={"OTP Authentication"}
                        textLight={`An authentication code have been sent to ${email}`} />
                </View>
                <View style={styles.viewOPTInput}>
                    <TextInput
                        value={this.state.firstValue}
                        maxLength={1}
                        ref={'firstInput'}
                        keyboardType={'numeric'}
                        onChangeText={(text) => {
                            if (text === '') {
                                this.setState({ firstValue: '' })
                            } else {
                                this.setState({ firstValue: text })
                                this.refs['secondInput'].focus()
                            }
                            
                        }}
                        style={styles.textInputOPT} />
                    <TextInput
                        maxLength={1}
                        value={this.state.secondValue}
                        ref={'secondInput'}
                        keyboardType={'numeric'}
                        onChangeText={(text, backFocus, forwardFocus) => {
                            if (text === '') {
                                this.setState({ secondValue: '' })
                                this.refs['firstInput'].focus()
                            } else {
                                this.setState({ secondValue: text })
                                this.refs['thirdInput'].focus()
                            }
                        }}
                        style={styles.textInputOPT} />
                    <TextInput
                        maxLength={1}
                        value={this.state.thirdValue}
                        ref={'thirdInput'}
                        keyboardType={'numeric'}
                        onChangeText={(text) => {
                            if (text === '') {
                                this.setState({ thirdValue: '' })
                                this.refs['secondInput'].focus()
                            } else {
                                this.setState({ thirdValue: text })
                                this.refs['fourthInput'].focus()

                            }
                        }}
                        style={styles.textInputOPT} />
                    <TextInput
                        maxLength={1}
                        value={this.state.fourthValue}
                        ref={'fourthInput'}
                        keyboardType={'numeric'}
                        onChangeText={(text) => {
                            if (text === '') {
                                this.setState({ fourthValue: '' })
                                this.refs['thirdInput'].focus()
                            } else {
                                this.setState({ fourthValue: text })
                            }
                            
                        }}
                        style={styles.textInputOPT} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    headerView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: sizeHeight(4),
        //marginBottom: sizeHeight(4),
        //backgroundColor: 'skyblue'
    },
    imgLogo: {
        width: sizeWidth(50),
        height: sizeHeight(8),
        resizeMode: 'contain',
        marginBottom: sizeHeight(5)
        //backgroundColor: 'skyblue',
    },
    viewOPTInput: {
        flexDirection: 'row',
        marginTop: sizeHeight(5),
        justifyContent: 'space-around',
        width: sizeWidth(80)
    },
    textInputOPT: {
        width: sizeWidth(15),
        height: sizeWidth(15),
        backgroundColor: grayColor,
        borderRadius: sizeWidth(3),
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderWidth: 0.5,
        borderColor: '#CFD0D7',
        fontFamily: 'SVN-Gilroy-Bold',
        fontSize: sizeFont(5),
        color: blackColor
    }
})
