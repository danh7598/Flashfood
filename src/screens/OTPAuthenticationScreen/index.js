import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TextInput } from 'react-native';
import { blackColor, grayColor } from '../../string/ColorTheme';
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size';
import Button from '../LoginScreen/Button';
import QuestionSign from '../LoginScreen/QuestionSign';
import HeaderText from '../RegisterHomework/HeaderText';
import OTPInput from './OTPInput';


/*   CÁCH DÙNG REF
*   Tạo ref bằng const ref = createRef()
*   Dùng props ref ở trong TextInput, gọi focus bằng ref.current.focus()
*   Nếu dùng ref trong một component, dùng forwardRef((props, ref) => (
    <TextInput ref={ref}/> rồi dùng focus() như bình thường
))
*/

const firstInput = React.createRef();
const secondInput = React.createRef();
const thirdInput = React.createRef();
const fourthInput = React.createRef();

export default class OPTAuthenticationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstValue: '',
            secondValue: '',
            thirdValue: '',
            fourthValue: '',
            time_remain: 5,
            isDisabled: true
        };
    }

    onChangeFirstInput = (text) => {
        if (text === '') {
            this.setState({ firstValue: '' });
            firstInput.current.focus();
        } else {
            this.setState({ firstValue: text });
            secondInput.current.focus();
        }
    };

    onChangeSecondInput = (text) => {
        if (text === '') {
            this.setState({ secondValue: '' });
            firstInput.current.focus();
        } else {
            this.setState({ secondValue: text });
            thirdInput.current.focus();
        }
    };

    onChangeThirdInput = (text) => {
        if (text === '') {
            this.setState({ thirdValue: '' });
            secondInput.current.focus();
        } else {
            this.setState({ thirdValue: text });
            fourthInput.current.focus();
        }
    };

    onChangeFourthInput = (text) => {
        if (text === '') {
            this.setState({ fourthValue: '' });
            thirdInput.current.focus();
        } else {
            this.setState({ fourthValue: text });
            fourthInput.current.focus();
        }
    };


    componentDidMount() {
        this.interval = setInterval(
            () => this.setState((prevState) => ({
                time_remain: prevState.time_remain - 1
            })),
            1000
        );
    }

    componentDidUpdate() {
        if (this.state.time_remain === 0) {
            this.setState({
                time_remain: -1,
                isDisabled: false
            });
            clearInterval(this.interval);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    reSendButton = () => {
        alert("Resend OTP");
        this.setState({
            isDisabled: true,
            time_remain: 5
        });
        this.interval = setInterval(
            () => this.setState((prevState) => ({
                time_remain: prevState.time_remain - 1,

            })),
            1000
        );
    };

    render() {
        const email = 'danh7598@gmail.com';
        const time_remain = 60;

        // console.log(this.firstInput)
        // console.log(JSON.stringify(this.firstInput));
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
                    <OTPInput
                        ref={firstInput}
                        onChangeValue={this.onChangeFirstInput}
                        value={this.state.firstValue} />
                    <OTPInput
                        ref={secondInput}
                        onChangeValue={this.onChangeSecondInput}
                        value={this.state.secondValue} />
                    <OTPInput
                        ref={thirdInput}
                        onChangeValue={this.onChangeThirdInput}
                        value={this.state.thirdValue} />
                    <OTPInput
                        ref={fourthInput}
                        onChangeValue={this.onChangeFourthInput}
                        value={this.state.fourthValue} />
                </View>
                <QuestionSign
                    onPress={this.reSendButton}
                    disabled={this.state.isDisabled}
                    alternativeButtonSign={this.state.isDisabled
                        ? `Resend Code (${this.state.time_remain}s)`
                        : `Resend Code`}
                    questionSign={"Didn't receive code? "} />
                <View style={styles.viewFooter}>
                    <Button
                        style={styles.buttonContinue}
                        buttonSign={'Continue'} />
                    <QuestionSign
                        flexDirection={'column'}
                        questionSign={`By Signing up, you agree to our`}
                        alternativeButtonSign={"Term and Conditions"}
                    />
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
        width: sizeWidth(80),
        marginBottom: sizeHeight(3)
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
    },
    buttonContinue: {
        width: sizeWidth(92),
        marginHorizontal: sizeWidth(4),
        marginBottom: sizeHeight(2)
    },
    viewFooter: {
        alignItems: 'center',
        position: 'absolute',
        bottom: sizeHeight(4),
    }
});
