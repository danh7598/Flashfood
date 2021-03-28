import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ButtonWithoutImage from './ButtonWithoutImage'
import QuestionSign from './QuestionSign'

export default class ButtonSignAndSocial extends Component {
    render() {
        return (
            <View style={styles.buttonContainer}>
                <View>
                    <ButtonWithoutImage buttonSign={this.props.buttonSign} />
                    <QuestionSign
                        alternativeButtonSign={this.props.alternativeButtonSign}
                        questionSign={this.props.questionSign} />
                </View>
                <View style={styles.viewSocialButton}>
                    <TouchableOpacity
                        style={[
                            styles.socialLoginButton,
                            { backgroundColor: "#0064C0" },
                        ]}
                        onPress={this.props.onPressGoogle}>
                        <Image
                            style={styles.imgSocial}
                            source={require("../../assets/facebook.png")}
                        />
                        <Text style={{ fontSize: 14, color: "white" }}>
                            Continue With Facebook
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.socialLoginButton,
                            { marginTop: 16, backgroundColor: "#F5F5F8" },
                        ]}
                        onPress={this.props.onPressGoogle} >
                        <Image
                            style={styles.imgSocial}
                            source={require("../../assets/google.png")}
                        />
                        <Text style={{ fontSize: 14, color: "#111A2C" }}>
                            Continue With Google
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    loginFormContainer: {
        //backgroundColor: 'cornsilk',
        flex: 1,
    },
    formComponentView: {
        height: 72,
        marginHorizontal: 16,
        //backgroundColor: 'skyblue',
        marginTop: 24,
    },
    viewNameFormAndNoti: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
    },
    textNameForm: {
        color: "#525C67",
        fontSize: 14,
    },
    textFormNoti: {
        fontSize: 14,
        color: "#F96B44",
    },
    viewTextInput: {
        //borderWidth: 1,
        //borderColor: '#F96B44',
        height: 48,
        borderRadius: 10,
        backgroundColor: "#F5F5F8",
        //alignItems: 'center',
        alignItems: "center",
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textInput: {
        fontSize: 14,
        width: 300,
        //fontFamily: ''
        //backgroundColor: 'cornsilk',
    },
    imgRight: {
        width: 16,
        height: 16,
    },
    viewSaveAndForgot: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 16,
        marginTop: 16,
        //backgroundColor: 'green'
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'space-between',
        //backgroundColor: 'skyblue'
        //alignItems: 'center'
    },
    viewSocialButton: {
        paddingHorizontal: 24,
        //backgroundColor: 'cornsilk',
        //alignItems: 'center',
        marginBottom: 32

    },
    socialLoginButton: {
        height: 48,
        borderRadius: 8,
        backgroundColor: "#F96B44",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    imgSocial: {
        width: 16,
        height: 16,
        marginRight: 8,
    },
});
